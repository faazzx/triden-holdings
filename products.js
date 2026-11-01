// ------------------------------------------------------------------
// Triden product catalogue — edit products HERE, pages update themselves.
//
// Each item is either a plain string (placeholder image shown):
//     "Expansion joints"
// or an object when you have a real photo:
//     { name: "Expansion joints", image: "images/products/expansion-joints.jpg" }
// ------------------------------------------------------------------
const CATALOGUE = [
  {
    id: "civil",
    name: "Civil & Finishing",
    page: "products-civil.html",
    blurb: "Joints, flooring, doors, ceilings, waterproofing and site materials for building projects.",
    groups: [
      {
        name: "Joints, fire stopping & access",
        items: [
          "Expansion joints",
          "Control joints",
          "Fire barriers for expansion joints",
          "Fire stop sealants",
          "Access hatches",
          "Access panels"
        ]
      },
      {
        name: "Flooring",
        items: [
          "Vinyl flooring",
          "Rubber flooring",
          "Wooden flooring",
          "Carpets",
          "Entrance mats",
          "Raised access floor"
        ]
      },
      {
        name: "Doors, glazing & partitions",
        items: [
          "Steel & wooden doors",
          "Ballistic & bullet-proof doors",
          "Fire-glazed windows",
          "Partition systems",
          "Ironmongery",
          "Kitchen cabinets"
        ]
      },
      {
        name: "Ceilings & interiors",
        items: [
          "Ceilings — metal & acoustic",
          "Ceilings — wood",
          "Wallpapers",
          "Project furniture",
          "Acoustic underlay",
          "Structural vibration pads"
        ]
      },
      {
        name: "Protection & site materials",
        items: [
          "Waterproofing materials",
          "Insulation",
          "Polythene sheets",
          "Cover blocks",
          "Corner & wall guards, speed humps"
        ]
      }
    ]
  },
  {
    id: "mep",
    name: "MEP",
    page: "products-mep.html",
    blurb: "Sanitaryware, drainage, pipe supports, lighting and power for mechanical, electrical and plumbing works.",
    groups: [
      {
        name: "Plumbing, drainage & services",
        items: [
          "Sanitaryware",
          "Roof & floor drains",
          "Manhole covers",
          "Pipe supports",
          "Actuators",
          "Earthing"
        ]
      },
      {
        name: "Lighting & power",
        items: [
          "Light fittings",
          "Chandeliers",
          "Switches & sockets"
        ]
      }
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    page: "products-infrastructure.html",
    blurb: "Expansion joints, bridge bearings, geogrids, guard rails and bollards for roads, bridges and site safety.",
    groups: [
      {
        name: "Roads, bridges & site safety",
        items: [
          "Expansion joints",
          "Bridge bearings",
          "Geogrids",
          "Guard rails",
          "Bollards",
          "Cover blocks"
        ]
      }
    ]
  }
];
