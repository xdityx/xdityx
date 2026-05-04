export const projects = [
  {
    id: 1,
    title: "Profit Uplift Modeling System",
    description:
      "Causal ML system implementing T-Learner & X-Learner meta-learners for marketing targeting optimization. Quantifies the incremental revenue impact of campaigns on individual customers, enabling budget allocation to those most likely to respond positively to treatment.",
    metrics: ["Qini Coefficient", "AUUC Evaluation"],
    stack: ["Python", "Scikit-learn", "MLflow", "Docker", "pytest"],
    links: {
      github: "https://github.com/xdityx/profit-uplift-modeling-system",
      caseStudy:
        "https://github.com/xdityx/profit-uplift-modeling-system/blob/master/CASE_STUDY.md",
      demo: "https://profit-uplift-modeling-system-hrhwqrccm472emfe6lgnp8.streamlit.app/",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Churn MLOps System",
    description:
      "End-to-end ML lifecycle management system for customer churn prediction. Integrates PSI and KS-based data drift detection, a FastAPI prediction endpoint, and automated alerting — demonstrating a production-ready approach to model deployment and monitoring.",
    stack: ["Python", "FastAPI", "Docker", "MLflow"],
    links: {
      github: "https://github.com/xdityx/Churn-Mlops-System",
      caseStudy:
        "https://github.com/xdityx/Churn-Mlops-System/blob/master/CASE_STUDY.md",
    },
  },
  {
    id: 3,
    title: "UK Gas Demand Forecasting",
    description:
      "Demand forecasting pipeline using National Transmission System (NTS) data alongside weather covariates — specifically Heating Degree Days (HDD) — combined with ensemble models to capture seasonal and temperature-driven consumption patterns in UK gas demand.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    links: {
      github: "https://github.com/xdityx/xoserve-uk-gas-demand-forecasting",
      caseStudy:
        "https://github.com/xdityx/xoserve-uk-gas-demand-forecasting/blob/master/CASE_STUDY.md",
    },
  },
  {
    id: 4,
    title: "A/B Testing Framework",
    description:
      "Production-grade statistical testing framework with Bayesian, frequentist, and causal inference capabilities across the full experimental lifecycle.",
    stack: ["Python", "SciPy", "Pandas"],
    links: {
      github: "https://github.com/xdityx/A-B-Testing-Framework",
      caseStudy:
        "https://github.com/xdityx/A-B-Testing-Framework/blob/master/CASE_STUDY.md",
      demo: "https://a-b-testing-framework-mkbmuqqzyng7ivqk25qrae.streamlit.app/",
    },
  },
];

export const skills = [
  {
    category: "Core Expertise",
    icon: "🧠",
    tags: ["Causal Inference", "Uplift Modeling", "Statistical Testing"],
  },
  {
    category: "Production ML",
    icon: "⚙️",
    tags: ["MLflow", "FastAPI", "Docker", "Drift Detection"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    tags: ["Python", "SQL", "Pandas", "Scikit-learn"],
  },
  {
    category: "Cloud Platforms",
    icon: "☁️",
    tags: ["Azure ML", "Azure DevOps", "AWS SageMaker"],
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft — Exam DP-100",
    id: "483D870B36B593EB",
    icon: "🔷",
  },
  {
    title: "SQL (Advanced) — 5-Star Rating",
    issuer: "HackerRank",
    id: "★★★★★ Gold Badge",
    icon: "⭐",
  },
];

export const stats = [
  { number: "DP-100", label: "Azure Data Scientist Associate" },
  { number: "4", label: "Portfolio Projects Built" },
  { number: "3+", label: "DS Domains (Causal ML · MLOps · Forecasting)" },
  { number: "★★★★★", label: "HackerRank SQL" },
];
