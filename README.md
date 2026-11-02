# Rajeev R. — Developer Portfolio

Responsive, data-driven personal portfolio built with semantic HTML, CSS, and browser-native JavaScript. No package install or API key is needed. It can be hosted as a static site on Vercel.

## Run locally

```powershell
cd outputs
python -m http.server 4173
```

Open http://localhost:4173. Serve over HTTP; project detail routes use query strings and browser history.

## Structure

```text
outputs/
├── index.html
├── css/site.css
├── js/app.js
├── js/projects.js       # project data and detail content
├── assets/profile.jpeg  # supplied photo
├── RajeevR.pdf          # supplied resume
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Project inventory from supplied `projects.txt`

| Project | Purpose / source-verified implementation | Stack documented or verified | Repository | Screenshots / live status |
|---|---|---|---|---|
| CrimeLens (CrimeStack refers to the same project) | Crime data exploration; ST-GAT inference path; KMeans hotspots; XGBoost risk classification; Prophet monthly forecasting; Leaflet and deck.gl views; YOLO surveillance code; optional Gemini assistant; incident reporting. Export contains CrimeStack 0.2.0-rc.2 and CrimeLens v5 source trees. Model weights and external credentials are not included. | Python, FastAPI, React, PyTorch, scikit-learn, Prophet, XGBoost, YOLO, Leaflet, deck.gl; CrimeStack includes React/TypeScript, FastAPI, MapLibre | [CrimeLens](https://github.com/Rajeev-08/CrimeLens-v5.0) | No screenshot or deployment URL supplied. CrimeStack README describes a release candidate, not verified production deployment. |
| SyncStudio | Collaborative browser IDE. Supplied v3.2 source includes React/Vite, Monaco, Yjs collaboration over authenticated Socket.IO/WebSockets, project/file services, session authorization, local runner/terminal, and preview workflows. MongoDB and SQLite drivers appear in configuration. | React, TypeScript, Node.js, Socket.IO, Yjs, Monaco, MongoDB/SQLite | [SyncStudio](https://github.com/Rajeev-08/SyncStudio) | No screenshot or deployment URL supplied. |
| Nutri-Craft | Nutrition-aware content-based recipe matching and meal suggestions. Export includes analysis, data-processing, feature-engineering modules and recommendation notebook. README describes nutrition details, preferences, recipes, and meal planning. | Python, FastAPI, Streamlit, scikit-learn, Pandas, NumPy, Plotly, Docker (README stack) | [Nutri-Craft](https://github.com/Rajeev-08/Nutri-Craft) | No screenshot or deployment URL supplied. README clone command refers to Mini-Project; confirm canonical live repository structure before treating every documented stack item as deployed. |
| Advanced RAG System | Grounded document Q&A with query rewriting, dense + BM25 retrieval, reciprocal-rank fusion, cross-encoder reranking, context grading, corrective retrieval, citations, abstention, and evaluation tooling. | Python, Streamlit, Chroma, BM25, sentence-transformers, Groq | [advanced-rag-system](https://github.com/Rajeev-08/advanced-rag-system) | No screenshot or deployment URL supplied. |

Project descriptions draw on README and source files in the packed export, which may be stale relative to public repositories. Portfolio project art is an explanatory illustration, not a screenshot. No demo links are shown because no live deployments were verified.

## Add a project

Append an object to `js/projects.js` using the existing schema (`id`, `name`, `title`, `description`, `repo`, `stack`, `features`, `problem`, `solution`, `architecture`, `evidence`, `demo`, `visual`). Illustration styles are `crime`, `sync`, `nutri`, and `rag`; add a style to `art()` in `js/app.js` if needed. Only add genuine screenshots and label them accurately.

## Replace resume or photo

Replace `RajeevR.pdf` or `assets/profile.jpeg`, retaining the names, or update their references in `index.html`. The included portrait is the supplied photograph.

## Contact form

The form validates input and opens a `mailto:` draft addressed to Rajeev. It does not transmit a message or claim it was sent. A server-side email provider can be added later.

## Vercel deployment

1. Create a GitHub repository and commit the contents of this directory.
2. Import it in Vercel; choose **Other** as the framework preset, repository root as project root, and no build command (static output).
3. Deploy. No environment variables are required. Replace the placeholder domain in `sitemap.xml` and `robots.txt` before production launch.
4. Verify the generated URL, links, resume download, and mailto behavior. No production URL has been deployed or verified yet.

## SEO and accessibility

Includes title/description/Open Graph metadata, favicon, sitemap, robots file, semantic sections, skip link, image alt text, keyboard-accessible controls, form status, responsive layouts, and reduced-motion support.
