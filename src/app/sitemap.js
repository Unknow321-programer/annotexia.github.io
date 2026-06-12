export default function sitemap() {
  const baseUrl = "https://www.annotexia.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/image-annotation`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/video-annotation`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/text-annotation`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/audio-annotation`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/data-labeling`,
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
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}