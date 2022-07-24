

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
  let sectionArray = Object.values(sections)
  return sortByIdx(sectionArray)
}

const sortByIdx = (sections) => {
  return sections.map(section => {
    console.log('pre-sort', section.links)
    section.links = section.links.sort((link1, link2) => {
      if (link1.linkIdx < link2.linkIdx) return -1;
      if (link2.linkIdx > link2.linkIdx) return 1;
      return 0;
    })
    console.log('post-sort', section.links)
    return section;
  })
}