export const slugify = (name: string) => {
  const nameFormatted = name
    .replace(/([A-Z])/g, '-$1')
    .trim()
    .toLowerCase()

  return nameFormatted.startsWith('-') ? nameFormatted.substr(1) : nameFormatted
}
