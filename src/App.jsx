import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import StateSection from './components/StateSection/StateSection';
import TopCategories from './components/TopCategories/TopCategories';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import { BsChatRightDotsFill } from "react-icons/bs";
import { SiStarlingbank } from "react-icons/si";
import { FaRegImage } from "react-icons/fa6";
import { IoMdCamera } from "react-icons/io";
import PopularCourses from './components/PopularCourses/PopularCourses';
import { FaPlayCircle } from "react-icons/fa";
import Questions from './components/Questions/Questions';
import Testimonial from './components/Testimonial/Testimonial.JSX';
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0);
  const stateData = [
    { title: "60K+", subtitle: "Live Courses", class: "" },
    { title: "35K+", subtitle: "Category", class: "highlighted" },
    { title: "/assets/img/Group 1000014963.svg", subtitle: "View our 1,602 reviews 4.9 ★", class: "trustpilot" },
    { title: "25K+", subtitle: "Professionals", class: "highlighted" },
    { title: "125K+", subtitle: "Students", class: "" }
  ];
  const courses = [
    { img: "/assets/img/Group 20.svg", content: "Art & Design", icon: "" },
    { img: "/assets/img/Ellipse 57.png", content: "Communication", icon: <BsChatRightDotsFill /> },
    { img: "/assets/img/Ellipse 57.png", content: "Finance & Bank", icon: <SiStarlingbank /> },
    { img: "/assets/img/Ellipse 57.png", content: "Marketing", icon: <FaRegImage /> },
    { img: "/assets/img/Ellipse 57.png", content: "Photography", icon: <IoMdCamera /> }
  ];
  const popularCoursesData = [
    {
      icon: <FaPlayCircle />,
      count: "25x Lesson",
      type: "Design",
      color: " #24D198",
      title: "Supervised Machine Learning: Regression and Classification",
      description: "For athletes, high altitude produces two contradictory effects on performance.",
      img: "/assets/img/Group-1.svg" // يمكنك تحديث مسار الصورة هنا
    },
    {
      icon: <FaPlayCircle />,
      count: "15x Lesson",
      type: "Marketing",
      color: "#00C1FF",
      title: "Programming for Everybody (Getting Started with Python)",
      description: "For athletes, high altitude produces two contradi effects on performance.",
      img: "/assets/img/Group-2.svg"
    }
    ,
    {
      icon: <FaPlayCircle />,
      count: "15x Lesson",
      type: "Programming",
      color: "#F15568",
      title: "Leading Teams: Developing as a Leader",
      description: "For athletes, high altitude produces two contradi effects on performance.",
      img: "/assets/img/Group%20512823.svg"
    }
    ,
    {
      icon: <FaPlayCircle />,
      count: "15x Lesson",
      type: "Design",
      color: "#7F56D9",
      title: "Powerful mental tools to help you master tough subjects",
      description: "For athletes, high altitude produces two contradi effects on performance.",
      img: "/assets/img/Group%20512823.svg"
    }
    ,
    {
      icon: <FaPlayCircle />,
      count: "15x Lesson",
      type: "Marketing",
      color: "#FF6905",
      title: "Introduction to Digital MarketingProgramming for Everybody (Getting Started with Python)",
      description: "For athletes, high altitude produces two contradi effects on performance.",
      img: "/assets/img/Group-2.svg"
    }
    ,
    {
      icon: <FaPlayCircle />,
      count: "15x Lesson",
      type: "Programming",
      color: "#FAB437",
      title: "Leading Teams: Developing as a Leader",
      description: "For athletes, high altitude produces two contradi effects on performance.",
      img: "/assets/img/Group-1.svg"
    }

  ];
  const questions = [
    { question: "Can Conversix sync my data to my CRM?", answer: "Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.", icon: "+" },
    { question: "How much data will I receive?", answer: "The amount of data you receive will depend on the search criteria and available information.", icon: "+" },
    {
      question: "Can marketers use Conversix data on behalf of clients?", answer: "Yes, marketers can request data on behalf of their clients, provided they have proper authorization.", icon: "+"
    },
    { question: "How accurate is my data?", answer: "The accuracy of the data depends on the sources and methods used to collect and verify the information.", icon: "+" },
  ]

  const images = [
    { img: "./assets/img/Ellipse 1222.png", alt: "Client 1" },
    { img: "./assets/img/Ellipse 1223.png", alt: "Client 2" },
    { img: "./assets/img/Ellipse 1224.png", alt: "Client 3" },
    { img: "./assets/img/Ellipse 1225.png", alt: "Client 4" },
    { img: "./assets/img/Ellipse 1226.png", alt: "Client 5" }
  ];

  const logos = [
    { img: "./assets/img/Group.svg", alt: "HubSpot Logo" },
    { img: "./assets/img/Group 512823.svg", alt: "Loom Logo" },
    { img: "./assets/img/Group 512822.svg", alt: "GitLab Logo" },
    { img: "./assets/img/Group-1.svg", alt: "LiveChat Logo" },
    { img: "./assets/img/Group-2.svg", alt: "Monday.com Logo" }
  ];
  return (
    <>
      <NavBar
        logo="Edujar"
        items={["Home", "Courses", "About us", "Works", "Blog", "Contact"]}
        btn="Signin"
      />
      <Hero
        firimg="./assets/img/Group.png"
        title="Learn with us anywhere<br/>with the best <span>experts</span>"
        subtitle="We collaborate with 275+ leading universities and companies"
        secimg="./assets/img/Group 1000014951.png"
      />
      <StateSection states={stateData} />
      <TopCategories firIcon={<MdArrowBackIos />} items={courses} secIcon={<MdArrowForwardIos />} />
      <PopularCourses icon={<FaPlayCircle />} firIcon={< MdArrowForwardIos />} items={popularCoursesData} secIcon={< MdArrowBackIos />} />
      <Questions title="Frequently Asked Questions" content="Any Questions?<br />Find here." btn="send message" img="./assets/img/Frame.png" items={questions} />
      <Testimonial title="What our client's say"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        user="Adrian Smith" firArrow={<BiLeftArrowAlt />} secArrow={<BiRightArrowAlt />} items={images} />
      <Logo firArrow={<BiLeftArrowAlt />} secArrow={<BiRightArrowAlt />} items={logos} />
      <Footer content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
        title="Quick links" type="email" placeholder="Enter Email" btn="Subscribe"/>
    </>
  );
}

export default App;
