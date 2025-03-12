export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Ecommerce Executive",
    company: "Shopperbeats Technology",
    dates: "Sep/2022 - Mar/2023",
    description: [
      "Collaborated with cross-functional teams to upgrade product presentations across e-commerce platforms, enhancing user experience and driving business growth.",
      "Analyzed sales data and adjusted pricing strategies using Excel to improve product visibility and boost organic traffic, resulting in increased sales performance",
    ]
  },
  {
    title: "Ecommerce Executive",
    company: "Elite Decor Pvt. Ltd.",
    dates: "Feb/2022 - Sep/2022",
    description: [
      "Optimized Story@Home brand pages and product listings on Amazon, enhancing branding, user experience, and sales performance.",
      "Managed product variations (size, color, pack) and used Excel for FBA distribution to ensure accurate pricing, profitability, and efficient inventory allocation.",
    ]
  },
  {
    title: "Category Manager",
    company: "EARTHENCART Retail LLP",
    dates: "Sep/2020 - Sep/2021",
    description: [
      "Developed internal tools to optimize e-commerce operations and collaborated with back-end developers.",
      "Designed mobile app wireframes focusing on UI/UX and performance.",
    ]
  },
  {
    title: "Admin Manager",
    company: "KISANeSTORE Pvt. Ltd.",
    dates: "Oct/2015 - Sep/2020",
    description: [
      "Managed IT infrastructure, website maintenance, product visibility, and network troubleshooting.",
      "Managed the customer support department, leading and training staff on providing excellent service to farmers, ensuring effective communication and problem resolution.",
    ]
  }
];