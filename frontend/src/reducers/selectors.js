// links = [
//   {
//     label: "01"
//     links: [{… }, {… }]
//   }
// ]

export const buildLinksProps = (links = {}, layout = {}) => {
  debugger
  let sections = []
  Object.keys(layout).forEach(key => {
    let section = {};
    let sectionLinks = layout[key].links;
    section.label = key;
    section.sectionIdx = layout[key].sectionIdx
    debugger
    section.links = Object.keys(sectionLinks).map(linkId => {
      debugger
      return {
        ...links[linkId],
        linkIdx: sectionLinks[linkId]
      }
    })
    sections.push(section)
  })
  debugger
  return sortByIdx(sections)
}

const sortByIdx = (sections) => {
  return sections.map(section => {
    section.links = section.links.sort((link1, link2) => {
      if (link1.linkIdx < link2.linkIdx) return -1;
      if (link2.linkIdx > link2.linkIdx) return 1;
      return 0;
    })
    debugger
    return section;
  })
}

// export const buildLinksProps = links => {
//   let sections = {}
//   links.forEach(link => {
//     if (link.section in sections) {
//       sections[link.section].links.push(link)
//     } else {
//       sections[link.section] = {
//         label: link.section,
//         links: [link]
//       }
//     }
//   })
//   return sortByIdx(Object.values(sections))
// }

// const sortByIdx = (sections) => {
//   return sections.map(section => {
//     section.links = section.links.sort((link1, link2) => {
//       if (link1.linkIdx < link2.linkIdx) return -1;
//       if (link2.linkIdx > link2.linkIdx) return 1;
//       return 0;
//     })
//     return section;
//   })
// }