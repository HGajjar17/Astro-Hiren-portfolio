export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Customers Address - Full Stack App (MERN Stack)",
    summary: "Developed a full stack web application featuring a Node.js backend and a React frontend, integrating JWT for secure server-side authentication and protected routes. Implemented comprehensive CRUD operations with data managed through a MongoDB database.",
    images: [
      "../fullstack-img/fullstack-project.gif",
      "../fullstack-img/homepage.png",
      "../fullstack-img/registercustomer.png",
      "../fullstack-img/login.png",
      "../fullstack-img/addcustomer.png",
      "../fullstack-img/editcustomer.png",
    ],
    tags: ["Full Stack Development", "Node.js", "React", "JWT", "Authentication", "Protected Routes", "CRUD Operations", "MongoDB", "Web Development", "API Integration"],
    details: {
      challenge: "The project required the development of a secure and efficient full stack web application with seamless integration between the frontend and backend.",
      solution: "Developed a full stack application using Node.js for the backend and React for the frontend, ensuring secure server-side authentication with JWT and implementing protected routes.",
      impact: [
        "Enhanced data management and operational efficiency by implementing comprehensive CRUD operations with MongoDB.",
        "Improved security and user experience through the integration of JWT-based authentication and protected routes."
      ]
    },
    externalLink: {
      title: "GitHub Repository",
      url: "https://github.com/NSCC-ITC-Fall2024-PROG3017-700-MCa/my-fullstack-app-HGajjar17"
    }
  },
  {
    id: 2,
    title: "Automated Financial Reporting System",
    summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
    images: [
      "https://example.com/finance1.jpg",
      "https://example.com/finance2.jpg"
    ],
    tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
    details: {
      challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
      solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
      impact: [
        "Reduced reporting time from 5 days to a few hours, improving efficiency.",
        "Minimized errors in financial reports, ensuring data accuracy for decision-making."
      ]
    }
  }
];
