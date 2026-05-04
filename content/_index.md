---
title: Home
type: landing

sections:
  - block: markdown
    id: home-custom
    design:
      columns: "1"
    content:
      title: ""
      text: |
        <style>
        .home-section { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
        .home-section:first-of-type { padding-top: 2.2rem !important; }
        .article-container, .container { max-width: 1180px !important; }
        .cmrg-home { width: 100%; }
        .cmrg-hero { margin-bottom: 2.5rem; }
        .cmrg-hero h1 { font-size: clamp(1.6rem, 2.2vw, 2.4rem); line-height: 1.15; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 1.2rem 0; color: #222; max-width: none; }
        .cmrg-hero p { font-size: clamp(1.08rem, 1.45vw, 1.45rem); line-height: 1.65; color: #333; margin: 0; max-width: 980px; }
        .cmrg-main { display: grid; grid-template-columns: minmax(280px, 330px) minmax(0, 1fr); gap: 2.2rem; align-items: center; margin-bottom: 2.7rem; }
        .cmrg-logo { display: flex; align-items: center; justify-content: center; }
        .cmrg-logo svg { width: 100%; max-width: 290px; height: auto; display: block; }
        .cmrg-copy h2 { font-size: clamp(1.45rem, 2vw, 1.9rem); line-height: 1.2; font-weight: 700; margin: 0 0 1rem 0; color: #222; }
        .cmrg-copy p { font-size: 1.08rem; line-height: 1.78; color: #333; margin: 0 0 1rem 0; max-width: 760px; }
        .cmrg-copy p:last-child { margin-bottom: 0; }
        .cmrg-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; margin-top: 0.3rem; }
        .cmrg-card { display: block; text-decoration: none !important; color: inherit !important; border: 0.5px solid rgba(0,0,0,0.1); border-top: 3px solid #1f355e; border-radius: 0 0 12px 12px; padding: 1.2rem 1.15rem 1.1rem 1.15rem; background: #fff; transition: transform 0.15s ease, box-shadow 0.15s ease; height: 100%; }
        .cmrg-card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.07); }
        .cmrg-card-icon { display: block; width: 36px; height: 36px; margin-bottom: 0.9rem; opacity: 0.88; background: transparent !important; }
        .cmrg-card-icon path, .cmrg-card-icon rect, .cmrg-card-icon circle, .cmrg-card-icon line { fill: none; }
        .cmrg-card-title { font-size: 1.02rem; font-weight: 700; margin-bottom: 0.45rem; color: #1f355e; }
        .cmrg-card-text { font-size: 0.96rem; line-height: 1.6; color: #444; }
        @media (max-width: 900px) {
        .cmrg-main { grid-template-columns: 1fr; gap: 1.4rem; align-items: start; }
        .cmrg-logo { justify-content: flex-start; }
        .cmrg-logo svg { max-width: 220px; }
        .cmrg-links { grid-template-columns: 1fr; }
        .cmrg-hero { margin-bottom: 2rem; }
        .cmrg-hero h1 { max-width: none; }
        }
        </style>
        <div class="cmrg-home">
        <div class="cmrg-hero">
        <h1>Chemo-Mechanical Research Group</h1>
        <p>Our research lies at the boundary between mechanics, materials, and electrochemistry, where different physical processes interact and shape how materials behave. By bringing together solid mechanics with transport, phase change, and microstructural evolution, our work addresses a broad range of multiphysics problems in energy and advanced materials.</p>
        </div>
        <div class="cmrg-main">
        <div class="cmrg-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 308">
        <defs>
        <style>
        .r {
          fill: #1f355e;
          opacity: 0;
          animation: rIn 0.42s cubic-bezier(0.22,0.61,0.36,1) forwards;
        }
        @keyframes rIn {
          0%   { opacity: 0; transform: translate(6px, -6px); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: translate(0, 0); }
        }
        </style>
        </defs>
          <polygon class="r" style="animation-delay:0ms" points="4.0,150.92 150.0,154.0 4.0,157.08"/>
          <polygon class="r" style="animation-delay:52ms" points="8.9,117.64 17.21,121.56 25.62,125.27 34.11,128.76 42.69,132.04 51.34,135.1 60.06,137.94 68.85,140.56 77.69,142.96 86.6,145.13 95.55,147.08 104.54,148.81 113.58,150.31 122.65,151.58 131.74,152.62 140.86,153.42 150.0,154.0 143.09,153.87 136.19,153.62 129.29,153.23 122.39,152.71 115.51,152.06 108.64,151.28 101.79,150.36 94.95,149.32 88.14,148.15 81.34,146.86 74.57,145.43 67.82,143.87 61.11,142.19 54.42,140.38 47.77,138.45 41.15,136.38 38.95,135.67 36.75,134.94 34.56,134.2 32.37,133.44 30.18,132.66 28.0,131.88 25.82,131.08 23.65,130.26 21.48,129.43 19.32,128.59 17.16,127.74 15.0,126.87 12.85,125.99 10.71,125.09 8.57,124.18 6.44,123.26"/>
          <polygon class="r" style="animation-delay:104ms" points="19.54,88.35 26.52,94.47 33.7,100.34 41.07,105.97 48.62,111.34 56.34,116.44 64.23,121.29 72.27,125.86 80.46,130.16 88.77,134.17 97.22,137.9 105.78,141.34 114.45,144.49 123.21,147.33 132.07,149.86 141.0,152.09 150.0,154.0 140.83,152.45 131.72,150.57 122.69,148.38 113.73,145.87 104.86,143.05 96.09,139.94 87.43,136.52 78.88,132.81 70.46,128.81 62.16,124.52 54.01,119.95 46.01,115.11 38.16,109.99 30.49,104.61 22.98,98.96 15.67,93.06 15.71,93.01 15.83,92.86 16.02,92.63 16.27,92.32 16.56,91.97 16.89,91.57 17.24,91.14 17.6,90.71 17.96,90.27 18.31,89.84 18.64,89.44 18.94,89.09 19.18,88.79 19.37,88.55 19.5,88.4"/>
          <polygon class="r" style="animation-delay:156ms" points="32.4,66.5 35.25,70.18 38.17,73.81 41.15,77.38 44.2,80.91 47.29,84.38 50.45,87.79 53.67,91.15 56.94,94.45 60.27,97.7 63.65,100.88 67.08,104.0 70.57,107.06 74.11,110.05 77.7,112.98 81.34,115.85 85.03,118.64 88.77,121.39 92.56,124.07 96.39,126.68 100.28,129.21 104.21,131.68 108.18,134.08 112.19,136.4 116.25,138.65 120.34,140.83 124.48,142.94 128.65,144.97 132.85,146.93 137.09,148.81 141.36,150.62 145.67,152.35 150.0,154.0 143.4,151.77 136.86,149.35 130.38,146.75 123.97,143.97 117.62,141.02 111.35,137.9 105.16,134.61 99.06,131.15 93.05,127.53 87.13,123.74 81.3,119.8 75.59,115.7 69.98,111.45 64.48,107.05 59.11,102.5 53.85,97.81 52.11,96.21 50.39,94.6 48.68,92.97 46.99,91.32 45.31,89.66 43.64,87.98 41.98,86.29 40.35,84.58 38.72,82.86 37.11,81.12 35.51,79.37 33.93,77.61 32.36,75.83 30.81,74.04 29.27,72.23 27.75,70.41"/>
          <polygon class="r" style="animation-delay:208ms" points="48.68,46.99 53.24,55.2 58.06,63.23 63.15,71.1 68.49,78.78 74.08,86.28 79.91,93.58 85.98,100.68 92.27,107.56 98.78,114.22 105.51,120.65 112.45,126.85 119.58,132.8 126.91,138.5 134.43,143.94 142.13,149.11 150.0,154.0 143.92,150.54 137.92,146.93 132.02,143.15 126.22,139.22 120.51,135.14 114.91,130.91 109.41,126.53 104.03,122.02 98.75,117.36 93.6,112.57 88.56,107.64 83.65,102.59 78.86,97.41 74.2,92.1 69.68,86.68 65.29,81.14 63.85,79.26 62.43,77.37 61.02,75.46 59.63,73.55 58.25,71.62 56.89,69.68 55.54,67.74 54.21,65.77 52.89,63.8 51.59,61.82 50.31,59.82 49.04,57.82 47.78,55.8 46.55,53.77 45.33,51.73 44.12,49.68"/>
          <polygon class="r" style="animation-delay:260ms" points="68.25,30.59 69.76,35.03 71.34,39.45 72.99,43.85 74.71,48.21 76.5,52.55 78.36,56.86 80.29,61.14 82.29,65.38 84.36,69.59 86.5,73.76 88.71,77.89 90.98,81.98 93.33,86.04 95.74,90.04 98.22,94.01 100.76,97.93 103.38,101.83 106.06,105.68 108.81,109.48 111.62,113.23 114.49,116.93 117.43,120.57 120.43,124.17 123.48,127.71 126.6,131.2 129.78,134.63 133.01,138.0 136.3,141.32 139.64,144.58 143.04,147.78 146.49,150.92 150.0,154.0 147.73,152.16 145.49,150.29 143.26,148.4 141.05,146.49 138.86,144.55 136.69,142.58 134.54,140.59 132.41,138.58 130.3,136.54 128.22,134.48 126.15,132.4 124.11,130.3 122.09,128.17 120.09,126.02 118.11,123.85 116.16,121.66 114.23,119.44 112.33,117.19 110.44,114.93 108.58,112.64 106.75,110.34 104.93,108.01 103.14,105.66 101.37,103.29 99.63,100.91 97.91,98.5 96.22,96.08 94.56,93.64 92.92,91.18 91.3,88.7 89.71,86.21 88.15,83.71 86.31,80.66 84.51,77.59 82.74,74.49 81.02,71.38 79.33,68.24 77.68,65.08 76.06,61.9 74.49,58.7 72.95,55.48 71.46,52.24 70.0,48.98 68.58,45.7 67.2,42.4 65.86,39.09 64.57,35.76 63.31,32.41"/>
          <polygon class="r" style="animation-delay:312ms" points="89.84,18.06 91.51,27.35 93.48,36.56 95.74,45.71 98.28,54.78 101.11,63.76 104.22,72.64 107.6,81.42 111.26,90.08 115.19,98.61 119.38,107.0 123.84,115.25 128.57,123.35 133.54,131.28 138.78,139.04 144.27,146.62 150.0,154.0 148.48,152.22 146.97,150.42 145.48,148.61 144.0,146.79 142.54,144.95 141.09,143.11 139.65,141.25 138.23,139.38 136.82,137.49 135.43,135.6 134.06,133.69 132.69,131.77 131.35,129.84 130.02,127.9 128.7,125.94 127.4,123.98 124.85,120.0 122.35,115.98 119.93,111.93 117.57,107.83 115.27,103.69 113.04,99.51 110.88,95.3 108.79,91.05 106.76,86.77 104.8,82.46 102.91,78.11 101.09,73.73 99.34,69.31 97.66,64.87 96.04,60.41 94.5,55.91 93.76,53.65 93.03,51.38 92.32,49.11 91.63,46.83 90.95,44.54 90.29,42.25 89.65,39.96 89.03,37.66 88.42,35.35 87.83,33.04 87.26,30.72 86.71,28.4 86.17,26.07 85.66,23.74 85.16,21.41 84.67,19.07"/>
          <polygon class="r" style="animation-delay:364ms" points="112.15,9.7 112.75,19.08 113.59,28.45 114.66,37.8 115.98,47.11 117.53,56.39 119.32,65.61 121.35,74.79 123.61,83.91 126.1,92.96 128.83,101.95 131.78,110.85 134.97,119.68 138.39,128.41 142.03,137.04 145.9,145.58 150.0,154.0 146.67,147.77 143.47,141.48 140.39,135.12 137.44,128.69 134.62,122.21 131.92,115.67 129.34,109.07 126.9,102.43 124.59,95.73 122.4,88.99 120.35,82.2 118.43,75.38 116.65,68.51 114.99,61.61 113.47,54.68 112.09,47.72 111.65,45.38 111.23,43.05 110.82,40.71 110.43,38.37 110.06,36.02 109.7,33.68 109.36,31.33 109.03,28.97 108.71,26.62 108.42,24.26 108.13,21.9 107.86,19.54 107.6,17.18 107.36,14.81 107.13,12.44 106.91,10.08"/>
          <polygon class="r" style="animation-delay:416ms" points="132.02,5.47 132.0,7.81 131.99,10.15 131.99,12.49 131.99,14.83 132.01,17.18 132.04,19.52 132.07,21.86 132.12,24.2 132.17,26.54 132.23,28.88 132.31,31.23 132.39,33.57 132.48,35.91 132.58,38.25 132.7,40.59 132.82,42.93 132.88,44.1 132.95,45.27 133.02,46.44 133.09,47.61 133.17,48.78 133.24,49.95 133.32,51.12 133.41,52.28 133.49,53.45 133.58,54.62 133.66,55.79 133.76,56.96 133.85,58.13 133.94,59.3 134.04,60.46 134.14,61.63 134.24,62.8 134.35,63.97 134.46,65.13 134.57,66.3 134.68,67.47 134.8,68.63 134.92,69.8 135.04,70.97 135.16,72.13 135.28,73.3 135.41,74.46 135.54,75.63 135.67,76.79 135.8,77.96 135.94,79.12 136.08,80.29 136.37,82.61 136.66,84.94 136.97,87.27 137.28,89.59 137.61,91.91 137.94,94.23 138.29,96.55 138.64,98.87 139.01,101.19 139.38,103.5 139.76,105.82 140.16,108.13 140.56,110.44 140.97,112.75 141.38,115.06 141.81,117.37 142.25,119.67 142.7,121.98 143.16,124.28 143.63,126.57 144.11,128.87 144.6,131.17 145.09,133.46 145.6,135.75 146.12,138.04 146.64,140.33 147.18,142.61 147.72,144.89 148.28,147.17 148.84,149.45 149.42,151.73 150.0,154.0 149.35,151.75 148.71,149.49 148.08,147.23 147.45,144.97 146.84,142.7 146.23,140.43 145.64,138.16 145.05,135.89 144.48,133.61 143.91,131.33 143.35,129.05 142.81,126.77 142.27,124.48 141.74,122.19 141.22,119.9 140.71,117.61 140.21,115.31 139.72,113.01 139.24,110.71 138.77,108.4 138.31,106.1 137.86,103.79 137.41,101.48 136.98,99.17 136.55,96.86 136.14,94.54 135.73,92.22 135.34,89.9 134.95,87.58 134.57,85.26 134.21,82.93 133.85,80.61 133.68,79.44 133.5,78.28 133.33,77.11 133.16,75.95 133.0,74.78 132.84,73.62 132.68,72.45 132.52,71.28 132.37,70.11 132.21,68.95 132.06,67.78 131.92,66.61 131.77,65.44 131.62,64.27 131.48,63.1 131.34,61.93 131.2,60.76 131.07,59.59 130.94,58.42 130.81,57.25 130.69,56.08 130.56,54.91 130.44,53.74 130.32,52.56 130.2,51.39 130.09,50.22 129.97,49.04 129.86,47.87 129.76,46.7 129.65,45.52 129.55,44.35 129.45,43.17 129.26,40.82 129.07,38.47 128.9,36.12 128.74,33.77 128.58,31.42 128.44,29.06 128.3,26.71 128.18,24.35 128.06,22.0 127.96,19.64 127.86,17.28 127.77,14.92 127.69,12.56 127.62,10.21 127.57,7.85 127.52,5.49"/>
          <polygon class="r" style="animation-delay:468ms" points="150.0,154.0 152.35,4.0 147.85,4.0"/>
          <polygon class="r" style="animation-delay:520ms" points="182.92,7.86 150.0,154.0 178.52,6.89"/>
          <polygon class="r" style="animation-delay:572ms" points="211.81,17.85 150.0,154.0 207.7,15.96"/>
          <polygon class="r" style="animation-delay:624ms" points="239.59,35.56 150.0,154.0 235.99,32.78"/>
          <polygon class="r" style="animation-delay:676ms" points="262.72,58.68 150.0,154.0 260.3,55.73"/>
          <polygon class="r" style="animation-delay:728ms" points="280.65,87.7 150.0,154.0 278.95,84.27"/>
          <polygon class="r" style="animation-delay:780ms" points="292.83,120.48 150.0,154.0 291.95,116.74"/>
          <polygon class="r" style="animation-delay:832ms" points="150.0,154.0 296.0,155.93 296.0,152.07"/>
          <polygon class="r" style="animation-delay:884ms" points="292.04,190.92 150.0,154.0 292.74,187.92"/>
          <polygon class="r" style="animation-delay:936ms" points="279.11,223.4 150.0,154.0 280.48,220.66"/>
          <polygon class="r" style="animation-delay:988ms" points="260.57,251.93 150.0,154.0 262.5,249.57"/>
          <polygon class="r" style="animation-delay:1040ms" points="236.86,274.48 150.0,154.0 238.66,273.09"/>
          <polygon class="r" style="animation-delay:1092ms" points="209.39,291.0 150.0,154.0 211.44,290.05"/>
          <polygon class="r" style="animation-delay:1144ms" points="179.61,300.85 150.0,154.0 181.81,300.36"/>
          <polygon class="r" style="animation-delay:1196ms" points="148.85,304.0 150.0,153.99 151.1,304.0"/>
          <polygon class="r" style="animation-delay:1248ms" points="136.49,303.37 150.0,154.0 137.99,303.51"/>
          <polygon class="r" style="animation-delay:1300ms" points="126.38,302.04 150.0,154.0 127.86,302.28"/>
          <polygon class="r" style="animation-delay:1352ms" points="116.38,299.99 150.0,154.0 117.85,300.33"/>
          <polygon class="r" style="animation-delay:1404ms" points="106.55,297.22 150.0,154.0 107.98,297.67"/>
          <polygon class="r" style="animation-delay:1456ms" points="96.93,293.76 150.0,154.0 98.33,294.31"/>
          <polygon class="r" style="animation-delay:1508ms" points="87.56,289.62 150.0,154.0 88.92,290.27"/>
          <polygon class="r" style="animation-delay:1560ms" points="78.5,284.82 150.0,154.0 79.82,285.56"/>
          <polygon class="r" style="animation-delay:1612ms" points="69.79,279.38 150.0,154.0 71.05,280.22"/>
          <polygon class="r" style="animation-delay:1664ms" points="61.47,273.32 150.0,154.0 62.67,274.25"/>
          <polygon class="r" style="animation-delay:1716ms" points="53.58,266.69 150.0,154.0 54.71,267.7"/>
          <polygon class="r" style="animation-delay:1768ms" points="46.16,259.51 150.0,154.0 47.22,260.6"/>
          <polygon class="r" style="animation-delay:1820ms" points="39.25,251.81 150.0,154.0 40.23,252.98"/>
          <polygon class="r" style="animation-delay:1872ms" points="32.87,243.64 150.0,154.0 33.78,244.87"/>
          <polygon class="r" style="animation-delay:1924ms" points="27.07,235.03 150.0,154.0 27.89,236.33"/>
          <polygon class="r" style="animation-delay:1976ms" points="21.87,226.03 150.0,154.0 22.59,227.38"/>
          <polygon class="r" style="animation-delay:2028ms" points="17.29,216.67 150.0,154.0 17.92,218.07"/>
          <polygon class="r" style="animation-delay:2080ms" points="13.35,207.01 150.0,154.0 13.89,208.45"/>
          <polygon class="r" style="animation-delay:2132ms" points="10.08,197.09 150.0,154.0 10.52,198.57"/>
          <polygon class="r" style="animation-delay:2184ms" points="7.5,186.97 150.0,154.0 7.84,188.47"/>
          <polygon class="r" style="animation-delay:2236ms" points="5.61,176.68 150.0,154.0 5.84,178.2"/>
          <polygon class="r" style="animation-delay:2288ms" points="4.42,166.28 4.55,167.81 150.0,154.0"/>
        </svg>
        </div>
        <div class="cmrg-copy">
        <h2>Systems and Methods</h2>
        <p>The research centers on coupled electro-chemo-mechanical behavior in electrochemical cells such as lithium-ion batteries, solid-state batteries, and protonic ceramic electrolyzers.</p>
        <p>Finite element modeling, continuum mechanics, and microstructure-resolved simulations are used to study transport-induced stress, phase transformations, and fracture.</p>
        <p>The overall aim is to connect fundamental mechanics with device performance and inform next-generation materials and design strategies.</p>
        </div>
        </div>
        <div class="cmrg-links">
        <a class="cmrg-card" href="/research/">
        <svg class="cmrg-card-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style="background:transparent"><path d="M10 27 L18 9 L26 27" stroke="#1f355e" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M13 22 L23 22" stroke="#1f355e" stroke-width="1.5"/></svg>
        <div class="cmrg-card-title">Research</div>
        <div class="cmrg-card-text">Electro-chemo-mechanical modeling, fracture, microstructure, and transport.</div>
        </a>
        <a class="cmrg-card" href="/publication/">
        <svg class="cmrg-card-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style="background:transparent"><rect x="8" y="5" width="20" height="26" rx="2" stroke="#1f355e" stroke-width="1.5" fill="none"/><line x1="12" y1="12" x2="24" y2="12" stroke="#1f355e" stroke-width="1.5"/><line x1="12" y1="17" x2="24" y2="17" stroke="#1f355e" stroke-width="1.5"/><line x1="12" y1="22" x2="20" y2="22" stroke="#1f355e" stroke-width="1.5"/></svg>
        <div class="cmrg-card-title">Publications</div>
        <div class="cmrg-card-text">Journal articles, conference papers, and preprints.</div>
        </a>
        <a class="cmrg-card" href="/people/">
        <svg class="cmrg-card-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style="background:transparent"><circle cx="14" cy="13" r="4.5" stroke="#1f355e" stroke-width="1.5" fill="none"/><circle cx="24" cy="13" r="4.5" stroke="#1f355e" stroke-width="1.5" fill="none"/><path d="M5 28c0-4.5 4-8 9-8s9 3.5 9 8" stroke="#1f355e" stroke-width="1.5" fill="none"/><path d="M24 20.5c3 0.5 6 2.5 6 7.5" stroke="#1f355e" stroke-width="1.5" fill="none"/></svg>
        <div class="cmrg-card-title">People</div>
        <div class="cmrg-card-text">Meet the researchers behind the work.</div>
        </a>
        </div>
        </div>
---