import { FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiLaravel } from "react-icons/si";

export const heroData = {
  name: 'Hiren Gajjar',
  title: 'Web Developer',
  description: `A motivated Web Developer with a diploma in IT Web Programming from NSCC and hands-on experience managing CMS platforms across Shopify, WordPress, and Amazon Seller Central. Skilled in building responsive, user-focused web applications using modern technologies such as React, Next.js, Laravel, and ASP.NET. Currently seeking an internship or junior developer role to apply technical expertise, contribute to impactful digital solutions, and continue growing within a collaborative, innovation-driven environment.`,
  profilePicture: './../profile-photo4.jpg',
  skills: [
    { name: "JavaScript", icon: FaJs },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Laravel", icon: SiLaravel },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "SQL", icon: FaDatabase },
    { name: "Docker", icon: FaDocker },
  ],
  contact: {
    github: 'https://github.com/HGajjar17',
    linkedin: 'https://www.linkedin.com/in/hiren-gajjar17/',
    email: 'cs.hirengajjar@gmail.com'
  }
};
