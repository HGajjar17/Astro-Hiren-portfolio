export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
    {
    title: "Geek Squad Agent, Store Technical Service Representative",
    company: "Best Buy Canada / Geek Squad",
    dates: "Aug 2025 - Present",
    description: [
      "Delivered front-line technical support for computer setup, diagnostics, and repairs, resolving 
hardware/software issues to restore functionality and minimize downtime.",

      "Guided customers through personalized tech solutions by assessing needs, configuring systems, and 
recommending appropriate devices, ensuring improved user satisfaction.",

      "Trained customers on safe and efficient technology usage, strengthening digital confidence and 
reducing repeat support requests."
    ]
  },
  {
    title: "Shopify CMS & E-commerce Product Specialist",
    company: "Shopperbeats Technology",
    dates: "Sep 2022 - Mar 2023",
    description: [
      "Managed global product listings across Shopify for brands in Australia, Canada, and the USA.",
      "Optimized SEO, metadata, and variant mapping for enhanced storefront UX and backend accuracy.",
      "Handled imports from vendor portals and ensured structured layouts for categories and collections."
    ]
  },
  {
    title: "Amazon Product Listings Associate",
    company: "Elite Decor Pvt. Ltd. (Story@Home)",
    dates: "Feb 2022 - Sep 2022",
    description: [
      "Created variation listings using Amazon flat files, improving catalog structure and discoverability.",
      "Optimized product titles, bullet points, and images to increase search ranking and conversion.",
      "Resolved ASIN suppressions and storefront inconsistencies across devices."
    ]
  },
  {
    title: "Category Manager (Web & Content Operations)",
    company: "EARTHENCART Retail LLP",
    dates: "Sep 2020 - Sep 2021",
    description: [
      "Conducted UX analysis and created wireframes in Figma for product and checkout flows.",
      "Collaborated cross-functionally to finalize responsive UI prototypes for web and mobile.",
      "Trained vendors on CMS operations for content uploads and layout optimization."
    ]
  },
  {
    title: "Web Layout & CMS Coordinator (Admin Manager)",
    company: "KISANeSTORE Pvt. Ltd.",
    dates: "Oct 2015 - Sep 2020",
    description: [
      "Led CMS layout design for banners, carousels, and category structures on e-commerce storefront.",
      "Managed hundreds of vendor product uploads with consistent SEO, pricing, and imagery updates.",
      "Maintained internal IT infrastructure and trained customer service teams on CMS workflows."
    ]
  }
];
