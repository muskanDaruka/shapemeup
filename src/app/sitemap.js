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

// function generateSiteMap(post) {
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

//      ${post
//       .map(({ id }) => {
//         return `
//        <url>
//            <loc>${`${siteUrl}/${id}`}</loc>
//        </url>
//      `;
//       })
//       .join('')}
//    </urlset>
//  `;
// }

// function SiteMap() { }

// export async function getServerSideProps({ res }) {
//   const request = await fetch(`${siteUrl}/blogs/_id`);
//   const posts = await request.json();

//   const sitemap = generateSiteMap(posts);

//   res.setHeader('Content-Type', 'text/xml');
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }
// export default SiteMap;