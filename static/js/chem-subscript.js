document.addEventListener("DOMContentLoaded", () => {
  const nodes = document.querySelectorAll(
    ".pub-list-item, .article-title, h1, h2, h3, a"
  );

  nodes.forEach((el) => {
    const html = el.innerHTML;

    // Only touch elements that contain "BaZr" and "Y" (cheap filter)
    if (!html.includes("BaZr") || !html.includes("Y")) return;

    // Replace subscripts even if there are weird chars/spans around
    let out = html;

    // BaZr0.8  -> BaZr<sub>0.8</sub>
    out = out.replace(/BaZr\s*0\s*[.,]\s*8/g, "BaZr<sub>0.8</sub>");

    // Y0.2 or Y0.203 -> Y<sub>0.2</sub> or Y<sub>0.203</sub>
    // (this keeps whatever number is there)
    out = out.replace(/Y\s*0\s*[.,]\s*(\d+)/g, "Y<sub>0.$1</sub>");

    // O3 -> O<sub>3</sub>
    out = out.replace(/O\s*3\s*–?\s*δ/g, "O<sub>3–δ</sub>");
    out = out.replace(/O\s*3/g, "O<sub>3</sub>");

    // Keep δ as-is, but normalize dash around it
    out = out.replace(/O<sub>3<\/sub>\s*–\s*<sub>δ<\/sub>/g, "O<sub>3–δ</sub>");

    if (out !== html) el.innerHTML = out;
  });
});
