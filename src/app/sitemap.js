import { blogs } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://www.annotexia.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },

    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  const industriesPages = [
    {
      url: `${baseUrl}/industries/sports-analytics`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/healthcare-ai`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/autonomous-vehicles`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/computer-vision`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/agriculture`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/drone-imagery`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/retail-ecommerce`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/industrial-ai`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];

  const servicesPages = [
    {
      url: `${baseUrl}/services/image-annotation`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/video-annotation`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/text-annotation`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/audio-annotation`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/data-labeling`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/lidar-annotation`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ]
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...industriesPages, ...servicesPages];
}