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
    title: "C# Sharp MVC Entity Framework Project",
    summary: "Developed a web-based discussion forum for game enthusiasts, enabling users to create, edit, and participate in discussions.",
    images: [
      "../csharp-img/Gameforum_Csharp_Project(1).gif",
      "../csharp-img/homepage.png",
      "../csharp-img/login.png",
      "../csharp-img/profile.png",
      "../csharp-img/register.png",
      "../csharp-img/discussion_details.png",
    ],
    tags: ["ASP.NET Core MVC", "Entity Framework", "Bootstrap", "Web Development", "Forum", "C#"],
    details: {
      challenge: "The project aimed to create a user-friendly platform for gamers to engage in discussions and share their experiences.",
      solution: "Built a discussion forum using ASP.NET Core MVC, Entity Framework, and Bootstrap, allowing users to create, edit, and participate in game-related discussions.",
      impact: [
        "Provided a centralized platform for gamers to share insights and engage with the community.",
        "Facilitated organized and structured discussions, enhancing user interaction and experience."
      ]
    },
    externalLink: {
      title: "GitHub Repository",
      url: "https://github.com/HGajjar17/GameForum"
    }
  },
  // {
  //   id: 3,
  //   title: "Laravel Chirper (MVC)",
  //   summary: "Showcased the MVC model using Laravel, integrated with Data Grid, Tailwind CSS, Dockerfile, and Blade PHP.",
  //   images: [
  //     "https://example.com/laravelchirper1.jpg",
  //     "https://example.com/laravelchirper2.jpg"
  //   ],
  //   tags: ["Laravel", "MVC", "Artisan", "PHP", "Tailwind CSS", "Docker", "Blade PHP"],
  //   details: {
  //     challenge: "The goal was to demonstrate the MVC architecture and integrate various modern web development tools and packages.",
  //     solution: "Developed a Laravel project using the Artisan package, leveraging JetBrains Toolbox in PHP Storm. Incorporated Data Grid, Tailwind CSS, Dockerfile, and Blade PHP for enhanced functionality and styling.",
  //     impact: [
  //       "Demonstrated a scalable and maintainable web application structure with Laravel.",
  //       "Provided a comprehensive example of integrating modern web development tools and practices."
  //     ]
  //   },
  //   externalLink: {
  //     title: "GitHub Repository",
  //     url: "https://github.com/NSCC-ITC-Fall2024-INET2005-700-MCa/finalassignment-HGajjar17"
  //   }
  // },
  {
    id: 4,
    title: "JAVA MVC",
    summary: "Developed a banking app demonstrating MVC principles and utilizing JUnit testing, with views created using MigLayout in a grid structure.",
    images: [
      "../java-img/homepage.png",
      "../java-img/createaccount-savings.png",
      "../java-img/createaccount-airmiles.png",
      "../java-img/selectaccount.png",
      "../java-img/viewtransaction-airmiles.png",
      "../java-img/deposit.png",
      "../java-img/withdraw.png",
      "../java-img/viewtransaction-savings.png",
    ],
    tags: ["Java", "MVC", "JUnit", "MigLayout", "Banking App", "Grid Structure"],
    details: {
      challenge: "The project aimed to develop a banking application that adheres to MVC principles and includes thorough unit testing.",
      solution: "Implemented a JAVA banking app using MVC architecture, incorporating JUnit for testing. Designed views with MigLayout in a grid structure.",
      impact: [
        "Demonstrated robust software design principles and effective unit testing strategies.",
        "Created a user-friendly and organized interface for the banking application."
      ]
    },
    externalLink: {
      title: "GitHub Repository",
      url: "https://github.com/HGajjar17/Banking-Application-Java"
    }
  },
  // {
  //   id: 2,
  //   title: "Automated Financial Reporting System",
  //   summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
  //   images: [
  //     "https://example.com/finance1.jpg",
  //     "https://example.com/finance2.jpg"
  //   ],
  //   tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
  //   details: {
  //     challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
  //     solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
  //     impact: [
  //       "Reduced reporting time from 5 days to a few hours, improving efficiency.",
  //       "Minimized errors in financial reports, ensuring data accuracy for decision-making."
  //     ]
  //   },
  //   externalLink: {
  //     title: "GitHub Repository",
  //     url: "https://github.com/NSCC-ITC-Fall2024-PROG3017-700-MCa/my-fullstack-app-HGajjar17"
  //   }
  // },
  // {
  //   id: 2,
  //   title: "Automated Financial Reporting System",
  //   summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
  //   images: [
  //     "https://example.com/finance1.jpg",
  //     "https://example.com/finance2.jpg"
  //   ],
  //   tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
  //   details: {
  //     challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
  //     solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
  //     impact: [
  //       "Reduced reporting time from 5 days to a few hours, improving efficiency.",
  //       "Minimized errors in financial reports, ensuring data accuracy for decision-making."
  //     ]
  //   },
  //   externalLink: {
  //     title: "GitHub Repository",
  //     url: "https://github.com/NSCC-ITC-Fall2024-PROG3017-700-MCa/my-fullstack-app-HGajjar17"
  //   }
  // },
];
