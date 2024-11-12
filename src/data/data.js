import phoneBookImg from '../images/phonebookIMG.jpeg'
import bookShelfImg from '../images/BookShelfIMG.jpeg'
import iceCreamImg from '../images/IceCreamIMG.jpeg'
import webStudioImg from '../images/WebStudioIMG.jpeg'
export const mySkillsData=[ 
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Redux",
   "Git",
   "Node.js",
   "Express",
   "MongoDB",
   "TypeScript",
  ]
export const myProjectsData=[
   {id:1,
      title: "Phonebook",
      description:
        "Web aplication that allow search, create and store your contacts",
      functional: "user sign up/sign in/logout, create/update/delete contacts available after login.",
      tags: ["React", "Module CSS", "Router DOM", "Redux Toolkit"],
      imageUrl:phoneBookImg ,
      gitHubLink: "https://github.com/YozefKubirya/Phonebook-App",
      projectLink:"https://goit-react-hw-08-nu-lime.vercel.app"
    },
    {id:2,
      title: "Bookshelf",
      description:
        "Web book-store.",
      functional: "popular books, filter by category, shopping list, modals, burger menu.",
      tags: ["HTML", "CSS", "Vanilla JS", "Firebase"],
      imageUrl: bookShelfImg,
      gitHubLink: "https://github.com/YozefKubirya/command-project-team-10-bookshelf",
      projectLink:"https://zyabrik10.github.io/project-team-10/"
    },
    {id:3,
      title: "IceCream-Project",
      description:
        "My team project on HTML and CSS ",
      functional: "ice cream store",
      tags: ["HTML", "SCSS"],
      imageUrl: iceCreamImg,
      gitHubLink: "https://github.com/YozefKubirya/command-project-TheBoys-icecream",
      projectLink:"https://bogdanl-ua.github.io/TheBoys-icecream/"
    },
    {id:4,
      title: "Web-Studio App",
      description:
        "My first project on HTML and CSS ",
      functional: "informative company website, its features, team, clients and portfolio.",
      tags: ["HTML", "SCSS"],
      imageUrl: webStudioImg,
      gitHubLink: "https://github.com/YozefKubirya/WebStudio-App",
      projectLink:"https://yozefkubirya.github.io/WebStudio-App/"
    },
   ]

   export const experienceData=[
    { id:1,
      title: "Master degree of medicine",
      location: "Vinnitsa",
      description:
        "Due to my education i graduated from National Memorial Pirogov Medical Univesity in Vinnitsa ",
      date: "Sep 2018 - Jul 2024",
      },
      {id:2,
      title: "Customer support specialist in insurance company",
      location: "Remote",
      description:
          "I worked in medical insurance company for 1 year as a medical coordinator ",
      date: "Aug 2023 -  Jul 2024",
        },
      {id:3,
      title: "Full-Stack Developer course",
      location: "Remote",
      description:
      "On course I covered topics like HTML, CSS, JS, React, Redux, Node.js and many more. Created several individual and group projects.",
      date: "Aug 22 - Present",
    }
   ]