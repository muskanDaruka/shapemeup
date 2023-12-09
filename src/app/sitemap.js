const siteUrl = "http://localhost:3000"
export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/exercises`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/classes`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/coaches`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
    },
  ]
}