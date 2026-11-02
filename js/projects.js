window.PROJECTS = [
  {
    id: "crimelens",
    name: "CrimeLens",
    title: "AI-Powered Crime Analytics & Prediction Platform",
    eyebrow: "Flagship · AI / Geospatial",
    description:
      "A crime intelligence workspace for exploring incident data, forecasting patterns, and examining risk across place and time.",
    repo: "https://github.com/Rajeev-08/CrimeLens-v5.0",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "PyTorch",
      "Scikit-learn",
      "Prophet",
      "YOLO",
      "Leaflet",
    ],
    features: [
      "Spatio-temporal forecasting with an ST-GAT inference path (model artifacts required)",
      "KMeans hotspot clustering and XGBoost risk classification",
      "Monthly Prophet crime trend forecasts",
      "Interactive Leaflet maps and deck.gl 3D density views",
      "YOLO weapon detection and a separate violence analysis pipeline",
      "Gemini-powered safety assistant when configured; map-based incident reporting",
    ],
    problem:
      "Crime records are difficult to interpret when spatial, temporal, and incident context are spread across separate views.",
    solution:
      "CrimeLens brings imported crime records into a single analytics interface with map exploration, forecasting, surveillance tools, and safety-oriented workflows.",
    architecture:
      "React client presents filters, maps, charts, and surveillance workflows. FastAPI preprocesses uploaded CSV data and routes requests to Python analytics and vision services. ST-GAT inference depends on trained model artifacts; external AI and news features depend on configured credentials.",
    evidence:
      "Verified in the supplied source export: ST-GAT model/inference modules, KMeans and XGBoost analytics, Prophet forecast function, Leaflet and deck.gl dependencies, YOLO surveillance code, Gemini client setup, and incident-report endpoints. Claims are scoped to code paths; model weights and external keys are not included in the export.",
    demo: null,
    visual: "crime",
  },
  {
    id: "syncstudio",
    name: "SyncStudio",
    title: "Real-Time Collaborative Browser IDE",
    eyebrow: "Full-stack · Collaboration",
    description:
      "A browser-based coding workspace with shared editing, project files, live previews, and a local development runtime.",
    repo: "https://github.com/Rajeev-08/SyncStudio",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "Monaco",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Monaco-powered editor with collaborative Yjs synchronization over authenticated WebSockets",
      "Project and file management with role-aware access",
      "Session authentication and protected API/socket connections",
      "Preview workflows, activity history, and version recovery paths",
      "Optional local terminal and isolated toolchain runner in the supplied v3.2 source",
    ],
    problem:
      "Collaborating on small web projects often means switching between a local editor, file sharing, and separate preview tools.",
    solution:
      "SyncStudio combines editing, project organization, browser preview, and collaboration in a single browser workspace.",
    architecture:
      "React/Vite frontend connects to a Node API with authenticated Socket.IO channels. Shared document updates use Yjs; project state can persist through the configured data driver. The supplied repository also contains a local runtime/runner workflow.",
    evidence:
      "Based on supplied SyncStudio source tree and architecture docs. The packed export contains a v3.2 TypeScript application; repository-specific manifest lists Node 24+, Vite, Socket.IO and collaboration implementation. MongoDB support is present as a configured/test data driver, but local mode also supports SQLite.",
    demo: null,
    visual: "sync",
  },
  {
    id: "nutri-craft",
    name: "Nutri-Craft",
    title: "Personalized Food & Diet Recommendation System",
    eyebrow: "Machine learning · Nutrition",
    description:
      "A nutrition-aware recipe recommendation experience that matches meal suggestions to dietary preferences and nutritional goals.",
    repo: "https://github.com/Rajeev-08/Nutri-Craft",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Plotly",
      "Docker",
    ],
    features: [
      "Content-based recipe matching based on nutritional information and ingredients",
      "Personalized recommendations informed by dietary needs and preferences",
      "Recipe cards with nutrition details, ingredients, and instructions",
      "Meal suggestions and diet-planning workflow described in the supplied project README",
    ],
    problem:
      "General recipe lists do not account for each person's nutritional requirements and food preferences.",
    solution:
      "Nutri-Craft uses recipe and nutrition information to recommend meals aligned with a user's dietary goals.",
    architecture:
      "The supplied repository includes a Streamlit interface and Python analysis/data-processing code, with FastAPI and Docker listed in its project documentation. The README describes content-based matching; model and deployment configuration should be confirmed in the live repository before relying on an active hosted service.",
    evidence:
      "Source export includes backend analysis/data-processing/feature-engineering modules and a recommendation-system notebook. The README documents content-based recommendation and nutrition-aware meal suggestions. No live deployment or screenshots were included in the supplied export.",
    demo: null,
    visual: "nutri",
  },
  {
    id: "advanced-rag",
    name: "Advanced RAG System",
    title: "Grounded Question Answering with Hybrid Retrieval",
    eyebrow: "AI engineering · Retrieval",
    description:
      "A retrieval-augmented question answering system with hybrid search, reranking, evidence grading, citations, and abstention.",
    repo: "https://github.com/Rajeev-08/advanced-rag-system",
    stack: [
      "Python",
      "Streamlit",
      "Chroma",
      "BM25",
      "Sentence Transformers",
      "Groq",
    ],
    features: [
      "Conversation-aware query rewriting and sub-query decomposition",
      "Dense vector retrieval combined with BM25 and reciprocal-rank fusion",
      "Cross-encoder reranking and context sufficiency grading",
      "Corrective retrieval, cited answers, and abstention when evidence is weak",
      "Inspectable retrieval traces and an automated evaluation harness",
    ],
    problem:
      "Naive vector search can miss exact terms and pass irrelevant context to language models, increasing unsupported answers.",
    solution:
      "The pipeline combines lexical and semantic retrieval, reranks candidates, grades evidence, and abstains when documents do not support a reliable answer.",
    architecture:
      "A Python pipeline transforms queries, runs Chroma vector and BM25 retrieval in parallel, fuses and reranks results, grades context, and generates grounded answers through a configurable Groq client. Streamlit provides a lightweight interface.",
    evidence:
      "README and source modules in the supplied export verify dense retrieval, BM25, RRF, reranking, context grading, corrective retrieval, citation generation, abstention, and Streamlit UI.",
    demo: null,
    visual: "rag",
  },
];
