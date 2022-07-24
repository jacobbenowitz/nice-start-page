

export const buildLinksProps = links => {
  let sections = {}
  links.forEach(link => {
    if (link.section in sections) {
      sections[link.section].links.push(link)
    } else {
      sections[link.section] = {
        label: link.section,
        links: [link]
      }
    }
  })
  return sortByIdx(Object.values(sections))
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