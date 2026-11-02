import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Human Capital Business Partner (Apprenticeship), PT Bank Syariah Indonesia (Persero) Tbk.",
        location: "Jakarta, Indonesia",
        startYear: "Mar, 2026",
        endYear: "Sep, 2026",
        bulletPoints: [
            "Coordinated workforce planning activities between Head Office and regional offices.",
            "Managed headcount requests, employee transfers, and workforce administration.",
            "Maintained employee data accuracy within the HR system.",
            "Developed headcount monitoring dashboards for workforce tracking and reporting.",
            "Provided workforce analytics to support Human Capital decision-making."
        ]
    },
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Full Stack Developer, PT Digital Lintas Dunia",
        location: "Tanggerang, Indonesia",
        startYear: "Feb, 2025",
        endYear: "Des, 2025",
        bulletPoints: [
            "Designed and developed the website architecture using the Beego MVC pattern.",
            "Implemented RESTful APIs to support frontend-backend communication.",
            "Integrated user authentication and authorization modules.",
            "Utilized Beego ORM for efficient database management and queries."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Full Stack Developer Freelance, PT Nusantara Siber Integrasi",
        location: "Remote",
        startYear: "Aug, 2024",
        endYear: "Sep, 2024",
        bulletPoints: [
            "Built a complete website including landing pages and a CMS dashboard using Next.js with PostgreSQL integration.",
            "Developed backend services and RESTful APIs using Express.js, implementing JWT-based authentication and authorization.",
            "Optimized UI performance with Tailwind CSS and improved system reliability through debugging and continuous refinement."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Full Stack Developer, PT Astra Daihatsu Motor",
        location: "Jakarta, Indonesia",
        startYear: "Feb, 2024",
        endYear: "Jun, 2024",
        bulletPoints: [
            "Developed an internal web-based monitoring system using Laravel, covering full-stack components from database to UI.",
            "Designed role-based interfaces for Managers, Supervisors, Foremen, Team Leaders, and Team Members with proper access control.",
            "Deployed the system to an internal server and collaborated with the IT team to ensure stable production performance."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Frontend Developer, Nine Fox Lab",
        location: "Remote",
        startYear: "Nov, 2023",
        endYear: "Feb, 2024",
        bulletPoints: [
            "Developed and maintained responsive company profile websites using Laravel Blade, routing, and controller integration",
            "Collaborated with backend engineers and UI/UX designers to translate business requirements into modern, user-friendly interfaces.",
            "Optimized frontend performance through modular Blade components, debugging, and cross-browser compatibility improvements."
        ]
    },
]

const educationData = [
    {
        date: "Aug 2021 - Jun 2025",
        title: "Bachelor of Computer Science",
        subtitle: "Universitas Pembangunan Nasional Veteran Jakarta — Jakarta, Indonesia"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};