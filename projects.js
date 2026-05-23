const PROJECTS = [
  {
    id: "creativity",
    year: "2024",
    title: "Creativity - ERROR 404",
    image: "Creativity Error 404/creativity error Card.png",
    description: "A qualitative study of undergraduate students shows how generative AI reshapes creativity, authorship, ownership, and learning, revealing both its value for ideation and its risks for dependency and loss of creative agency.",
    resources: [
      { label: "Project PDF", href: "Creativity Error 404/Creativity Error.pdf", type: "pdf" },
      { label: "Report", href: "Creativity Error 404/Creativity_error.pdf", type: "pdf" },
      { label: "Video", href: "Creativity Error 404/Creativity_ERROR_404.mp4", type: "video" }
    ]
  },
  {
    id: "alignment-tax",
    year: "2025",
    title: "The Alignment Tax",
    image: "TheAlignmentTax/sychophanct study card.png",
    description: "An empirical study of LLM sycophancy investigates how emotional fine-tuning may entangle warmth, agreement, and factual reliability, raising questions about whether more agreeable models become less truthful under social pressure.",
    resources: [
      { label: "Project PDF", href: "TheAlignmentTax/SychophancyStudy.pdf", type: "pdf" },
      { label: "Report", href: "TheAlignmentTax/Sycophancy_Study_Final_Report.pdf", type: "pdf" },
      { label: "Video", href: "TheAlignmentTax/The_Sycophancy_Study.mp4", type: "video" }
    ]
  },
  {
    id: "digital-trust",
    year: "2025",
    title: "Designing Digital Trust",
    image: "Designing_digital_trust/designing digital trust card.png",
    description: "A design research project examining how digital systems can make trust, consent, and accountability more legible to users through clearer interfaces, safer interaction patterns, and more transparent decision flows.",
    resources: [
      { label: "Project PDF", href: "Designing_digital_trust/Designing_Digital_Trust.pdf", type: "pdf" },
      { label: "Report", href: "Designing_digital_trust/Full Report.pdf", type: "pdf" },
      { label: "Video", href: "Designing_digital_trust/Deisgning digital trust video.mp4", type: "video" }
    ]
  },
  {
    id: "bhed-bhav",
    year: "2025",
    title: "BHED BHAV",
    image: "BhedBhav/Bhed Bhav card.png",
    description: "A bilingual bias evaluation project audits regional and occupational representation in language models, showing how LLMs can encode urban, high-status, and English-dominant assumptions in Indian social contexts.",
    resources: [
      { label: "Project PDF", href: "BhedBhav/BhedBhav.pdf", type: "pdf" },
      { label: "Report", href: "BhedBhav/FinalReport.pdf", type: "pdf" }
    ]
  },
  {
    id: "disclosure",
    year: "2025",
    title: "Disclosure Without Engagement",
    image: "Positionality statements/disclousre without engegement card.png",
    description: "An empirical review of FAccT positionality statements examines whether researchers move beyond identity disclosure to meaningfully connect positionality with research framing, methods, and interpretation.",
    resources: [
      { label: "Project PDF", href: "Positionality statements/Disclosure without Engagement.pdf", type: "pdf" },
      { label: "DOI", href: "https://doi.org/10.1145/3715275.3732079", type: "external" }
    ]
  },
  {
    id: "samvedha",
    year: "2024",
    title: "Samvedha",
    image: "Samvedha/Samvedha card.png",
    description: "A service design project proposes an open-network grocery and delivery ecosystem that supports local kirana stores and gig workers through a more cooperative, zero-commission, community-centered model.",
    resources: [
      { label: "Project PDF", href: "Samvedha/Samvedha.pdf", type: "pdf" },
      { label: "Report", href: "Samvedha/full report.pdf", type: "pdf" },
      { label: "Video", href: "Samvedha/Samvedha_Video.mp4", type: "video" }
    ]
  },
  {
    id: "samvad",
    year: "2025",
    title: "SAMVAD",
    image: "Samvad/samvad card.png",
    description: "A dialogue-analysis system grounded in Indian epistemology explores how AI can surface knowledge sources, hidden agreements, and value conflicts to support more constructive deliberation across polarized viewpoints.",
    resources: [
      { label: "Project PDF", href: "Samvad/SAMVAD.pdf", type: "pdf" },
      { label: "Demo", href: "https://samvad-app.onrender.com/", type: "external" },
      { label: "Video", href: "Samvad/clean_SAMVAD__Dialogue_System.mp4", type: "video" }
    ]
  },
  {
    id: "voiceweave",
    year: "2025",
    title: "VoiceWeave",
    image: "other projects/Voiceweave Card.png",
    description: "An NLP system detects contribution suppression in group dialogue using structural conversational signals, helping facilitators identify when participation is being reduced or overshadowed.",
    resources: [
      { label: "Project PDF", href: "other projects/Voiceweave.pdf", type: "pdf" },
      { label: "Demo", href: "https://voiceweave-le5t57ivldbvmfcsm5bsez.streamlit.app/", type: "external" }
    ]
  },
  {
    id: "finequity",
    year: "2025",
    title: "FinEquity",
    image: "FinEquity/FinEquity card.png",
    description: "A participatory auditing platform helps SHG borrowers document microfinance loan outcomes, compare patterns across their community, and generate evidence for appeals against opaque or potentially biased decisions.",
    resources: [
      { label: "Project PDF", href: "FinEquity/FinEquity.pdf", type: "pdf" },
      { label: "Report", href: "FinEquity/Full Report.pdf", type: "pdf" },
      { label: "Demo", href: "https://aksh-hu.github.io/finequity-audit/", type: "external" },
      { label: "Video", href: "FinEquity/Finequity_Video.mp4", type: "video" }
    ]
  },
  {
    id: "sahaj",
    year: "2023",
    title: "Sahaj",
    image: "Sahaj/sahaj card.png",
    description: "A systems design project reimagines e-commerce as a culture-first platform for micro-businesses, artisans, and regional producers, focusing on discovery, education, and more democratic digital participation.",
    resources: [
      { label: "Project PDF", href: "Sahaj/democratizing e commerce.pdf", type: "pdf" },
      { label: "Report", href: "Sahaj/Sahaj_Report.pdf", type: "pdf" },
      { label: "Video", href: "Sahaj/Sahaj Video.mp4", type: "video" }
    ]
  },
  {
    id: "reddit-audit",
    year: "2022",
    title: "Reddit UX Audit",
    image: "other projects/Reddit UX Audit Card.png",
    description: "A usability and heuristic evaluation of Reddit identifies friction in onboarding, community discovery, moderation visibility, and information architecture across large-scale participatory platforms.",
    resources: [
      { label: "Project PDF", href: "other projects/Reddit UX Audit.pdf", type: "pdf" }
    ]
  },
  {
    id: "district",
    year: "2024",
    title: "District Heuristic Evaluation",
    image: "other projects/Heuristic evaluation card.png",
    description: "A heuristic usability evaluation of District by Zomato analyzes event discovery and booking flows, identifying breakdowns in navigation consistency, error recovery, and transactional confidence.",
    resources: [
      { label: "Project PDF", href: "other projects/Heuristic evaluation(district).pdf", type: "pdf" }
    ]
  }
];
