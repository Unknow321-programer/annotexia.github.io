import { blogs } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://www.annotexia.com";

  const staticPages = [
    {
      url: baseUrl,
    },

    {
      url: `${baseUrl}/about`,
    },

    {
      url: `${baseUrl}/services`,
    },

    {
      url: `${baseUrl}/industries`,
    },

    {
      url: `${baseUrl}/blog`,
    },

    {
      url: `${baseUrl}/careers`,
    },

    {
      url: `${baseUrl}/contact`,
    },

    {
      url: `${baseUrl}/privacy-policy`,
    },

    {
      url: `${baseUrl}/terms-and-conditions`,
    },
  ];

  const industriesPages = [
    {
      url: `${baseUrl}/industries/sports-analytics`,
    },
    {
      url: `${baseUrl}/industries/healthcare-ai`,
    },
    {
      url: `${baseUrl}/industries/autonomous-vehicles`,
    },
    {
      url: `${baseUrl}/industries/computer-vision`,
    },
    {
      url: `${baseUrl}/industries/agriculture`,
    },
    {
      url: `${baseUrl}/industries/drone-imagery`,
    },
    {
      url: `${baseUrl}/industries/retail-ecommerce`,
    },
    {
      url: `${baseUrl}/industries/industrial-ai`,
    },
  ];

  const servicesPages = [
    {
      url: `${baseUrl}/services/image-annotation`,
    },
    {
      url: `${baseUrl}/services/video-annotation`,
    },
    {
      url: `${baseUrl}/services/physical-ai-egocentric-video-collection`,
    },
    {
      url: `${baseUrl}/services/text-annotation`,
    },
    {
      url: `${baseUrl}/services/audio-annotation`,
    },
    {
      url: `${baseUrl}/services/data-labeling`,
    },
    {
      url: `${baseUrl}/services/lidar-annotation`,
    },
  ]
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
  }));

  return [...staticPages, ...blogPages, ...industriesPages, ...servicesPages];
}
