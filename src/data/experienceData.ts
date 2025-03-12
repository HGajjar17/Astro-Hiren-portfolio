export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Data Analyst",
    company: "Tech Solutions Inc.",
    dates: "01/2019 - 12/2022",
    description: [
      "Developed interactive Power BI dashboards to analyze business performance and customer trends.",
      "Automated ETL processes using Python and SQL to improve data processing efficiency by 40%.",
      "Collaborated with stakeholders to identify key performance metrics and optimize reporting strategies.",
      "Designed predictive models to forecast revenue and customer churn, providing actionable insights.",
      "Managed data extraction from multiple sources, including APIs, databases, and cloud storage.",
      "Presented analytical findings to executive teams, leading to data-driven decision-making."
    ]
  },
  {
    title: "Software Engineer",
    company: "Innovatech Solutions",
    dates: "03/2023 - Present",
    description: [
      "Developed full-stack web applications using React, Node.js, and MongoDB.",
      "Implemented RESTful APIs and integrated third-party services for enhanced application functionality.",
      "Optimized SQL queries and database schemas to improve system performance.",
      "Led a team of junior developers, mentoring them on best practices in software engineering.",
      "Designed and implemented CI/CD pipelines, reducing deployment time by 50%.",
      "Collaborated with UX/UI designers to enhance the user experience of web applications."
    ]
  }
];