import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Announce from '../Components/Announce';

export const scrollContext = createContext();
function Home() {


    const [bg, setBg] = useState("bg-transparent");

    useEffect(() => {
       const handleScroll = () => {
           const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
           if (scrollTop > 700) {
               setBg("bg-black");
               console.log(scrollTop);
           } else {
               setBg("bg-transparent");
               console.log("transparent");

           }
       };

       window.addEventListener("scroll", handleScroll);

       return () => {
           window.removeEventListener("scroll", handleScroll);
       };
    },[])

  return (
      <div>
          <scrollContext.Provider value={bg}>
              {bg != "bg-black" && <Announce />}
              <Nav />
              <Banner />
              <About />
              <Services />
              <Contact />
          </scrollContext.Provider>
      </div>
  );
}

export default Home
