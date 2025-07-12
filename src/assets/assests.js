import Trone from "./Trone1.jpg";
import Ics from "./backgroundpic.jpg";
import menu_icon from "./menu_icon.png";
import cross_icon from "./cross_icon.png";
import PCB from "./Pcb_Desinging.jpg";
import Telemtry from "./Telemetry.jpg";
import Project from "./Projects.jpg"
import RDProject from "./RD_Projects.jpg";
import InterShip from "./InterShip.jpg";
import MiniProject from "./MiniProject.jpg";
import Seminar from "./Seminar.jpg";
import Webinar from "./Webinar.jpg";



export const assests = {
  Trone,
  Ics,
  menu_icon,
  cross_icon,
  Project,
  PCB,
  Telemtry
};

export const courses = [
  {
    id: self.crypto.randomUUID(),
    img: Trone,
    name: "Trone Assemble",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: PCB,
    name: "PCB Designing",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Telemtry,
    name: "Telemetry",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Ics,
    name: "Embeded System Testing",
    level: "Begineer to Advance",
    language: "English",
  },
];


export const offer=[
  {
    id:self.crypto.randomUUID(),
    img:InterShip,
    descrption:"InterShip for College Students",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:Seminar,
    descrption:"Workshop in School And Colleges",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:Webinar,
    descrption:"Seminar &Webinar",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:MiniProject,
    descrption:"Mini Project for Final Year Students",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:RDProject,
    descrption:"R&D Project Support",
    align:"left",
  }
]


export const questions = [
  {
    quesid:1,
    qusetion:"What services do you offer?",
    answer:"PCB Design & Development,Embedded System Solutions,Final Year Mini Project Guidance,R&D Project Support,Technical Workshops, Seminars & Webinars,Skill Development Programs with Placement Assistance",
    class:"ques-1",
  },
  {
    quesid:2,
    qusetion:"Who can benefit from your training programs?",
    answer:"Engineering and diploma students,Recent graduates seeking hands-on skills,Institutions looking to host workshops or webinars,Hobbyists and learners interested in embedded systems and PCB design",
    class:"ques-2",

  },
  {
    quesid:3,
    qusetion:"What technologies do you cover in your training?",
    answer:"Microcontrollers (8051, AVR, ARM, PIC, STM32, etc.),Arduino, Raspberry Pi, ESP32,Embedded C and IoT Applications,PCB Design Tools (e.g., Altium, Eagle, KiCad)",
    class:"ques-3",

  },
  {
    quesid:4,
    qusetion:"Do you provide project support for final-year students?",
    answer:"Mini project selection and idea validation,Complete design and development,Report documentation and presentation guidance",
    class:"ques-4",

  },
  {
    quesid:5,
    qusetion:"Do you support R&D and industrial projects?",
    answer:"Yes, our experienced engineers offer support for research and development projects, including prototyping, design consulting, and custom embedded solutions.",
    class:"ques-5",

  },
];