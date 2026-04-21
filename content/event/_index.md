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
          .home-section {
            padding-top: 2.2rem !important;
            padding-bottom: 2.2rem !important;
          }

          .home-section:first-of-type {
            padding-top: 1.8rem !important;
          }

          .article-container,
          .container {
            max-width: 1150px !important;
          }

          .cmrg-home {
            width: 100%;
          }

          .cmrg-hero {
            margin-bottom: 2rem;
          }

          .cmrg-hero h1 {
            font-size: clamp(2.1rem, 4.2vw, 3.6rem);
            line-height: 1.08;
            font-weight: 500;
            letter-spacing: -0.02em;
            margin: 0 0 1rem 0;
            color: #222;
            max-width: 12ch;
          }

          .cmrg-hero p {
            font-size: clamp(1.02rem, 1.35vw, 1.3rem);
            line-height: 1.7;
            color: #333;
            margin: 0;
            max-width: 980px;
          }

          .cmrg-main {
            display: grid;
            grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
            gap: 2rem;
            align-items: center;
            margin-bottom: 2.2rem;
          }

          .cmrg-logo {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cmrg-logo img {
            width: 100%;
            max-width: 250px;
            height: auto;
            display: block;
          }

          .cmrg-copy h2 {
            font-size: clamp(1.35rem, 1.8vw, 1.8rem);
            line-height: 1.2;
            font-weight: 700;
            margin: 0 0 0.9rem 0;
            color: #222;
          }

          .cmrg-copy p {
            font-size: 1.02rem;
            line-height: 1.75;
            color: #333;
            margin: 0 0 0.9rem 0;
            max-width: 760px;
          }

          .cmrg-copy p:last-child {
            margin-bottom: 0;
          }

          .cmrg-links {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }

          .cmrg-card {
            display: block;
            text-decoration: none !important;
            color: inherit !important;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 14px;
            padding: 1.1rem 1rem;
            background: #fff;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            height: 100%;
          }

          .cmrg-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(0,0,0,0.07);
          }

          .cmrg-card-icon {
            font-size: 1.7rem;
            line-height: 1;
            margin-bottom: 0.7rem;
          }

          .cmrg-card-title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 0.35rem;
            color: #1f355e;
          }

          .cmrg-card-text {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #444;
          }

          @media (max-width: 900px) {
            .cmrg-main {
              grid-template-columns: 1fr;
              gap: 1.3rem;
              align-items: start;
            }

            .cmrg-logo {
              justify-content: flex-start;
            }

            .cmrg-logo img {
              max-width: 210px;
            }

            .cmrg-links {
              grid-template-columns: 1fr;
            }

            .cmrg-hero h1 {
              max-width: none;
            }
          }
        </style>

        <div class="cmrg-home">
          <div class="cmrg-hero">
            <h1>Chemo-Mechanical Research Group</h1>
            <p>
              Our research lies at the boundary between mechanics, materials, and electrochemistry, where different physical processes interact and shape how materials behave. By bringing together solid mechanics with transport, phase change, and microstructural evolution, our work addresses a broad range of multiphysics problems in energy and advanced materials.
            </p>
          </div>

          <div class="cmrg-main">
            <div class="cmrg-logo">
              <img src="/logo_full.png" alt="Chemo-Mechanical Research Group logo">
            </div>

            <div class="cmrg-copy">
              <h2>Systems and methods</h2>
              <p>
                The research centers on coupled electro-chemo-mechanical behavior in electrochemical cells such as lithium-ion batteries, solid-state batteries, and protonic ceramic electrolyzers.
              </p>
              <p>
                Finite element modeling, continuum mechanics, and microstructure-resolved simulations are used to study transport-induced stress, phase transformations, and fracture.
              </p>
              <p>
                The overall aim is to connect fundamental mechanics with device performance and inform next-generation materials and design strategies.
              </p>
            </div>
          </div>

          <div class="cmrg-links">
            <a class="cmrg-card" href="/research/">
              <div class="cmrg-card-icon">⟐</div>
              <div class="cmrg-card-title">Research</div>
              <div class="cmrg-card-text">
                Electro-chemo-mechanical modeling, fracture, microstructure, and transport.
              </div>
            </a>

            <a class="cmrg-card" href="/publications/">
              <div class="cmrg-card-icon">📘</div>
              <div class="cmrg-card-title">Publications</div>
              <div class="cmrg-card-text">
                Journal articles, conference papers, and preprints.
              </div>
            </a>

            <a class="cmrg-card" href="/people/">
              <div class="cmrg-card-icon">👥</div>
              <div class="cmrg-card-title">People</div>
              <div class="cmrg-card-text">
                Meet the researchers behind the work.
              </div>
            </a>
          </div>
        </div>
---