import { FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiLaravel } from "react-icons/si";

export const heroData = {
  name: 'Hiren Gajjar',
  title: 'Web Developer',
  description: `A passionate IT Web Programming student at NSCC with a strong foundation in web development, programming, and e-commerce platforms. Skilled in designing, developing, and managing websites and online systems using cutting-edge technologies.
Currently seeking an internship or entry-level role in a dynamic, inclusive team to apply technical expertise, contribute to innovative web projects, and grow through continuous learning opportunities.`,
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
