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
          { name: "Expansion joints", image: "images/products/expansion-joints.svg" },
          { name: "Control joints", image: "images/products/control-joints.svg" },
          { name: "Fire barriers for expansion joints", image: "images/products/fire-barriers-for-expansion-joints.svg" },
          { name: "Fire stop sealants", image: "images/products/fire-stop-sealants.svg" },
          { name: "Access hatches", image: "images/products/access-hatches.svg" },
          { name: "Access panels", image: "images/products/access-panels.svg" }
        ]
      },
      {
        name: "Flooring",
        items: [
          { name: "Vinyl flooring", image: "images/products/vinyl-flooring.svg" },
          { name: "Rubber flooring", image: "images/products/rubber-flooring.svg" },
          { name: "Wooden flooring", image: "images/products/wooden-flooring.svg" },
          { name: "Carpets", image: "images/products/carpets.svg" },
          { name: "Entrance mats", image: "images/products/entrance-mats.svg" },
          { name: "Raised access floor", image: "images/products/raised-access-floor.svg" }
        ]
      },
      {
        name: "Doors, glazing & partitions",
        items: [
          { name: "Steel & wooden doors", image: "images/products/steel-wooden-doors.svg" },
          { name: "Ballistic & bullet-proof doors", image: "images/products/ballistic-bullet-proof-doors.svg" },
          { name: "Fire-glazed windows", image: "images/products/fire-glazed-windows.svg" },
          { name: "Partition systems", image: "images/products/partition-systems.svg" },
          { name: "Ironmongery", image: "images/products/ironmongery.svg" },
          { name: "Kitchen cabinets", image: "images/products/kitchen-cabinets.svg" }
        ]
      },
      {
        name: "Ceilings & interiors",
        items: [
          { name: "Ceilings — metal & acoustic", image: "images/products/ceilings-metal-acoustic.svg" },
          { name: "Ceilings — wood", image: "images/products/ceilings-wood.svg" },
          { name: "Wallpapers", image: "images/products/wallpapers.svg" },
          { name: "Project furniture", image: "images/products/project-furniture.svg" },
          { name: "Acoustic underlay", image: "images/products/acoustic-underlay.svg" },
          { name: "Structural vibration pads", image: "images/products/structural-vibration-pads.svg" }
        ]
      },
      {
        name: "Protection & site materials",
        items: [
          { name: "Waterproofing materials", image: "images/products/waterproofing-materials.svg" },
          { name: "Insulation", image: "images/products/insulation.svg" },
          { name: "Polythene sheets", image: "images/products/polythene-sheets.svg" },
          { name: "Cover blocks", image: "images/products/cover-blocks.svg" },
          { name: "Corner & wall guards, speed humps", image: "images/products/corner-wall-guards-speed-humps.svg" }
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
          { name: "Sanitaryware", image: "images/products/sanitaryware.svg" },
          { name: "Roof & floor drains", image: "images/products/roof-floor-drains.svg" },
          { name: "Manhole covers", image: "images/products/manhole-covers.svg" },
          { name: "Pipe supports", image: "images/products/pipe-supports.svg" },
          { name: "Actuators", image: "images/products/actuators.svg" },
          { name: "Earthing", image: "images/products/earthing.svg" }
        ]
      },
      {
        name: "Lighting & power",
        items: [
          { name: "Light fittings", image: "images/products/light-fittings.svg" },
          { name: "Chandeliers", image: "images/products/chandeliers.svg" },
          { name: "Switches & sockets", image: "images/products/switches-sockets.svg" }
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
          { name: "Expansion joints", image: "images/products/expansion-joints.svg" },
          { name: "Bridge bearings", image: "images/products/bridge-bearings.svg" },
          { name: "Geogrids", image: "images/products/geogrids.svg" },
          { name: "Guard rails", image: "images/products/guard-rails.svg" },
          { name: "Bollards", image: "images/products/bollards.svg" },
          { name: "Cover blocks", image: "images/products/cover-blocks.svg" }
        ]
      }
    ]
  }
];
