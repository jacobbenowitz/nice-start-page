

export const buildLinksProps = links => {
  let sections = {}
  links.forEach(link => {
    if (link.section in sections) {
      sections[link.section].links.push({
        title: link.title,
        url: link.url,
        date: link.date,
        metaData: link.metaData
      })
    } else {
      sections[link.section] = {
        label: link.section,
        links: [
          {
            title: link.title,
            url: link.url,
            date: link.date,
            metaData: link.metaData
          }
        ]
      }
    }
  })
  return Object.values(sections)
}