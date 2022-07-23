

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
  return Object.values(sections)
}