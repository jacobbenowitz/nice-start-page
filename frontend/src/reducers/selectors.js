// links = [
//   {
//     label: "01"
//     links: [{… }, {… }]
//   }
// ]

// missing second link in user.layout (linkId)
export const buildLinksProps = (links = {}, layout = {}) => {
  let sections = []
  Object.keys(layout).forEach(key => {
    let section = {};
    let sectionLinks = layout[key].links;
    section.label = key;
    section.sectionIdx = layout[key].sectionIdx
    section.links = Object.keys(sectionLinks).map(linkId => {
      return {
        ...links[linkId],
        linkIdx: sectionLinks[linkId]
      }
    })
    sections.push(section)
  })
  return sortByIdx(sections)
}

const sortByIdx = (sections) => {
  return sections.map(section => {
    section.links = section.links.sort((link1, link2) => {
      if (link1.linkIdx < link2.linkIdx) return -1;
      if (link2.linkIdx > link2.linkIdx) return 1;
      return 0;
    })
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