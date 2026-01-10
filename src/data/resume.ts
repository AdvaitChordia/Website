export const resumeData = {
  personal: {
    name: "Advait Chordia",
    title: "Mechanical Engineer",
    location: "Champaign, IL",
    email: "advaitchordia@gmail.com",
    phone: "+1 217 318 7042",
    summary: "Mechanical Engineering student at UIUC with a passion for design, analysis, and manufacturing. Experienced in CAD, FEA, and rapid prototyping with a strong background in automotive and composites.",
    links: {
      linkedin: "#", // Placeholder
      github: "#", // Placeholder
    }
  },
  education: [
    {
      school: "University of Illinois Urbana Champaign",
      degree: "Bachelor of Science in Engineering Mechanics",
      minors: "Minors in Materials Science and Architecture",
      date: "Expected May 2027",
      gpa: "3.86/4.0",
      location: "Champaign, IL"
    }
  ],
  skills: {
    technical: [
      "PTC Creo/Pro Engineer",
      "Siemens NX",
      "SolidWorks",
      "CATIA V5",
      "AutoCAD",
      "Fusion360",
      "Ansys Mechanical",
      "Abaqus",
      "MATLAB",
      "Python"
    ],
    courses: [
      "Engineering Materials",
      "Mech. Design Optimization",
      "Design for Manufacturing",
      "Statics",
      "Dynamics",
      "Mechanics & Thermodynamics"
    ],
    certifications: [
      "CNC",
      "UTM",
      "Power tools",
      "Waterjet"
    ]
  },
  experience: [
    {
      company: "FORCE MOTORS LTD.",
      title: "Mechanical Engineering Intern",
      date: "Jun 2025 – Aug 2025",
      description: [
        "Developed a Python-based mechanical guideline to define critical component geometry for a new 8-web crankshaft prototype with an increased peak firing pressure, reducing simulation iterations by an estimated 20-25%.",
        "Transformed 10+ 2D legacy powertrain component drawings into 3D models using CATIA V5 for the CAD data migration process using GD&T methods.",
        "Formulated an Excel-based tool to calculate optimal counterweight COG placement using polar moment of inertia, reducing static and dynamic crankshaft imbalance by >90%."
      ]
    },
    {
      company: "GALA PRECISION LTD.",
      title: "Mechanical Engineering Intern",
      date: "Jun 2024 – Aug 2024",
      description: [
        "Conducted FEA simulations using Ansys Static Structural and modal analysis on coil spring designs to compare open vs. closed coil configurations, providing data-backed recommendations to the client.",
        "Optimized the conveyor systems by introducing angled brackets in a Kaizen-based initiative, reducing part loss from spring spillage during the stress-relieving stage by 90%, saving 15 minutes of labor, daily.",
        "Demonstrated a 20% difference in compressive force and a 12% variation in displacement under load, highlighting reduced stress concentrations in closed spring designs."
      ]
    }
  ],
  projects: [
    {
      id: "fsae-front-wing",
      title: "ILLINI ELECTRIC MOTORSPORT | FSAE",
      role: "Front Wing Structures Lead",
      date: "Aug 2024 – Present",
      image: "/projects/fsae.jpg", // Example image path
      description: [
        "Headed product development of an 8-element carbon fiber front wing using Ansys ACP and Mechanical to define ply schedules, limiting deflection to 0.125\" while minimizing mass.",
        "Engineered carbon-fiber struts in PTC Creo, validated via Ansys Static Structural to withstand 1,533 N of downforce, achieving a 42% weight reduction compared to legacy aluminum designs.",
        "Fabricated a complete 21-element aero package, executing 100+ hours of precision pre-preg carbon fiber layup to ensure high-fidelity surface finish.",
        "Directed a team of 6 through the full 2026 vehicle lifecycle, managing timelines to ensure on-time delivery of design, manufacturing, and testing milestones."
      ]
    },
    {
      id: "composites-lab",
      title: "COMPOSITES ADDITIVE MANUFACTURING LAB",
      role: "Undergraduate Researcher",
      date: "Jan 2025 – June 2025",
      description: [
        "Conducted standardized tensile and shear testing on CF3D® composites using Instron systems to evaluate performance, establishing a UTS of 1395 MPa and shear strength of 66.59 MPa.",
        "Incorporated novel test coupon geometries using SolidWorks to overcome additive manufacturing constraints (minimum tow length), improving test reliability and minimizing material waste through prototype testing.",
        "Authored a technical paper summarizing tensile and shear characteristics, presented findings to a panel of 3 professors."
      ]
    }
  ]
};
