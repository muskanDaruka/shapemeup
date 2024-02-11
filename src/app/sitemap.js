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

// const siteUrl = "http://localhost:3000";

// function generateSiteMap(posts) {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//      <!--We manually set the two URLs we know already-->
//      <url>
//        <loc>${siteUrl}/</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/about-us</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/exercises</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/classes</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/coaches</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/products</loc>
//      </url>
//      <url>
//        <loc>${siteUrl}/blogs</loc>
//      </url>

//      ${posts
//       .map(({ id }) => {
//         return `
//        <url>
//            <loc>${`${siteUrl}/blogs/${id}`}</loc>
//        </url>
//      `;
//       })
//       .join('')} 
//    </urlset>
//  `;
// }

// function SiteMap() { }

// export async function getServerSideProps({ res }) {
//   try {
//     console.log('Fetching data from API...');
//     const request = await fetch(`${siteUrl}/api/blogs`);
//     const posts = await request.json();
//     console.log('Fetched data:', posts);

//     const sitemap = generateSiteMap(posts);

//     res.setHeader('Content-Type', 'text/xml');
//     res.write(sitemap);
//     res.end();

//     return { props: {} };
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//     res.status(500).send(`Error generating sitemap: ${error.message}`);
//     return { props: {} };
//   }
// }

// export default SiteMap;