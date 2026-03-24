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
    "Mech. Design Optimization": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing", "conrod-optimization"],
    "Design for Manufacturing": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing"],
    "Statics": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing"],
    "Dynamics": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing", "conrod-optimization"],
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
      id: "fsae-hub",
      title: "ILLINI ELECTRIC MOTORSPORTS",
      role: "Aerodynamics Structures Lead",
      date: "Aug 2024 – Present",
      image: "/projects/fsae/car-drifting.jpg",
      customUrl: "/fsae",
      tags: ["Vehicle Dynamics", "Composites", "Motorsport", "Team Leadership"],
      overview: "I led the front wing structures sub-team for Illini Electric Motorsport, overseeing the design, analysis, and manufacturing of the 2026 electric formula race car aerodynamic structures.",
    },
    {
      id: "fsae-struts",
      title: "FSAE | FRONT WING MOUNTING STRUTS",
      hideFromMain: true,
      role: "Structures Engineer",
      date: "Aug 2024 – Present",
      image: "/projects/fsae/Alu top opt struts three quarter with monocoque and wing.png",
      tags: ["Topology Optimization", "FEA", "Anisotropy Analysis", "Structural Design"],
      overview: "A deep dive into replacing failure-prone CFRP mounting struts with topology-optimized aluminum counterparts. This project highlights failure analysis, yielding behavior over catastrophic fracture, and achieving a 58% mass reduction through iterative optimization.",
      photos: [
        { src: "/projects/fsae/Alu top opt struts three quarter with monocoque and wing.png", caption: "Topology-optimized aluminum mounting struts on the chassis" },
        { src: "/projects/fsae/Screenshot 2026-01-02 103425.png", caption: "FEA model of strut loads and topology optimization" },
        { src: "/projects/fsae/Boundary conditions for sizing the parts.png", caption: "Boundary conditions for sizing the parts" }
      ],
      journal: [
        {
          title: "Mounting struts",
          layout: "text",
          content: "The front wing mounting struts are the structural connectors of the aero package to the car. They carry all downforce, drag, and side loads from the wing directly to the monocoque. They essentially are a vital load path that transfer all the downforce the wings develop to the vehicle making them critical components on the aero package."
        },
        {
          title: "Initial Sizing",
          layout: "text",
          content: "The struts had two design-driving load cases. The first was stiffness: the struts had to keep wing deflection within an acceptable limit at peak aero loading of 95 mph. If the wing flexes too much, it deviates from its designed profile and bleeds aerodynamic performance. The second was strength: the struts had to survive the harshest combined load case—35 mph aero loads simultaneously with an out-of-plane cone strike. This combination represents the worst credible event on track. If these parts failed and the wing dropped to the ground mid-run, it was an immediate disqualification.\n\nWhen sizing for strength, the active constraint was exactly what you'd expect: the 35 mph aero load combined with the cone strike. The aero-only case was no problem—the cone strike component is what actually pushes the part to its limits."
        },
        {
          title: "The Initial Design Logic: Moment of Inertia",
          layout: "text",
          content: "The first question when designing the strut was what it'shape should like? The idea was to maximize area moment of inertia where requried. The idea I used was to think of the struts as a cantilever beam fixed the chassis at one end. There were really two main forces that caused the part to bend, the out of plane cone strike and the downforce. The key equation here is the area moment of inertia and its relationship to deflection:\n\nI = l·w³/12   →   δ = F·L³/(3·E·I)\n\nFor when trying to reduce the bending because of aero loads, the width of the beam (w in the diagram) had a cubic relationship with moment of inertia. So increasing it's width allowed for much lesser deflection. This drove the decision to use a taller section of aluminum sheet rather than going flat. The shape of the strut evolved directly from this reasoning—maximize the section height wherever packaging would allow.",
          image: "/projects/fsae/FBD showing deflection relation from aero loads.jpeg"
        },
        {
          title: "The Scrapped Idea: Single-Mainplane Mounting",
          layout: "text",
          content: "At one point during the initial design phase, I explored a weight-saving approach: mount the main struts only to the second mainplane (the one closest to the chassis), and then use smaller, lighter brackets between the two mainplanes to transfer the load forward. Intuitively, at first, I thought this would work and provide significant weight savings.\n\nIn practice, I didn't realise that this arrangement made the first mainplane act as a simply supported beam with a massive distributed aerodynamic load across its entire span. Simply supported beams deflect with an L⁴ relationship to span, and at our scale of 50\" length, the resulting deflection was a huge no-go. I've attached a photo to show how significant the smile created was. The whole forward section of the wing was bowing like a banana. The idea was scrapped entirely, and the struts were redesigned to mount directly to both mainplanes, distributing the load properly and eliminating the problematic span.",
          image: "/projects/fsae/Photo to show deflection with strut only mounting to mainplane 2.png"
        },
        {
          title: "Boundary Conditions",
          layout: "text",
          content: "To properly optimize and size the parts, accurate boundary conditions reflecting both aerodynamic loads and dynamic track scenarios were applied.",
          image: "/projects/fsae/Boundary conditions for sizing the parts.png"
        },
        {
          title: "Iterating on Thickness and Topology",
          layout: "text",
          content: "With the geometry philosophy locked in, the next step was picking the right sheet aluminum thickness. I tested a range of thicknesses bracketing my intuitive estimate—below it to check where the design started failing margin, and above it to find where the added weight and aerodynamic blockage started becoming detrimental. There's a real upper limit on thickness here: at some point the strut becomes thick enough that it starts generating its own drag and interfering with airflow entering the wing, which defeats the purpose of having a wing at all.\n\nOnce the right thickness was identified, I ran topology optimization in Ansys. Manufacturing constraints were set from the start: these parts were going to be waterjet-cut from sheet stock, so the optimizer couldn't propose anything that couldn't be cut flat. Pockets were iteratively removed from low-stress regions, and the remaining material was verified to meet the strength and deflection requirements. Bolt holes were then sized for both bearing stress and shear tearout to make sure the fastener interfaces were never the weak link.",
          image: "/projects/fsae/top_opt_iterations.gif"
        },
        {
          title: "Results",
          layout: "checklist",
          checklist: [
            "Achieved a 58% volume reduction through topology optimization — from 18.96 in³ to 7.91 in³.",
            "Part sized to a Safety Factor of 1.6 to yield under the active constraint (35 mph aero + cone strike), providing a warning before fracture.",
            "Strut deflection held within the 0.1\" Z-limit at 95 mph aero loads.",
            "Bolt holes verified for both bearing stress and shear tearout to a safety factor of 2.",
            "Mounting location kept to the side of the monocoque and not the floor so if a part yielded, it could be unbolted and replaced trackside without major disassembly.",
            "Scrapped the single-mainplane mounting concept early after identifying the catastrophic simply-supported beam deflection it caused."
          ]
        }
      ]
    },
    {
      id: "fsae-aero-elasticity",
      title: "FSAE | AERO-ELASTICITY & MASS OPTIMIZATION",
      hideFromMain: true,
      role: "Structures Engineer",
      date: "Aug 2024 – Present",
      image: "/projects/fsae/Final deflection at 95 mph aero loads.png",
      tags: ["FSI - Star-CCM+ to Ansys", "Ansys ACP", "Composite Ply Optimization", "Aero-elasticity"],
      overview: "Implemented a one-way Fluid-Structure Interaction (FSI) workflow to map real CFD pressure fields onto composite FEA models for accurate deflection sizing. Iterated on ply schedules and internal layouts to hit a 5.86 lb assembly weight while minimizing aerodynamic performance loss.",
      photos: [
        { src: "/projects/fsae/Final deflection at 95 mph aero loads.png", caption: "FEA results: Final deflection under 95 mph aero loads" },
        { src: "/projects/fsae/FEA setup photo intricacy.png", caption: "Complex FEA mesh & boundary conditions setup" },
        { src: "/projects/fsae/Boundary conditions for sizing the parts.png", caption: "Boundary conditions for sizing the parts" }
      ],
      journal: [
        {
          title: "The Problem: Beyond Static Goals",
          layout: "text",
          content: "Sizing the front wing assembly to an arbitrary target like \"maximum deflection under 0.5 inches\" is flawed when sizing aero structures. The wing deforms in 3D: surface deformation alters the airfoil shape itself, spanwise bowing physically closes down the slot gaps that are critically sized for aerodynamic performance, and torsional twisting basically changes the Angle of Attack. I'm not going to act like I know how exactly each of those things affect performance. We needed to understand exactly what loads were hitting where, and how twisting would kill our aerodynamic efficiency/goals."
        },
        {
          title: "The Methodology: The FSI Loop",
          layout: "subsections",
          intro: "To build a realistic physics model, I implemented a Fluid-Structure Interaction (FSI) workflow that could be used iteratively. We ran CFD in Star-CCM+ with all elements and endplates to get a baseline, then exported the pressure field data as a .csv file.",
          subsections: [
            {
              title: "Pressure Mapping",
              content: "I imported this into Ansys, defined the composite stack-ups using ACP (Ansys Composite PrepPost), and used pinball regions to map the pressures perfectly onto the skin.",
              image: "/projects/fsae/Pressure field map.png"
            },
            {
              title: "Boundary Conditions",
              content: "For a sanity check, I checked if the fixed-joint reaction forces equaled the CFD's total downforce and drag outputs. Finally, I solved the high-fidelity structural mesh, exported the deformed geometry, and ran it back through CFD to examine the actual C_l loss.",
              image: "/projects/fsae/Boundary conditions for sizing the parts.png"
            }
          ]
        },
        {
          title: "Iteration & The Sweet Spot",
          layout: "text",
          content: "Considering we had a strict 7.5 lb mass limit for the entire assembly, I essentially tested about 6 different distinct internal architectures. I evaluated a 2 spar in each mainplane setup, a 1 spar in each mainplane, a complex cell-structure that was inspired from a youtube video (which was scrapped due to manufacturing concerns), and then with different material choices. We continuously tweaked the ply schedules, part by part, testing stiffness in different orientations to resist torsional twist vs flexural bending until we found the sweet spot. The output and design rationale for each part is mentioned below."
        },
        {
          title: "The Optimal Output",
          layout: "table",
          table: {
            headers: ["Component", "Material", "Ply Schedule", "Design Rationale"],
            rows: [
              ["Mainplane 1", "Twill weave", "[45, -45]", "Torsional Stiffness"],
              ["Mainplane 2", "Twill weave", "[45, -45]", "Torsional Stiffness"],
              ["Elements", "Twill weave", "[0, 0]", "Flexural Rigidity"],
              ["Spars", "Twill weave", "[0, 0, 0, 0, 0]", "Flexural Rigidity"],
              ["Ribs", "Twill weave", "1C1 [0.125\" core]", "Buckling Resistance"],
              ["Mounting Inserts", "6061 Al", "", "Buckling Resistance"],
              ["Endplates", "Twill weave", "[0, -30]", "Flexural Rigidity"]
            ]
          }
        },
        {
          title: "Results",
          layout: "checklist",
          image: "/projects/fsae/Final deflection at 95 mph aero loads.png",
          checklist: [
            "We hit a final weight of just 5.86 lbs (including the aluminum struts), destroying the 7.5 lb constraint.",
            "Kept wing deflection under 0.5\" and strut deflection under 0.1\" at 95 mph.",
            "Successfully limited the Coefficient of Lift (Cl) loss to an acceptable margin.",
            "Established a validated FSI workflow connecting Star-CCM+ directly to Ansys ACP."
          ]
        }
      ]
    },
    {
      id: "fsae-internal-structures",
      title: "FSAE | INTERNAL STRUCTURES & PACKAGING",
      hideFromMain: true,
      role: "Structures Engineer",
      date: "Aug 2024 – Present",
      image: "/projects/fsae/Photo of internal structure and Struts layout.png",
      tags: ["Design for Manufacturing", "Waterjet Flat-Stock", "Composites", "Crash Survivability"],
      overview: "Engineering the front wing's internal skeleton for manufacturability by replacing complex 3D I-beams with waterjet-cut flat-stock and self-aligning cross-lap joints, while selecting Corecell M80 to survive cone strikes.",
      photos: [
        { src: "/projects/fsae/Photo of internal structure and Struts layout.png", caption: "Final internal structure layout with struts" },
        { src: "/projects/fsae/car-assembly.jpg", caption: "The car being assembled in the shop" },
        { src: "/projects/fsae/Boundary conditions for sizing the parts.png", caption: "Boundary conditions for sizing the parts" }
      ],
      journal: [
        {
          title: "Failure Analysis: The Need for Internal Structure",
          layout: "subsections",
          intro: "To understand the necessity of a robust internal skeleton, I analyzed the failure points on last year's front wing. The absence of proper internal structuring led directly to catastrophic skin failure.",
          subsections: [
            {
              title: "Previous Manufacturing Flaws",
              content: "The original design featured relief cuts in the carbon fiber front wing that acted as stress concentrations. These cuts were made to ease manufacturing, but they created significant weak points in the skin.",
              image: "/projects/fsae/Relief cuts made in front wing which could be a possible failure point from last year.png"
            },
            {
              title: "The Y-Axis Moment Failure",
              content: "Further analysis revealed that the wing cracked because there was no internal spar designed to handle the moment in the Y-axis. The out-of-plane forces from steering and cone strikes overloaded the skin plies, which naturally failed at the manufacturing relief cuts.",
              image: "/projects/fsae/Rendition of why the failure point was possibly loaded and cracked because there was nothing to deal with the moment in y axis.png"
            }
          ]
        },
        {
          title: "The Problem: The Tolerance Stack-Up",
          layout: "text",
          content: "Under extreme aerodynamic stresses, a wing's internal ribs and spars are what hold it together. Previously, these were complex 3D structures (curved I-beams and C-channels). These were structurally efficient but a nightmare to manufacture and even worse to assemble. They required separate molds, were extremely difficult to layup perfectly against sweeping wing contours, and depended on sequential placement during bonding. This caused massive tolerance stack-up issues. Thermal expansion, imperfect prep/layup, and excessive bonding surfaces meant using heavy adhesive and poly-filler to fix gaps, destroying our weight margins.",
          image: "/projects/fsae/Boundary conditions for sizing the parts.png"
        },
        {
          title: "The DFM Pivot: Flat-Stock & Slots",
          layout: "text",
          content: "To guarantee we could reliably hit our tight production timeline, I pivoted the internal spars and ribs to 2D flat-stock carbon fiber plates. While curved I-beams are stiff, flat plates don't require molds, they are laid up flat on a table, which completely significantly reduces scrap rate and other massive layup complexity. The only curved regions were precision-cut using a waterjet so you know they are true to CAD. To compensate for the slight drop in geometric stiffness against the curved alternatives, we implemented a 5 ply spar."
        },
        {
          title: "The Assembly Solution",
          layout: "text",
          content: "To fix the sequential tolerance stack-up problem, I engineered an interlocking cross-lap joint system. The flat-stock ribs and spars featured opposing slots that acted as a self-aligning mechanical fixture. Instead of parts stacking sequentially and pushing tolerances outward, every rib effectively 'clips' mathematically onto the main continuous spar. We used Hysol EA 120 structural adhesive to lock the joints—cutting down layup and assembly time significantly.",
          image: "/projects/fsae/cross_lap_joint.gif"
        },
        {
          title: "Crash Survivability: Corecell M80",
          layout: "text",
          content: "The front wing leading edge is the first point of impact. In the past, brute-force carbon or brittle foams would shatter completely on a cone strike, and Kevlar would frill, making surface repairs impossible. After evaluating 13 different foam options for the leading-edge core, I selected Corecell M80. It possesses a 40% elongation at break, meaning its compressive and absorption strength allow it to deform and absorb energy plastically beneath the carbon skins rather than fracturing catastrophically."
        }
      ]
    },
    {
      id: "fsae-manufacturing",
      title: "FSAE | MANUFACTURING & DFM",
      hideFromMain: true,
      role: "Structures Engineer",
      date: "Aug 2024 – Present",
      image: "/projects/fsae/car-assembly.jpg",
      tags: ["Design for Manufacturing", "Composites Fabrication", "Assembly"],
      overview: "Bridging the gap between complex CAD assemblies and physical reality through intelligent design for manufacturability.",
      photos: [
        { src: "/projects/fsae/car-assembly.jpg", caption: "The car being assembled in the shop" },
        { src: "/projects/fsae/working like a team for a big layup!.jpg", caption: "Team collaborating on a large composite layup" },
        { src: "/projects/fsae/Front Wing Layup.jpg", caption: "Front wing layup process" },
        { src: "/projects/fsae/Undertray + Front wing bagged and laid up.jpg", caption: "Undertray and front wing bagged under vacuum" },
        { src: "/projects/fsae/Peel ply on Front wing layup.jpg", caption: "Applying peel ply during the front wing layup" },
        { src: "/projects/fsae/Undertray laid up.jpg", caption: "The undertray component laid up" }
      ],
      journal: [
        {
          title: "The Problem",
          layout: "text",
          content: "Our 21-element aero package build relied heavily on \"tribal knowledge\" held by a few senior members. With a 9-member team of varying experience, this lack of documentation led to high scrap rates and inconsistent part weights. We also spotted severe \"bridging\" defects (resin-rich zones lacking fiber) on the leading edge radii of cured parts in split molds.",
          image: "/projects/fsae/Peel ply on Front wing layup.jpg"
        },
        {
          title: "The Goal",
          layout: "text",
          content: "Standardize the fabrication process by moving from a \"craft\" mindset to a \"production\" mindset, ensuring Part #1 and Part #21 are identical in quality while maximizing carbon fiber utilization.",
          image: "/projects/fsae/Undertray laid up.jpg"
        },
        {
          title: "The Approach",
          layout: "text",
          content: "I developed a comprehensive Standard Operating Procedure (SOP) manual on the team wiki, integrating CAD dimensions, step-by-step checklists, and high-resolution bagging photos. To fix the leading edge bridging, I performed a Root Cause Analysis and identified that standard bagging didn't account for the mold's vertical \"draw\". I updated the SOP to mandate pleats (intentional bag slack) into deep crevices. Finally, I utilized deepnest.io to automate ply nesting, breaking large 45° plies into smaller sections that were butt-joined to eliminate relief cuts and waste.",
          image: "/projects/fsae/Front Wing Layup.jpg"
        },
        {
          title: "The Result",
          layout: "checklist",
          intro: "The SOP and optimization efforts fundamentally changed our shop floor operations.",
          checklist: [
            "Eliminated tribal knowledge, allowing junior members to reliably build flight-grade components.",
            "Reduced total prepreg material requirement from 200 ft to just 60 ft — a 70% material savings.",
            "Achieved a ~65% carbon utilization rate using digital nesting.",
            "Eliminated leading-edge bridging defects entirely across the remaining 20 aero elements."
          ]
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
      tags: ["Analytical Modeling", "Design Validation", "Python", "CATIA V5", "Automotive"],
      photos: [
        { src: "/projects/force-motors-crankshaft/Comparison of Assembly vs Individually Balanced Crankshaft.png", caption: "Assembly vs. Individually Balanced Crankshaft comparison" },
        { src: "/projects/force-motors-crankshaft/Crank Pin Dimensions.png", caption: "Crank pin dimensions derived from stress analysis" },
        { src: "/projects/force-motors-crankshaft/Crank Web Dimensions.png", caption: "Crank web geometry under compressive loads" },
        { src: "/projects/force-motors-crankshaft/Main Shaft Dimensions.png", caption: "Main shaft requirements for torsional stress resistance" },
        { src: "/projects/force-motors-crankshaft/Table 6 Total Remaining Unbalance.png", caption: "Final balancing results — 58.63 g-mm residual unbalance" },
        { src: "/projects/force-motors-crankshaft/The UV Dye Penetrant Inspection showing the failure point.png", caption: "UV dye penetrant inspection showing the predicted failure point" }
      ],
      overview: "At Force Motors, I developed analytical frameworks to validate the design of a new individually-balanced 8-web crankshaft. My work focused on creating mathematical models for geometric constraints and balancing calculations, enabling design validation before physical prototyping.",
      description: [
        "Developed a mathematical framework to determine minimum safe dimensions for crankpins, webs, and shafts under peak combustion forces of 65.4 kN.",
        "Built a physics-based balancing model to quantify system unbalance and design counterweights, achieving a 49.6% balancing rate with only 58.63 g-mm residual unbalance.",
        "Generated fatigue test parameters for physical validation at ARAI, defining load amplitudes and frequencies to simulate engine operation."
      ],
      journal: [
        {
          title: "Design Goals & Constraints",
          layout: "text",
          content: "The primary objective was to transition from assembly balancing to individual (internal) balancing. This shift aimed to eliminate the internal torsional flex inherent in assembly-balanced systems and allow for component interchangeability.\n\nThe design had to adhere to strict mechanical constraints defined by the material properties of 38MnVs6 High-Strength Steel:\n\n1. Geometric Limits — The crankpin and web dimensions were constrained by bearing pressure limits (10-12 N/mm²) and bending stress thresholds.\n\n2. Manufacturing Constraints — The design had to accommodate the forging process used at Force Motors, ensuring proper grain flow and fatigue resistance.\n\n3. Performance Goal — Achieve a balancing rate close to 50% to neutralize static and couple unbalance at the source.",
          image: "/projects/force-motors-crankshaft/Comparison of Assembly vs Individually Balanced Crankshaft.png"
        },
        {
          title: "Geometric Design Framework",
          layout: "subsections",
          intro: "I developed a mathematical framework to determine the minimum safe dimensions for critical features. This involved calculating stress vectors under peak combustion forces of 65.4 kN.",
          subsections: [
            {
              title: "Crank Pin Analysis",
              content: "Calculated minimum crankpin diameter based on allowable shear stress and bending moment from peak gas loads. The bearing pressure limits (10-12 N/mm²) constrained the journal-to-web ratio.",
              image: "/projects/force-motors-crankshaft/Crank Pin Dimensions.png"
            },
            {
              title: "Crank Web Analysis",
              content: "Determined crank web thickness required to withstand compressive loads at Top Dead Center. The web must transfer the full gas force from the crankpin to the main journals without yielding.",
              image: "/projects/force-motors-crankshaft/Crank Web Dimensions.png"
            },
            {
              title: "Main Shaft Analysis",
              content: "Modeled the main shaft requirements to resist torsional stress when the connecting rod is at a 90-degree angle — the position of maximum torque transfer.\n\nThe geometric framework confirmed that the current design (150 bar peak pressure) fell within the safe regions for bending, shear, and compressive stress.",
              image: "/projects/force-motors-crankshaft/Main Shaft Dimensions.png"
            }
          ]
        },
        {
          title: "Analytical Balancing Model",
          layout: "text",
          content: "I built a physics model to quantify the system's inherent unbalance and design the necessary counterweights.\n\n1. Extracted Mass and Center of Gravity (CoG) data for every component directly from CATIA.\n\n2. Resolved the static and couple unbalance into X and Y vector components.\n\n3. Iteratively designed counterweights to create opposing moments, targeting a net-zero unbalance state.\n\nThe pseudocode below shows the balancing rate calculation logic:"
        },
        {
          title: "Balancing Algorithm",
          layout: "code",
          language: "python",
          code: "def calculate_balancing_rate(components, counterweights):\n    \"\"\"\n    Calculates the balancing rate by comparing original vs. residual moments.\n    Inputs extracted from CATIA models (Mass, Radius, Angle, Axial_Dist).\n    \"\"\"\n    \n    # 1. Calculate Inherent Unbalance (Static & Couple)\n    # Static = m * r (Force)\n    # Couple = m * r * l (Moment)\n    \n    total_static_x = 0\n    total_static_y = 0\n    original_moment_sum = 0\n    \n    for part in components:\n        # Resolve forces into vectors\n        fx = part.mass * part.radius * cos(part.angle)\n        fy = part.mass * part.radius * sin(part.angle)\n        \n        # Sum forces (Static Unbalance)\n        total_static_x += fx\n        total_static_y += fy\n        \n        # Sum moments (Couple Unbalance)\n        original_moment_sum += sqrt((fx * part.axial_dist)**2 + (fy * part.axial_dist)**2)\n\n    # 2. Apply Counterweights (Opposing Force)\n    residual_moment_sum = original_moment_sum\n    \n    for cw in counterweights:\n        # Counterweights provide negative (opposing) vectors\n        cw_moment = cw.mass * cw.radius * cw.axial_dist\n        residual_moment_sum -= cw_moment\n\n    # 3. Compute Balancing Rate\n    # Target is 50% for optimal individual balancing\n    balancing_rate = (1 - (residual_moment_sum / original_moment_sum)) * 100\n    \n    return balancing_rate\n\n# Result obtained from model: 49.6%"
        },
        {
          title: "Results: Final Unbalance Values",
          layout: "table",
          table: {
            headers: ["Measurement", "X (g-mm)", "Y (g-mm)", "Resultant (g-mm)"],
            rows: [
              ["Static Unbalance", "12.80", "-57.22", "58.63"],
              ["Couple Unbalance", "-20.36", "153.42", "154.77"]
            ]
          }
        },
        {
          title: "Results Summary",
          layout: "checklist",
          checklist: [
            "Balancing Rate: 49.6% — near the optimal 50% target for individual balancing",
            "Static Unbalance Resultant: 58.63 g-mm — well below the 250 g-mm industry tolerance",
            "Couple Unbalance Resultant: 154.77 g-mm — within acceptable limits",
            "Design Robustness: All dimensions fell within safe stress limits for 150 bar operating pressure"
          ]
        },
        {
          title: "Physical Validation",
          layout: "text",
          content: "Physical testing was conducted at ARAI (Automotive Research Association of India) to validate the analytical predictions.\n\nMethod: A high-frequency pulsator subjected the crankpins to alternating tensile (18 kN) and compressive (55 kN) loads.\n\nDurability: The prototype survived the target of 5 million cycles at a Factor of Safety (FOS) of 2.5.\n\nFailure Correlation: Samples tested at an extreme FOS of 3.0 failed exactly as predicted by our FEA models, confirming the accuracy of the simulation tools.",
          image: "/projects/force-motors-crankshaft/The UV Dye Penetrant Inspection showing the failure point.png"
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
        { src: "/projects/conrod-optimization/Optimized connecting Rod Geom cross-sectional geometry relation for H beam config.png", caption: "H-beam geometry for comparative study" },
        { src: "/projects/conrod-optimization/top 3 quarter render optimized conrod.png", caption: "CAD render: Optimized I-beam shank (3/4 view)" },
        { src: "/projects/conrod-optimization/optimized conrod front view.png", caption: "CAD render: Front orthographic view" },
        { src: "/projects/conrod-optimization/Render 3 quarter of optimized design.png", caption: "CAD render: Alternate 3/4 view" }
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
        },
        {
          title: "CAD Representation: From Code to Geometry",
          layout: "subsections",
          intro: "To visualize the optimized design, I translated the numerical output from my Python optimization code into a parametric CAD model. The shank geometry was modeled in Fusion 360, with each cross-section defined by the optimizer's output dimensions.",
          subsections: [
            {
              title: "3/4 View — Optimized I-Beam Shank",
              content: "The characteristic I-beam profile is visible here — wide flanges at top and bottom provide the area moment of inertia needed to resist buckling, while the thin web minimizes mass. Notice how the cross-section tapers smoothly from the small end (top) to the big end (bottom).",
              image: "/projects/conrod-optimization/top 3 quarter render optimized conrod.png"
            },
            {
              title: "Front View — Cross-Section Evolution",
              content: "This orthographic view clearly shows the concave curvature of the flanges along the shank length. The optimizer determined that material is most efficiently placed at the ends of the shank, where bending moments are highest under inertial loading.",
              image: "/projects/conrod-optimization/optimized conrod front view.png"
            },
            {
              title: "Alternate 3/4 View",
              content: "The smooth loft between varying I-beam cross-sections demonstrates the monotonicity constraint in action — no undercuts or sudden transitions that would complicate forging or create stress concentrations.",
              image: "/projects/conrod-optimization/Render 3 quarter of optimized design.png"
            }
          ]
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
    "PTC Creo/Pro Engineer": ["fsae-hub", "fsae-struts", "fsae-internal-structures", "fsae-manufacturing", "gala-precision-springs"],
    "Siemens NX": ["asme-autonomous-car"],
    "SolidWorks": ["composites-lab", "3d-printed-clock", "me170-footrest"],
    "CATIA V5": ["force-motors-crankshaft", "force-motors-cad-migration"],
    "AutoCAD": ["composites-lab", "3d-printed-clock"],
    "Fusion360": ["conrod-optimization", "3d-printed-clock", "me170-footrest"],
    "Ansys Mechanical": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing", "gala-precision-springs"],
    "Abaqus": [],
    "MATLAB": ["conrod-optimization", "asme-autonomous-car"],
    "Python": ["force-motors-crankshaft", "conrod-optimization", "asme-autonomous-car"],
    "Microsoft Office": ["fsae-hub", "fsae-struts", "fsae-internal-structures", "fsae-manufacturing", "force-motors-crankshaft", "force-motors-cad-migration", "gala-precision-springs", "uiuc-course-support", "me170-footrest"],
    "GD&T": ["fsae-hub", "fsae-internal-structures", "fsae-manufacturing", "force-motors-cad-migration", "me170-footrest"],
    "3D Printing/Rapid Prototyping": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-manufacturing", "3d-printed-clock"],
    "Product Design": ["me170-footrest", "3d-printed-clock"]
  } as Record<string, string[]>,
  // Maps certifications to project IDs
  certificationProjects: {
    "CNC/Waterjet": ["fsae-hub", "fsae-struts", "fsae-internal-structures", "fsae-manufacturing"],
    "UTM": ["fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing", "composites-lab"],
    "Power tools": ["fsae-hub", "fsae-struts", "fsae-internal-structures", "fsae-manufacturing", "composites-lab", "gala-precision-springs"]
  } as Record<string, string[]>
};

