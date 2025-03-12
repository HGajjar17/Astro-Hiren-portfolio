# 🚀 Personal Portfolio

This is my **personal portfolio website**, where I showcase some of the work that I do not include in my resume. I built this project to explore **modern front-end technologies**, improve my **deployment skills**, and experiment with **UI frameworks**.

## 🌟 Motivation

I created this portfolio for three main reasons:

1. **Showcase Unlisted Work** – Some of my projects don’t fit in a traditional resume, but I still wanted to share them publicly.
2. **Learn New Technologies** – This project helped me explore **Astro** and **Shadcn components**, as well as integrating **React** into an Astro project.
3. **Improve Front-End & Deployment Skills** – I used **Vercel** for hosting and experimented with different tools to improve my workflow.

## 🛠️ Tech Stack

- **Framework:** Astro  
- **UI Components:** Shadcn (React-based)  
- **Hosting:** Vercel  
- **Mockup Tool:** Started with [Bolt.new](https://bolt.new/)  

## 🎨 Development Process

I initially designed a **mockup** using **Bolt.new** and then iterated on the code, making updates and modifications. The process was straightforward and fun, and I enjoyed learning how to integrate **React inside Astro** to make use of Shadcn's UI components.

## 📌 Notes for Cloning & Usage

- You can **clone and modify this project** to create your own portfolio.
- If you use this as a base, I’d appreciate it if you **mention my portfolio** or this repo in the footer:  
  ➡ **[isaac-rosales.vercel.app](https://isaac-rosales.vercel.app)**
  ➡ **[Astro-Shadcn-portfolio](https://github.com/raulrls/Astro-Shadcn-portfolio)**

---

## Overview
This project is a portfolio website showcasing projects, experience, and skills. Built using modern web technologies, it provides an interactive and dynamic way to present professional achievements.

## Features
- Dynamic project showcase
- Skills and experience display
- Contact and social media links
- Customizable data files for easy updates

## Installation

To run the project locally, follow these steps:

### 1️⃣ Clone the repository

```sh
git clone https://github.com/raulrls/Astro-Shadcn-portfolio
cd YOUR_PORTFOLIO_REPO
```

```sh
npm install
```

```sh
npm run dev
```
This will start a local development server, and you can preview the portfolio by opening http://localhost:4321 in your browser.

## Modifying the `/data` Files

The project uses data stored in `/data` files to dynamically render content. You can modify these files to customize the information displayed on your portfolio.

### `/data/config.ts`
This file contains global configuration settings such as the site title, description, author name, and social media links.

**Example:**
```ts
export const config = {
  siteTitle: 'John Doe Portfolio',
  description: 'Hi, I am John Doe, a passionate web developer and data analyst.',
  author: 'John Doe',
  contactEmail: 'johndoe@example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    github: 'https://github.com/johndoe'
  }
};
```
Modify the values accordingly and save the file to see updates reflected on the site.

### `/data/jobs.ts`
Defines the job history section of the portfolio. Each job entry includes title, company, dates, and a description.

**Example:**
```ts
export const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    dates: "01/2020 - Present",
    description: [
      "Developed full-stack applications using React and Node.js.",
      "Implemented RESTful APIs for data processing.",
      "Optimized SQL queries and database performance."
    ]
  }
];
```
and so on...

### `/data/projects.ts`
Defines the projects showcased in the portfolio. Each project includes an ID, title, summary, images, tags, and details.

### `/data/hero.ts`
Defines the main personal introduction section.

### `/data/footer.ts`
Defines the footer information, including social links and a quote.

## 📜 License
Feel free to use and modify this project! If you find it useful, a mention would be appreciated. 🚀

