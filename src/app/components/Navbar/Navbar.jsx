"use client";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive)
  };
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
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
    <div className="md:px-20 lg:px-40 pt-10 pb-5">
      <nav className="hidden md:flex justify-between text-text font-sora">
        <div>
          <p className="text-4xl pt-6">JK</p>
        </div>
        <div className="flex justify-center items-center">
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
            
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">Education</li>
                
              </Link>
            
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
          <div>
            <div className="ml-10 hover:transition bg-primary px-9 py-4 rounded-l-full rounded-r-full bg-gradient-to-r from-primary to-black hover:bg-gradient-to-r hover:from-black hover:to-primary hover:duration-1000 hover:ease-in-out">
              Hire me
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden justify-between items-center text-text font-sora">
        <div className="sticky top-0">
          <p className="text-4xl md:pt-6">JK</p>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="ml-10 hover:transition bg-primary px-9 py-4 rounded-l-full rounded-r-full bg-gradient-to-r from-primary to-black hover:bg-gradient-to-r hover:from-black hover:to-primary hover:duration-1000 hover:ease-in-out">
              Hire me
            </div>
          </div>
          <div className="dropdown">
            <div
              onClick={handleToggle}
              tabIndex={0}
              role="button"
              className="btn flex items-center justify-center btn-ghost lg:hidden"
            >
              <Hamburger
                color="#8750F7"
                size={25}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
              
              <ul className={`${isActive? 'overflow-x-hidden flex translate-x-0 transition duration-1000 ease-in' : 'translate-x-96 overflow-x-hidden hidden '} flex gap-8 menu dropdown-content z-[99999] mt-3 p-2 shadow w-screen bg-[#140C1C] text-text -left-[296px] text-[17px] top-[40px]`}>
               
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                    href="#"
                  >
                     <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">Skills</li>
                    
                  </Link>
              
               
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                    href="#1"
                  >
                     <li className="text- hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">Projects</li>
                    
                  </Link>
                
               
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                    href="#2"
                  >
                     <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">    Education</li>
                
                  </Link>
                
                
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                    href="#3"
                  >
                    <li className="hover:text-primary hover:transform hover:duration-1000 hover:ease-in-out hover:transition">Contact</li>
                    
                  </Link>
                
              </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
