// Single source of truth for project content. Case-study fields use `null`
// where real details have not been provided yet; the UI shows "To be added".

export const defaultProjects = [
  {
    id: 1,
    slug: "shoppilot",
    number: "01",
    kind: "AI-INTEGRATED",
    title: "ShopPilot",
    subtitle: "AI-integrated e-commerce platform",
    description:
      "A full-stack commerce experience with product discovery, voice-assisted search, cart and order flows, admin controls, and MongoDB-backed data management.",
    features: [
      "Voice-assisted product discovery",
      "Customer + admin workflows",
      "REST APIs and MongoDB",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demoUrl: "https://shop-pilot-frontend.vercel.app/",
    codeUrl: "https://github.com/vishakha143/shopPilot-frontend",
    image: "/projects/ShopPilot.png",
    caseStudy: {
      problem:
        "Shoppers need to find products quickly, and store owners need a way to manage catalogue and orders without a separate tool.",
      solution:
        "A MERN commerce app with product discovery, voice-assisted search, cart and order flows for customers, and an admin workflow for managing the store.",
      highlights: [
        "Product discovery and voice-assisted search",
        "Customer workflow: browse, cart, order",
        "Admin workflow for store management",
        "REST API backed by MongoDB, with indexing and API optimization work",
      ],
      architecture: ["React", "REST API", "Express / Node", "MongoDB"],
      aiFlow: ["User", "Search / Voice input", "AI processing", "Product query", "API", "MongoDB"],
      decisions: null,
      security: null,
      performance: null,
      challenges: null,
      lessons: null,
      future: null,
    },
  },
  {
    id: 2,
    slug: "visera",
    number: "02",
    kind: "AI-POWERED",
    title: "Visera",
    subtitle: "AI-powered resume platform",
    description:
      "A focused resume product that helps users create and improve their resumes through a modern React interface and an API-backed AI workflow.",
    features: [
      "AI-assisted resume creation",
      "Authentication and protected flows",
      "React + Node + MongoDB architecture",
    ],
    tags: ["React", "Vite", "Tailwind", "Node.js", "MongoDB", "Gemini AI"],
    demoUrl: "https://visera-git-main-vishakha143s-projects.vercel.app/",
    codeUrl: "https://github.com/vishakha143/Visera",
    image: "/projects/VisEra.png",
    caseStudy: {
      problem:
        "Writing and improving a resume is slow and unstructured, and generic templates give little guidance on the content itself.",
      solution:
        "A resume product with a React/Vite/Tailwind interface and an API-backed Gemini AI workflow that helps users create and improve resumes, behind authentication.",
      highlights: [
        "AI-assisted resume creation and improvement",
        "Authentication with JWT and protected flows",
        "React + Vite + Tailwind frontend",
        "Node/Express API with MongoDB",
      ],
      architecture: ["React", "REST API", "Express / Node", "MongoDB"],
      aiFlow: ["User", "Resume content", "API", "Gemini AI", "Improved resume"],
      decisions: null,
      security: null,
      performance: null,
      challenges: null,
      lessons: null,
      future: null,
    },
  },
  {
    id: 3,
    slug: "ecowash",
    number: "03",
    kind: "SAAS",
    title: "EcoWash",
    subtitle: "SaaS laundry booking platform",
    description:
      "A service marketplace connecting users with laundry shops, featuring local discovery, real-time booking, price comparison, and seamless payment integration for convenient laundry solutions.",
    features: [
      "Local shop discovery and filtering",
      "Real-time booking system",
      "Price comparison and transparency",
    ],
    tags: ["React", "Node.js", "MongoDB", "Maps API", "Payment Gateway"],
    // No verified live demo or repository URL yet; links are hidden until added.
    demoUrl: null,
    codeUrl: null,
    image: "/projects/EcoWash.png",
    caseStudy: {
      problem:
        "Finding a nearby laundry service, comparing prices and booking a slot usually means calling around.",
      solution:
        "A marketplace that connects users with local laundry shops, with discovery, booking and price comparison in one place.",
      highlights: [
        "Local shop discovery and filtering",
        "Booking flow",
        "Price comparison",
        "React + Node + MongoDB",
      ],
      architecture: ["React", "REST API", "Express / Node", "MongoDB"],
      aiFlow: null,
      decisions: null,
      security: null,
      performance: null,
      challenges: null,
      lessons: null,
      future: null,
    },
  },
];
