export default function robots() {
  return {
    rules: [
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "GoogleBot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },

      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.annotexia.com/sitemap.xml",
    Llms_txt: "https://www.annotexia.com/llms.txt",
  };
}