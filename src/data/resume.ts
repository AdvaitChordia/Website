export const resumeData = {
  personal: {
    name: "Advait Chordia",
    title: "Mechanical Engineer",
    location: "Champaign, IL",
    email: "advaitc2@illinois.edu",
    phone: "+1 217 318 7042",
    summary: "Mechanical Engineering student at UIUC with a passion for design, analysis, and manufacturing. Experienced in CAD, FEA, and rapid prototyping with a strong background in automotive and composites.",
    links: {
      linkedin: "https://www.linkedin.com/in/advait-chordia-3bbb31206",
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
    // CAD/FEA software - displayed vertically
    cad: [
      "PTC Creo/Pro Engineer",
      "Siemens NX",
      "SolidWorks",
      "CATIA V5",
      "AutoCAD",
      "Fusion360",
      "Ansys Mechanical",
      "Abaqus"
    ],
    // Common software/programming - displayed horizontally
    software: [
      "MATLAB",
      "Python",
      "Microsoft Office",
      "GD&T",
      "3D Printing/Rapid Prototyping"
    ],
    // Courses - clickable, linked to projects
    courses: [
      "Engineering Materials",
      "Mech. Design Optimization",
      "Design for Manufacturing",
      "Statics",
      "Dynamics",
      "Mechanics & Thermodynamics"
    ],
    certifications: [
      "CNC/Waterjet",
      "UTM",
      "Power tools"
    ]
  },
  // Maps courses to project IDs
  courseProjects: {
    "Engineering Materials": ["composites-lab"],
    "Mech. Design Optimization": ["fsae-front-wing", "conrod-optimization"],
    "Design for Manufacturing": ["fsae-front-wing"],
    "Statics": ["fsae-front-wing"],
    "Dynamics": ["fsae-front-wing", "conrod-optimization"],
    "Mechanics & Thermodynamics": []
  } as Record<string, string[]>,
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
      image: "/projects/fsae/car-drifting.jpg",
      tags: ["Carbon Fiber", "Composites", "FEA - Ansys ACP/Mechanical", "PTC Creo", "Motorsport", "Team Leadership", "Design Optimization"],
      photos: [
        { src: "/projects/fsae/Photo of internal structure + Struts layout.png", caption: "Final internal structure layout with struts" },
        { src: "/projects/fsae/Top Opt struts.png", caption: "Topology-optimized dual-mainplane mounting struts" },
        { src: "/projects/fsae/Final deflection at 95 mph aero loads.png", caption: "FEA results: Final deflection under 95 mph aero loads" },
        { src: "/projects/fsae/car-assembly.jpg", caption: "The car being assembled in the shop" },
        { src: "/projects/fsae/Add to gallery.png", caption: "Detailed structural analysis & loading" },
        { src: "/projects/fsae/FEA setup photo intricacy.png", caption: "Complex FEA mesh & boundary conditions setup" }
      ],
      overview: "Leading the front wing structures sub-team for Illini Electric Motorsport, I designed, analyzed, and manufactured the carbon fiber front wing assembly — including skins, internal ribs, spars, struts, and inserts — for our 2026 electric formula race car.",
      description: [
        "Achieved surface deflection below 0.1\" under 95 mph aero loads, exceeding the 0.125\" target.",
        "Designed dual aluminum and carbon strut systems — carbon primary with aluminum backups for competition reliability.",
        "Developed a Corecell-lined leading edge for improved impact absorption after rejecting aramid hybrid layups.",
        "Topology-optimized strut geometry to address L⁴ scaling problem on 50\" span mainplane.",
        "Directed a team of 6 through the full 2026 vehicle lifecycle, managing timelines for design, manufacturing, and testing milestones."
      ],
      journal: [
        {
          title: "Design Goals & Constraints",
          bullets: [
            "Surface deflection ≤0.125\" under 95 mph aero loads (prevents deviation from designed airfoil profile)",
            "Minimized spanwise bowing on the first mainplane (50\" unsupported span = L⁴ scaling problem)",
            "Cone strike survival — front wing must not shatter on impact (lessons from last year's brittle failure)",
            "First natural frequency ≥3× dominant road input (15+ Hz target)",
            "FSAE Rule T.7.1.3: All aero devices must remain stable without excessive oscillation",
            "Rule IN.6.6.2: 200N proof load with <5mm permanent deflection",
            "Internal SR.1-4: Positive safety margins under combined aero, inertial, and cone strike loads"
          ]
        },
        {
          title: "Learning from Last Year's Failures",
          layout: "problem-solution",
          items: [
            {
              problem: "Strut Failure (Carbon Anisotropy)",
              idea: "Switch to aluminum vs. continue with carbon?",
              solution: "Manufacture both aluminum and carbon struts — carbon as primary, aluminum as reinforced backup.",
              rationale: "Aluminum's isotropic behavior ensures predictable failure modes if carbon snaps during competition."
            },
            {
              problem: "Front Wing Shatter",
              idea: "Use CF + Aramid hybrid layups for impact absorption?",
              solution: "Introduce a Corecell-lined leading edge.",
              rationale: "Aramid fibers frill and fray after impact, preventing clean aero geometry for repairs. Corecell absorbs energy efficiently via deformation."
            }
          ],
          image: "/projects/fsae/Only mainplane 2 mounting struts.png"
        },
        {
          title: "FEA Exploration & Initial Solutions",
          layout: "text",
          content: "I ran FEA on the new airfoil geometry with a 3-ply schedule to understand deformation behavior.\n\nKey Finding: Extreme spanwise deformation — the first mainplane was acting like a simply supported beam with distributed load. Max deflection scales as L⁴ where L ≈ 50\" (span between mounting points).\n\nSolutions Explored:\n1. Safety cables on endplates to restrict deflection at the wingtips.\n2. Carbon spars at the center of pressure (cP) of each wing for flexural rigidity.\n3. Rib placement optimization to minimize surface deformation.\n\n(In the visualization to the right: light grey = aluminum, dark grey = carbon, yellow = corecell foam. Note: This initial FEA had additional connections making the result non-conservative.)",
          image: "/projects/fsae/Only mainplane 2 mounting struts.png"
        },
        {
          title: "Internal Structure Strategy",
          layout: "text",
          content: "The wing's internal structure had to absorb inertial loading, aero forces, and cone strikes. I evaluated 13 foam options (Rohacell, Corecell, Gurit PVC) to find a solution that could match our complex geometry.\n\nDecision: Selected Corecell M80 (3mm) for the leading edge core.\n\nReasoning: Unlike honeycomb which cannot conform to tight airfoil radii, or brittle foams that shatter, Corecell offers high elongation at break (40%) — allowing the leading edge to deform and absorb energy during a cone strike rather than fracturing. The ribs and spars were waterjet-cut from flat sandwich stock (Corecell + Carbon), enabling rapid manufacturing from single sheets.",
          image: "/projects/fsae/Photo of internal structure + Struts layout.png"
        },
        {
          title: "The Dual-Mainplane Mounting Decision",
          layout: "problem-solution",
          items: [
            {
              problem: "Extreme Bowing",
              idea: "Mount struts only on the first mainplane (legacy weight saving).",
              solution: "Switch to dual-mainplane mounting struts.",
              rationale: "The 50\" simply supported span caused 'smile-shaped' bowing due to L⁴ scaling. Dual mounting cut the unsupported span effectively."
            }
          ],
          image: "/projects/fsae/Top Opt struts.png"
        },
        {
          title: "Ply Schedule & Material Selection",
          layout: "table",
          table: {
            headers: ["Component", "Material", "Ply Schedule", "Design Rationale"],
            rows: [
              ["Mainplane 1", "TC 250", "[45, -45]", "Torsional Stiffness"],
              ["Mainplane 2", "TC 250", "[45, -45]", "Torsional Stiffness"],
              ["Elements", "TC 250", "[0, 0]", "Flexural Rigidity"],
              ["Spars", "TC 275", "[0,0,0,0,0]", "Flexural Rigidity"],
              ["Mounting Inserts", "7075 Al", "1C1 [0.125\" core]", "Buckling Resistance"],
              ["Endplates", "TC 250", "[0, -30]", "Flexural Rigidity"]
            ]
          }
        },
        {
          title: "Validation & Results",
          layout: "checklist",
          checklist: [
            "Surface deflection maintained below 0.1\" (Goal: ≤0.125\")",
            "Spanwise bowing reduced — total deformation within limits",
            "All safety margins positive under combined loading",
            "Buckling issue identified on MP1 — Patch ply solution implemented",
            "Every fastener safety-factored and validated",
            "Custom inserts designed for all wing attachments"
          ],
          image: "/projects/fsae/Final deflection at 95 mph aero loads.png"
        },
        {
          title: "Manufacturing & Current Status",
          layout: "text",
          content: "Design is 90% complete and manufacturing has now begun. Our approach involves adding a layer of peel ply on the inside of the skins to prep the surface for bonding. The internal structures (ribs and spars) connect together in an almost lap-joint method, allowing adhesive to be added for secure bonding. The assembly sequence proceeds from skin layup to peeling the interior, followed by bonding the ribs/spars and final close-out."
        }
      ]
    },
    {
      id: "force-motors-crankshaft",
      title: "FORCE MOTORS | CRANKSHAFT PROTOTYPE",
      role: "Mechanical Engineering Intern",
      date: "Jun 2025 – Aug 2025",
      image: "/projects/force-motors-crankshaft/engine-graphic.png",
      presentation: "/projects/force-motors-crankshaft/presentation.pdf",
      paper: "/projects/force-motors-crankshaft/report.pdf",
      tags: ["Python", "Crankshaft Design", "Balancing", "Automotive"],
      overview: "At Force Motors, I developed computational tools to accelerate the design of a new 8-web crankshaft capable of handling higher peak firing pressures — a critical upgrade for their next-generation diesel engines.",
      description: [
        "I developed a Python-based mechanical guideline to define critical component geometry for a new 8-web crankshaft prototype with an increased peak firing pressure, reducing simulation iterations by an estimated 20-25%.",
        "I formulated an Excel-based tool to calculate optimal counterweight COG placement using polar moment of inertia, reducing static and dynamic crankshaft imbalance by >90%."
      ],
      journal: [
        {
          title: "Walking Into an OEM Powertrain Team",
          content: "Force Motors isn't just any manufacturer — they produce engines for Mercedes-Benz and BMW in India. Walking into their powertrain engineering department, I knew I was joining a team with serious technical depth. My project: help design a crankshaft that could handle 20% higher combustion pressures than the current production unit."
        },
        {
          title: "Building the Design Guideline Tool",
          content: "The challenge with crankshaft design is the sheer number of parameters — web geometry, journal diameters, fillet radii, counterweight placement. Traditionally, engineers would iterate through dozens of FEA runs to converge on a good design. I built a Python tool that encapsulated the mechanical design guidelines, automatically checking geometry against limits and predicting stress concentrations before running expensive simulations."
        },
        {
          title: "Solving the Balancing Puzzle",
          content: "A crankshaft spinning at 4000+ RPM generates enormous centrifugal forces. If the counterweights aren't positioned correctly, those forces create vibrations that destroy bearings and make engines sound terrible. I developed a spreadsheet tool that calculated optimal counterweight center-of-gravity positions using polar moment of inertia equations, reducing both static and dynamic imbalance by over 90%."
        }
      ]
    },
    {
      id: "conrod-optimization",
      title: "CONNECTING ROD MULTI-OBJECTIVE OPTIMIZATION",
      role: "Personal Project",
      date: "Aug 2025 – Dec 2025",
      image: "/projects/conrod-optimization/hero.png",
      paper: "/projects/conrod-optimization/optimization-paper.pdf",
      proposal: "/projects/conrod-optimization/project-proposal.pdf",
      tags: ["Optimization", "Python", "Beam Theory", "FEA", "Automotive"],
      photos: [
        { src: "/projects/conrod-optimization/Buckling photo.png", caption: "Peak gas load causes compressive buckling tendency" },
        { src: "/projects/conrod-optimization/Inertial Tension.png", caption: "TDC inertia puts the rod in tension" },
        { src: "/projects/conrod-optimization/Bending scenario.png", caption: "Transverse whipping load at 90° crank angle" },
        { src: "/projects/conrod-optimization/Optimized connecting Rod Geom cross-sectional geometry relation for I beam config.png", caption: "Optimized I-beam cross-sectional geometry" },
        { src: "/projects/conrod-optimization/Represented cross sectional areas along the shank length.png", caption: "I-beam cross-section evolution along the shank" },
        { src: "/projects/conrod-optimization/Optimized connecting Rod Geom cross-sectional geometry relation for H beam config.png", caption: "H-beam geometry for comparative study" }
      ],
      overview: "I developed a multi-objective optimization program to redesign the connecting rod of a Mercedes-Benz OM606 diesel engine. Using 1D beam modeling and Python, I minimized mass while maintaining structural integrity under extreme combustion loads.",
      description: [
        "I built a 1D beam model of the OM606 connecting rod to enable rapid structural analysis during optimization iterations.",
        "I implemented multi-objective optimization algorithms to balance competing goals: minimizing mass while ensuring fatigue life and preventing buckling.",
        "I validated my simplified beam model against FEA results to confirm accuracy within acceptable engineering tolerances.",
        "I authored a technical paper documenting the methodology and presenting the optimized design with quantified improvements."
      ],
      journal: [
        {
          title: "The Three Critical Load Cases",
          content: "The OM606 connecting rod must survive three distinct loading scenarios. First: Peak Gas Load during combustion, where 130 bar cylinder pressure on an 87mm bore creates a compressive force of F_gas ≈ 77.3 kN — this drives the buckling constraint. Second: Top Dead Center Inertia at the end of the exhaust stroke, where the piston reverses direction and puts the rod in tension. The inertial force scales with ω², which is why I designed for 5500 RPM redline conditions. Third: Transverse Inertia (Whipping) at 90° crank angle, where lateral acceleration causes the rod to bow outward. Each load case produces different stress distributions and failure modes.",
          image: "/projects/conrod-optimization/Buckling photo.png"
        },
        {
          title: "Formulating the Optimization Problem",
          content: "The objective was simple: minimize shank mass f(x) = Σρ A_i L_i while satisfying four constraints. Buckling stability required P_cr/(F_gas × 2.5) ≥ 1, where critical buckling load follows the Euler formula P_cr = π²EI/L². Fatigue life under tensile inertial loading needed SF ≥ 1.3. Static yield under compressive gas loading also required SF ≥ 1.3. Finally, a monotonicity constraint ensured the geometry tapered smoothly from small end to big end — no undercuts that would be impossible to forge. I solved this constrained NLP using SLSQP in scipy.optimize.",
          image: "/projects/conrod-optimization/Optimized connecting Rod Geom cross-sectional geometry relation for I beam config.png"
        },
        {
          title: "The Surprising Result: Yield Dominance",
          content: "Going into this project, I assumed buckling would be the active constraint — that's what most textbooks emphasize for slender columns under compression. The post-optimization analysis told a different story. The optimized I-beam geometry achieved a Buckling Safety Factor of 7.3, nearly triple the requirement. Meanwhile, Static Yield converged to exactly 1.3 — it was the active constraint. This means the rod will crush under compressive stress long before it ever buckles. The I-beam flanges are so efficient at maximizing area moment of inertia that buckling became non-critical.",
          image: "/projects/conrod-optimization/Represented cross sectional areas along the shank length.png"
        },
        {
          title: "I-Beam vs H-Beam: The Comparative Study",
          content: "To validate the I-beam topology selection, I ran a comparative optimization using an H-beam cross-section under identical constraints. The H-beam configuration, with its vertical side walls instead of horizontal flanges, is geometrically less efficient at resisting in-plane buckling within the 35mm width constraint. The result: the H-beam converged to 103.8 g — a 17.5% mass penalty compared to the I-beam's 88.34 g. This performance gap conclusively demonstrated why I-beam sections dominate high-performance connecting rod design.",
          image: "/projects/conrod-optimization/Optimized connecting Rod Geom cross-sectional geometry relation for H beam config.png"
        }
      ]
    },
    {
      id: "composites-lab",
      title: "COMPOSITES ADDITIVE MANUFACTURING LAB",
      role: "Undergraduate Researcher",
      date: "Jan 2025 – June 2025",
      image: "/projects/composites-lab/printing-action.jpg",
      poster: "/projects/composites-lab/cam-lab-poster.pdf",
      paper: "/projects/composites-lab/cam-lab-paper.pdf",
      tags: ["Research", "Composites", "Materials Testing", "Additive Manufacturing"],
      photos: [
        { src: "/projects/composites-lab/cf3d-printer.jpg", caption: "The CF3D® printer at the Composites Additive Manufacturing Lab" },
        { src: "/projects/composites-lab/printing-action.jpg", caption: "Continuous fiber being deposited during the printing process" },
        { src: "/projects/composites-lab/cutting-samples.jpg", caption: "Preparing test specimens with my research partner" },
        { src: "/projects/composites-lab/instron-sample.jpg", caption: "Test coupon mounted in the Instron machine" },
        { src: "/projects/composites-lab/shear-failure.jpg", caption: "Shear specimen at the moment of failure" },
        { src: "/projects/composites-lab/fractured-sample.jpg", caption: "Post-failure analysis of a shear test specimen" }
      ],
      overview: "I spent a semester working hands-on with one of the most advanced composite manufacturing systems in the country — the CF3D® continuous fiber 3D printer. What started as a research position quickly became one of the most formative experiences of my engineering education.",
      description: [
        "I conducted standardized tensile and shear testing on CF3D® composites using Instron systems, establishing a UTS of 1395 MPa and shear strength of 66.59 MPa.",
        "I designed novel test coupon geometries in SolidWorks to overcome additive manufacturing constraints, improving test reliability and minimizing material waste.",
        "I authored a technical paper summarizing my findings and presented the research to a panel of 3 professors."
      ],
      journal: [
        {
          title: "Walking Into the Lab for the First Time",
          content: "The first time I walked into the Composites Additive Manufacturing Lab, I was immediately struck by the CF3D® printer sitting in the center of the room. This wasn't like any 3D printer I'd seen before — it was depositing continuous carbon fiber at temperatures over 400°C, creating parts that could rival traditional aerospace-grade composites. Professor Baur explained that while the technology was groundbreaking, nobody had systematically characterized the mechanical properties of these printed materials. That became my mission.",
          image: "/projects/composites-lab/cf3d-printer.jpg"
        },
        {
          title: "Learning to Work with Continuous Fiber",
          content: "The CF3D® process is beautiful to watch but incredibly demanding to master. Unlike traditional FDM printing, you can't just stop and start — the carbon fiber tow needs to maintain a minimum length of 25mm or it won't bond properly. This constraint meant I had to completely rethink how test specimens are designed. I spent weeks in SolidWorks developing custom coupon geometries that would give us valid ASTM data while respecting the printer's limitations. Every failed print taught me something new about the material's behavior.",
          image: "/projects/composites-lab/printing-action.jpg"
        },
        {
          title: "The Grind of Sample Preparation",
          content: "Research isn't glamorous. I spent countless hours in the machine shop with my research partner, carefully cutting and preparing specimens for testing. Each sample had to be precisely dimensioned — any variation would compromise our results. We developed a workflow that minimized waste while ensuring each specimen met ASTM specifications. The smell of carbon fiber dust became oddly comforting, a sign that we were making progress.",
          image: "/projects/composites-lab/cutting-samples.jpg"
        },
        {
          title: "Tensile Testing: Watching Carbon Fiber Fail",
          content: "The Instron machine became my second home. I ran dozens of tensile tests following ASTM D3039, carefully mounting each specimen and watching the stress-strain curves develop in real-time. There's something almost violent about watching a carbon fiber sample fail — one moment it's holding over 1300 MPa of stress, the next it explodes into a shower of fractured fibers. We established an ultimate tensile strength of 1395 MPa, which was actually higher than I expected for an additively manufactured material.",
          image: "/projects/composites-lab/instron-sample.jpg"
        },
        {
          title: "Shear Testing and Failure Analysis",
          content: "The short beam shear tests were equally revealing. Following ASTM D2344, I subjected samples to three-point bending until interlaminar shear failure occurred. The shear strength came out to 66.59 MPa — respectable, but the failure modes were fascinating. Each fractured sample told a story about how the layers bonded during printing. I spent hours under the microscope analyzing failure surfaces, trying to understand what made some samples stronger than others.",
          image: "/projects/composites-lab/shear-failure.jpg"
        },
        {
          title: "What This Research Means",
          content: "By the end of my time in the lab, I had generated the first comprehensive mechanical property dataset for CF3D® composites at our university. These numbers matter — they give engineers the confidence to actually design with these materials. My technical paper summarized everything I learned, and presenting to that panel of professors was genuinely nerve-wracking. But seeing my data cited in their subsequent work? That made every late night in the lab worth it.",
          image: "/projects/composites-lab/fractured-sample.jpg"
        }
      ]
    },
    {
      id: "me170-footrest",
      title: "ME170 | ARROW FOOTREST DESIGN",
      role: "Design Team Member",
      date: "Fall 2023",
      image: "/projects/ME 170 Footrest project/Hero shot.png",
      tags: ["Human-Centered Design", "CAD", "Injection Molding", "Sheet Metal", "GD&T"],
      overview: "As part of a four-person team in ME170 (Design for Manufacturing), I helped design the ARROW Footrest — an adjustable, chair-mounted footrest that prioritizes comfort and modularity. We took the project from user interviews through CAD modeling and manufacturing planning.",
      description: [
        "Conducted user interviews with undergraduate students to identify comfort issues, driving the product ideation toward an adjustable, chair-mounted footrest solution.",
        "Led concept selection using a Pugh matrix, evaluating four design alternatives against 11 criteria including manufacturability, cost, and ergonomics.",
        "Developed complete CAD assembly in SolidWorks with detailed engineering drawings featuring GD&T specifications and tolerance analysis for H7/g6 and H7/k6 fits.",
        "Designed for hybrid manufacturing using injection-molded ABS plastic and stamped sheet metal, targeting a $25-35 retail price with 10% profit margin."
      ],
      journal: [
        {
          title: "Human-Centered Design Process",
          content: "The ARROW Footrest began with extensive user interviews. We spoke with undergraduate students who struggled to find comfort at their desks — in dorms, libraries, and study spaces. One key insight: students under 5'3\" had no good way to rest their feet while working at standard-height desks. This drove our focus toward a portable, chair-mounted solution rather than a floor-standing footrest that would take up space.",
          image: "/projects/ME 170 Footrest project/Design sketches.png"
        },
        {
          title: "Concept Selection & Trade-offs",
          content: "We sketched four distinct concepts: a screw-clamp hinge design, a single-clamp with rubber stopper, a dual-clamp for 4-leg chairs, and a body-weight-secured folding design. Using a Pugh matrix with 11 criteria — from service life to manufacturing complexity — we systematically evaluated each against a datum. Concept 3 (dual-clamp) scored highest, but we iterated significantly to adapt it for office chair bases based on interview feedback."
        },
        {
          title: "CAD Development",
          content: "The final design consists of a modular assembly: a slider mechanism with steel base and ABS plastic components, a pipe-style clamp with eye bolt adjustment, and a replaceable platform. I focused on the clamp and linkage geometry in SolidWorks, ensuring the mechanism could handle 40 lbs of vertical force with less than 1.5\" deflection. The modular approach means users can swap platforms or replace individual components without buying a new footrest.",
          image: "/projects/ME 170 Footrest project/Shaded Unexploded Assemly view.png"
        },
        {
          title: "Design for Manufacturing",
          content: "Material selection balanced durability against cost. Load-bearing components like the slider rail use stamped steel sheet metal, while the platform and pins use injection-molded ABS plastic for safety and weight reduction. We specified H7/g6 sliding fits for pin-hole interfaces (0.05-0.29mm clearance) and H7/k6 transition fits for the slider pan-rail interface to maintain contact under load. Target manufacturing cost under $20 enables our $30 retail price with required margins.",
          image: "/projects/ME 170 Footrest project/Shaded Exploded Assemly view.png"
        },
        {
          title: "Engineering Documentation",
          content: "Every custom part received a detailed engineering drawing with full GD&T callouts per ASME Y14.5M-2018. The drawings specify tolerances achievable with standard machine tooling — we weren't designing for aerospace precision, but for reliable manufacturing at scale. The complete documentation package includes exploded assembly views, cross-sections showing internal fits, and a bill of materials with off-the-shelf hardware identified.",
          image: "/projects/ME 170 Footrest project/Lower Clamp Engineering drawing sample.png"
        }
      ]
    },
    {
      id: "uiuc-course-support",
      title: "UIUC MechSE | COURSE SUPPORT",
      role: "Course Assistant & Grader",
      date: "Aug 2024 – May 2025",
      image: "/projects/uiuc-course-support/Hero Shot.png",
      tags: ["Teaching", "Statics", "Thermodynamics", "Mechanics"],
      overview: "I worked as a course assistant for TAM 211 (Statics) and grader for ME 200 (Thermodynamics) and TAM 195 (Intro to Mechanics). Professors approached me after I performed well in these courses as a student.",
      description: [
        "Graded homework sets, quizzes, and exams for three foundational engineering courses, handling 90+ submissions per assignment while maintaining consistency in evaluation.",
        "Held 2+ hours of office hours weekly, helping students work through homework problems, clarify concepts, and prepare for quizzes.",
        "Reviewed final exams before administration to check for errors and consistency in problem difficulty."
      ],
      journal: [
        {
          title: "Transition to Staff",
          content: "After completing Statics (TAM 211), Thermodynamics (ME 200), and Intro to Mechanics (TAM 195), I was invited by the professors to join the course staff. I loved the job because it also was an opportunity to keep my fundamentals sharp. I wanted to stay engaged with the core principles of mechanical engineering, and there is no better way to maintain fluency in these subjects than by helping others navigate them."
        },
        {
          title: "The Logic of Problem Solving",
          content: "Grading hundreds of assignments offered a unique perspective on engineering logic. I wasn't just checking for correct answers; I was analyzing the thought process. I saw how five different students could approach the same force balance or energy equation in five different ways. Learning to follow someone else's derivation, and identifying exactly where their logic diverged from the solution, trained me to debug technical problems quickly. I also assisted in essentially Quality Assurance for final exams, vetting problems for consistency and clarity before they reached the students."
        },
        {
          title: "Office Hours",
          content: "This was the most valuable part of the experience. During weekly office hours, I walked students through Free Body Diagrams (FBDs) and complex energy balances. The challenge wasn't solving the problems for them, but understanding their approach and guiding them past mental blocks. Explaining the 'why' behind a vector component or a thermodynamic assumption repeatedly didn't just help the students but reinforced my own understanding. It bridged the gap between knowing how to use a formula and deeply understanding the physical mechanics behind it."
        }
      ]
    },
    {
      id: "3d-printed-clock",
      title: "3D PRINTED MECHANICAL CLOCK",
      role: "Personal Project",
      date: "2024",
      image: "/projects/3d-printed-clock/temporary hero.jpeg",
      tags: ["3D Printing", "Mechanical Design", "CAD", "Horology"],
      overview: "I designed and built a fully functional mechanical clock using 3D printed gears, escapements, and a pendulum. No electronics — just pure mechanical engineering.",
      photos: [
        { src: "/projects/3d-printed-clock/Straight shot of finished product.jpeg", caption: "The finished jump hour clock" },
        { src: "/projects/3d-printed-clock/second angle of finished product.jpeg", caption: "Another angle of the completed clock" },
        { src: "/projects/3d-printed-clock/Blueprint layout of gears.jpeg", caption: "Blueprint layout of the gear train" },
        { src: "/projects/3d-printed-clock/Random photo of the escapement mechanism.jpeg", caption: "Escapement mechanism detail" }
      ],
      description: [
        "I designed a complete mechanical clock mechanism including escapement, gear train, and pendulum from scratch in SolidWorks.",
        "I optimized gear tooth profiles and tolerances for FDM printing, achieving smooth operation without post-processing.",
        "I built and tested multiple prototypes, iterating on the escapement design to achieve reliable timekeeping.",
        "Details coming soon: [Placeholder for additional technical details about the jump hour mechanism and assembly process]"
      ],
      journal: [
        {
          title: "The Challenge: Making Plastic Tell Time",
          content: "There's something almost magical about mechanical clocks — the way they convert gravity into precisely measured time through nothing but gears and springs. I wanted to understand that magic firsthand, and what better way than to build one from scratch? The twist: I'd 3D print as many parts as possible, pushing the limits of what FDM printing can achieve in precision mechanisms."
        },
        {
          title: "Designing the Gear Train",
          content: "The heart of any clock is its gear train — a series of gears that step down the motion of the weight or spring into seconds, minutes, and hours. I spent weeks in SolidWorks calculating gear ratios, tooth profiles, and shaft positions. The key insight was that 3D printed gears need more backlash than machined ones, and rounded tooth profiles work better than sharp involutes for plastic-on-plastic contact."
        },
        {
          title: "The Escapement: Where Magic Happens",
          content: "The escapement is what makes a clock tick — literally. It's the mechanism that controls energy release and creates that characteristic sound. I chose an anchor escapement design for its simplicity and reliability. Getting it to work with 3D printed parts required extensive tweaking of the anchor geometry and escape wheel tooth shape."
        },
        {
          title: "Assembly and First Tick",
          content: "The moment all the gears were assembled and I attached the pendulum, I held my breath. Would months of work pay off? I gave the pendulum a gentle push, and the clock started ticking. It wasn't perfect — the timekeeping was off by a few minutes per day — but hearing those first ticks was incredibly satisfying."
        }
      ]
    },
    {
      id: "force-motors-cad-migration",
      title: "FORCE MOTORS | CAD DATA MIGRATION",
      role: "Mechanical Engineering Intern",
      date: "Jun 2025 – Aug 2025",
      tags: ["CATIA V5", "GD&T", "Legacy Systems", "Automotive"],
      overview: "I converted legacy 2D powertrain drawings into modern 3D CAD models, helping Force Motors transition their engineering documentation to a digital-first workflow.",
      description: [
        "I transformed 10+ 2D legacy powertrain component drawings into 3D models using CATIA V5 for the CAD data migration process using GD&T methods."
      ],
      journal: [
        {
          title: "The Legacy Drawing Challenge",
          content: "Force Motors has decades of engineering history locked in paper drawings and 2D CAD files. These drawings contain critical design intent — tolerances, surface finishes, assembly notes — that needs to be preserved in 3D models. My job was to carefully interpret these drawings and recreate the parts in CATIA V5, ensuring nothing was lost in translation."
        },
        {
          title: "Learning GD&T the Hard Way",
          content: "You don't truly understand geometric dimensioning and tolerancing until you've had to recreate a complex part from a 30-year-old drawing. Every datum reference, every tolerance callout tells a story about how the part is manufactured and inspected. This project gave me a deep appreciation for the language of engineering drawings."
        }
      ]
    },
    {
      id: "gala-precision-springs",
      title: "GALA PRECISION | SPRING ANALYSIS & OPTIMIZATION",
      role: "Mechanical Engineering Intern",
      date: "Jun 2024 – Aug 2024",
      presentation: "/projects/gala-precision-springs/kaizen-presentation.pdf",
      tags: ["FEA", "Ansys", "Kaizen", "Manufacturing Optimization"],
      overview: "At Gala Precision, I combined FEA simulation skills with hands-on manufacturing improvement, delivering both technical analysis of spring designs and a Kaizen project that reduced production waste.",
      description: [
        "I conducted FEA simulations using Ansys Static Structural and modal analysis on coil spring designs to compare open vs. closed coil configurations, providing data-backed recommendations to the client.",
        "I optimized the conveyor systems by introducing angled brackets in a Kaizen-based initiative, reducing part loss from spring spillage during the stress-relieving stage by 90%, saving 15 minutes of labor, daily.",
        "I demonstrated a 20% difference in compressive force and a 12% variation in displacement under load, highlighting reduced stress concentrations in closed spring designs."
      ],
      journal: [
        {
          title: "First Day on the Factory Floor",
          content: "Gala Precision is one of India's leading spring manufacturers, producing everything from tiny precision springs for electronics to massive suspension springs for trucks. Walking through the factory floor on my first day, I was struck by the scale — rows of coiling machines, heat treatment ovens, and quality inspection stations stretching as far as I could see."
        },
        {
          title: "The Open vs. Closed Coil Debate",
          content: "My main technical project was settling a design debate: should a particular spring design use open or closed coils at the ends? I set up FEA models in Ansys to simulate both configurations under compression. The results were clear — closed coils reduced stress concentrations by 20% and improved load distribution. My analysis gave the client confidence to proceed with the closed-coil design."
        },
        {
          title: "Kaizen: Small Changes, Big Impact",
          content: "The most satisfying part of my internship wasn't the FEA work — it was a simple Kaizen improvement. I noticed that springs were rolling off the conveyor during the stress-relieving process, creating scrap and requiring manual rework. I designed a set of angled brackets that kept springs centered on the conveyor. The result: 90% reduction in spillage and 15 minutes saved per day. Sometimes engineering is about the small fixes."
        }
      ]
    },
    {
      id: "asme-autonomous-car",
      title: "ASME | VIRTUAL AUTONOMOUS COMPETITION",
      role: "Team Lead",
      date: "Jan 2025 – Present",
      tags: ["SolidWorks", "Autonomous Systems", "Control Logic", "Competition"],
      overview: "Leading a team to design a virtual autonomous car that can navigate a circuit as efficiently as possible, combining CAD skills with control system logic.",
      description: [
        "I led a team of three to design and develop a virtual autonomous car using SolidWorks for CAD modeling and block code to write the control software, aiming to complete a lap around a virtual circuit as efficiently as possible.",
        "I spearheaded the research into track dynamics and the fastest routes, applying critical problem-solving skills to improve the car's performance.",
        "I contributed to team management, guiding the project through design, testing, and optimization phases for future success in the competition."
      ],
      journal: [
        {
          title: "Why Virtual Racing?",
          content: "The ASME virtual autonomous car competition is a unique challenge — you design a car in CAD, then program its control logic to navigate a virtual track without any human input. It combines mechanical design intuition with control systems thinking. As team lead, I'm responsible for both the vehicle architecture and keeping our three-person team on track."
        },
        {
          title: "Finding the Racing Line",
          content: "The key to fast lap times isn't just raw speed — it's finding the optimal path around the track. I spent hours analyzing corner geometries, calculating the fastest racing lines, and translating that knowledge into control logic. Every tenth of a second matters in competition."
        }
      ]
    }
  ],
  // Maps each technical skill to the project IDs that demonstrate it
  skillProjects: {
    "PTC Creo/Pro Engineer": ["fsae-front-wing", "gala-precision-springs"],
    "Siemens NX": ["asme-autonomous-car"],
    "SolidWorks": ["composites-lab", "3d-printed-clock", "me170-footrest"],
    "CATIA V5": ["force-motors-crankshaft", "force-motors-cad-migration"],
    "AutoCAD": ["composites-lab", "3d-printed-clock"],
    "Fusion360": ["conrod-optimization", "3d-printed-clock", "me170-footrest"],
    "Ansys Mechanical": ["fsae-front-wing", "gala-precision-springs"],
    "Abaqus": [],
    "MATLAB": ["conrod-optimization", "asme-autonomous-car"],
    "Python": ["force-motors-crankshaft", "conrod-optimization", "asme-autonomous-car"],
    "Microsoft Office": ["fsae-front-wing", "force-motors-crankshaft", "force-motors-cad-migration", "gala-precision-springs", "uiuc-course-support", "me170-footrest"],
    "GD&T": ["fsae-front-wing", "force-motors-cad-migration", "me170-footrest"],
    "3D Printing/Rapid Prototyping": ["fsae-front-wing", "3d-printed-clock"],
    "Product Design": ["me170-footrest", "3d-printed-clock"]
  } as Record<string, string[]>,
  // Maps certifications to project IDs
  certificationProjects: {
    "CNC/Waterjet": ["fsae-front-wing"],
    "UTM": ["fsae-front-wing", "composites-lab"],
    "Power tools": ["fsae-front-wing", "composites-lab", "gala-precision-springs"]
  } as Record<string, string[]>
};

