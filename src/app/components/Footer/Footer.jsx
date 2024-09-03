"use client";
import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Footer = () => {
    useEffect(() => {
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register("begin", (to, element) => {
          console.log("begin", to, element);
        });
    
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register("end", (to, element) => {
          console.log("end", to, element);
        });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove("begin");
          Events.scrollEvent.remove("end");
        };
      }, []);
    
      // Defining functions to perform different types of scrolling.
      const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };
    
      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };
    
      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };
    
      // Function to handle the activation of a link.
      const handleSetActive = (to) => {
        console.log(to);
      };
    return (
        <div className='bg-[#140C1C] text-center mt-20 '>
                <p className="text-4xl pt-6">JK</p>
             <div className="text-center flex items-center justify-center pt-8">
                
             <ul className="flex gap-8 ">
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Skills
              </Link>
            </li>
            <li className="text- hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Education
              </Link>
            </li>
            <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </li>
            
          </ul>
             </div>
            <p className='text-primary py-6'>© 2024 All Rights Reserved by Md Jamanul Karim</p>
        </div>
    );
};

export default Footer;