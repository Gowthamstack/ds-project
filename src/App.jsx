import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home/Home";
import Service from "./Component/Service/Service";
import Footer from "./Component/Footer/Footer";
import Faq from "./Component/faq/faq";
import Contact from "./Component/ContactUs/Contact";
import { useEffect } from "react";
import AOS from "aos";
import About from "./Component/About/About";


function App() {

   useEffect(()=>{
      AOS.init({
        duration:1000,
        once:true
      })
   },[])

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/course' element={<About/>}/>
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
