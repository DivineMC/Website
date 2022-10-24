module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Administration",
      collapsed: true,
      link: {
        type: "doc",
        id: "admin/README",
      },
      items: [
        {
          type: "category",
          label: "Getting Started",
          link: {
            type: "generated-index",
            slug: "/cat/admin/getting-started",
          },
          items: [
            "admin/getting-started/getting-started",
            "admin/getting-started/adding-plugins",
          ],
        },
        {
          type: "category",
          label: "How-to Guides",
          link: {
            type: "generated-index",
            slug: "/cat/admin/how-to-guides",
          },
          items: [
            "admin/how-to/update",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Misc",
      link: {
        type: "generated-index",
        slug: "/cat/misc/README",
      },
      items: [
        "misc/java-install",
        "misc/contact"
      ],
    },
  ],
}
