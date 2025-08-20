import drone from "./Trone1.jpg";
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
import address from "./address.png";
import drone_video from "./drone_video.mp4"
import profile_icon from "./profile_icon.png";
import menu_icon_white from "./menu_icon_white.png"
import location from "./location_icon.png";
import mail_icon from "./mail_icon.png";
import call_icon from "./call_icon.png";
import ceo_icon from  "./ceo_icon.png";


export const assests = {
  drone,
  Ics,
  menu_icon,
  cross_icon,
  Project,
  PCB,
  Telemtry,
  address,
  drone_video,
  profile_icon,
  menu_icon_white,
  location,
  mail_icon,
  call_icon,
  ceo_icon
};

//home
export const courses = [
  {
    id: self.crypto.randomUUID(),
    img: drone,
    name: "Drone Assemble",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: PCB,
    name: "PCB Designing",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Telemtry,
    name: "Telemetry",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Ics,
    name: "Embeded System Testing",
    level: "Beginner to Advance",
    language: "English",
  }
];

//home
export const testimonial=[
  {
    id:1,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:2,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:3,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:4,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:5,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:6,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  },
  {
    id:7,
    img:profile_icon,
    role:"developer",
    description:"Build Cool Projects"
  }
]


export const offer=[
  {
    id:self.crypto.randomUUID(),
    img:InterShip,
    description:"InternShip for College Students",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:Seminar,
    description:"Workshop in School And Colleges",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:Webinar,
    description:"Seminar &Webinar",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:MiniProject,
    description:"Mini Project for Final Year Students",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:RDProject,
    description:"R&D Project Support",
    align:"left",
  },
  {
    id: self.crypto.randomUUID(),
    img: drone,
    description: "Drone Assemble",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: PCB,
    description: "PCB Designing",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Telemtry,
    description: "Telemetry",
    level: "Beginner to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Ics,
    description: "Embeded System Testing",
    level: "Beginner to Advance",
    language: "English",
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