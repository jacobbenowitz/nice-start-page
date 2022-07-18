

export const buildLinksProps = links => {
  let sections = {}
  links.forEach(link => {
    if (link.section in sections) {
      sections[link.section].links.push({
        title: link.title,
        url: link.url,
        date: link.date
      })
    } else {
      sections[link.section] = {
        label: link.section,
        links: [
          {
            title: link.title,
            url: link.url,
            date: link.date
          }
        ]
      }
    }
  })
  return Object.values(sections)
}