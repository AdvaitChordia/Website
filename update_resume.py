import sys

def main():
    file_path = r"c:\Users\advai\Website\src\data\resume.ts"
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_str = '    {\n      id: "fsae-front-wing",'
    end_str = '    },\n    {\n      id: "force-motors-crankshaft",'
    
    if start_str not in content:
        print("start_str not found")
        return
    if end_str not in content:
        print("end_str not found")
        return
        
    start_idx = content.find(start_str)
    end_idx = content.find(end_str)
    
    # The replacement string
    replacement = """    {
      id: "fsae-hub",
      title: "ILLINI MOTORSPORTS | VEHICLE ENGINEERING",
      role: "Front Wing Structures Lead",
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
      image: "/projects/fsae/Top Opt struts.png",
      tags: ["Topology Optimization", "FEA", "Anisotropy Analysis"],
      overview: "A deep dive into replacing failure-prone CFRP mounting struts with topology-optimized aluminum counterparts. This project highlights failure analysis, anisotropic material behavior, and mass optimization.",
      photos: [
        { src: "/projects/fsae/Top Opt struts.png", caption: "Topology-optimized dual-mainplane mounting struts" },
        { src: "/projects/fsae/Only mainplane 2 mounting struts.png", caption: "FEA model of strut loads" }
      ],
      journal: [
        {
          title: "Failure Analysis: The CFRP Struts",
          layout: "text",
          content: "The previous iteration of the front wing mounting struts failed drastically. When the wing experienced an out-of-plane load (such as hitting a cone during an autocross event), the Nomex core in the CFRP struts failed in shear. Carbon Fiber Reinforced Polymers (CFRP) are highly anisotropic, meaning their strength heavily depends on the direction of the fibers. While exceptional under tensile and compressive loads along the fiber axis, they perform poorly when subjected to out-of-plane shear loads compared to isotropic materials like Aluminum."
        },
        {
          title: "The Shift to Aluminum",
          layout: "problem-solution",
          items: [
            {
              problem: "Catastrophic Shear Failure",
              idea: "Reinforce the CFRP struts with more plies or a denser core?",
              solution: "Redesign the struts using Aluminum.",
              rationale: "Aluminum's isotropic behavior ensures predictable failure modes and exceptional resistance to out-of-plane shear loads that destroyed the anisotropic CFRP parts."
            }
          ]
        },
        {
          title: "Mass Optimization",
          layout: "text",
          content: "Switching from CFRP to Aluminum initially introduced a significant weight penalty. However, because our entire aero assembly was well below the overall mass target, we had the luxury to prioritize reliability over extreme weight savings. Furthermore, we didn't just accept the weight penalty. By running extensive topology optimization on the Aluminum design to remove material where stress was low, we managed to drop the weight of the Aluminum struts by 58% compared to the unoptimized baseline, resulting in a part that was both infinitely more reliable and highly competitive on the scale."
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
      tags: ["FEA - Ansys Mechanical", "Aero-elasticity", "Structural Optimization"],
      overview: "Analyzing the deformation of the front wing under extreme aerodynamic loads, mitigating the L⁴ scaling problem on a 50\\" span mainplane.",
      photos: [
        { src: "/projects/fsae/Final deflection at 95 mph aero loads.png", caption: "FEA results: Final deflection under 95 mph aero loads" },
        { src: "/projects/fsae/FEA setup photo intricacy.png", caption: "Complex FEA mesh & boundary conditions setup" }
      ],
      journal: [
        {
          title: "The Aero-Elasticity Challenge",
          layout: "text",
          content: "I ran FEA on the new airfoil geometry with a 3-ply schedule to understand deformation behavior under high aerodynamic loads.\\n\\nKey Finding: Extreme spanwise deformation. The first mainplane was acting like a simply supported beam with a distributed load. The maximum deflection scales as L⁴ (where L ≈ 50\\" is the span between the mounting points). If the wing bowed too much under the 95 mph aero loads, it would deviate from the designed airfoil profile and destroy the aerodynamic efficiency.",
          image: "/projects/fsae/Only mainplane 2 mounting struts.png"
        },
        {
          title: "The Dual-Mainplane Mounting Decision",
          layout: "problem-solution",
          items: [
            {
              problem: "Extreme Spanwise Bowing",
              idea: "Mount struts only on the first mainplane (legacy weight saving method).",
              solution: "Switch to a dual-mainplane mounting strut system.",
              rationale: "By mounting the struts to multiple points effectively halving the unsupported span, the L⁴ deflection curve was mathematically crushed, reducing total deformation dramatically."
            }
          ]
        },
        {
          title: "Final Validation",
          layout: "checklist",
          checklist: [
            "Surface deflection maintained below 0.1\\" under 95 mph aero loads (Goal: ≤0.125\\")",
            "Spanwise bowing eliminated via dual-point mounting",
            "Target natural frequency achieved (≥3× dominant road input)",
            "All safety margins positive under combined inertial, aero, and bump loading"
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
      tags: ["Structural Design", "Energy Absorption", "Packaging"],
      overview: "Developing the complex internal skeleton of the front wing to survive cone strikes while maintaining aerodynamic profiles.",
      photos: [
        { src: "/projects/fsae/Photo of internal structure and Struts layout.png", caption: "Final internal structure layout with struts" },
        { src: "/projects/fsae/car-assembly.jpg", caption: "The car being assembled in the shop" }
      ],
      journal: [
        {
          title: "Internal Structure Strategy",
          layout: "text",
          content: "The wing's internal structure had to absorb inertial loading, aero forces, and direct cone strikes. We evaluated 13 foam options (Rohacell, Corecell, Gurit PVC) to find a solution capable of conforming to our complex geometry.\\n\\nDecision: Selected Corecell M80 (3mm) for the leading edge core.\\n\\nReasoning: Unlike honeycomb which cannot conform to tight airfoil radii, or brittle foams that shatter, Corecell offers high elongation at break (40%). This allows the leading edge to deform and absorb energy during a cone strike rather than fracturing. The ribs and spars were waterjet-cut from flat sandwich stock (Corecell + Carbon), enabling rapid manufacturing from single sheets.",
          image: "/projects/fsae/Photo of internal structure and Struts layout.png"
        },
        {
          title: "Solving the Shatter Problem",
          layout: "problem-solution",
          items: [
            {
              problem: "Catastrophic Wing Shatter",
              idea: "Use Carbon Fiber + Aramid (Kevlar) hybrid layups for the skins to prevent breaking?",
              solution: "Introduce the Corecell-lined leading edge with standardized carbon skins.",
              rationale: "Aramid fibers frill and fray after an impact, making it nearly impossible to sand down and achieve a clean, smooth aerodynamic geometry for repairs. Corecell absorbs the energy seamlessly under the skin."
            }
          ]
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
        { src: "/projects/fsae/car-assembly.jpg", caption: "The car being assembled in the shop" }
      ],
      journal: [
        {
          title: "Ply Schedule & Material Selection",
          layout: "table",
          table: {
            headers: ["Component", "Material", "Ply Schedule", "Design Rationale"],
            rows: [
              ["Mainplanes", "TC 250 Carbon", "[45, -45]", "Torsional Stiffness"],
              ["Spars & Elements", "TC 250 / 275", "[0, 0]", "Flexural Rigidity"],
              ["Mounting Inserts", "7075 Al", "1C1 [0.125\\" core]", "Buckling & Tear-out Resistance"],
              ["Endplates", "TC 250 Carbon", "[0, -30]", "Flexural Rigidity"]
            ]
          }
        },
        {
          title: "Assembly Methodology",
          layout: "text",
          content: "Our manufacturing approach involved adding a layer of peel ply on the inside of the cured skins to properly prep the surface for secondary bonding. The internal structures (ribs and spars) connect together using an interlocking lap-joint architecture, creating immense surface area for adhesive. The assembly sequence proceeds rigidly: skin layup -> cure -> peel interior -> bond continuous spars -> bond interlocking ribs -> final close-out."
        }
      ]
    },\n"""

    new_content = content[:start_idx] + replacement + content[end_idx:]
    
    # Update all references to the old fsae-front-wing in the mapping arrays
    new_content = new_content.replace('"fsae-front-wing"', '"fsae-hub", "fsae-struts", "fsae-aero-elasticity", "fsae-internal-structures", "fsae-manufacturing"')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced.")

if __name__ == "__main__":
    main()
