import Image from "next/image";
import React from "react";
import { FiArrowUp, FiArrowUpLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { RiFirebaseLine, RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl mt-40 mb-10 font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block bg-clip-text">
          My Best Works
        </h2>
        <h2 className="text-2xl text-text mb-10">
          Here is A little glimpse of my work over the year.
        </h2>
      </div>
      <div className="card bg-[#140C1C] lg:card-side mb-6  border-primary rounded-3xl border-2 p-2 shadow-xl">
        <figure>
          <Image width={100} height={100} className="w-[500px]" src="/grant.PNG" alt="Album" />
        </figure>
        <div className="card-body md:w-2/3">
          <h2 className="card-title">Grant Genius</h2>
          <p>
            My website provides information on scholarships available at various
            colleges and universities. As a user, you can easily browse through
            scholarship options, apply, and securely make payments for
            application fees. For admins and moderators, the platform offers
            dashboard to add, update, and delete scholarship listings.
          </p>
          <p className="text-2xl font-bold mt-0">Core Features</p>

          <ul className="list-disc ml-4 md:ml-10">
            <li>
              My website offers a scholarship management system where users can
              explore various scholarships, apply directly through the site and
              make secure payments. Users have full control over their
              applications and reviews, allowing them to edit or delete their
              submissions as needed.
            </li>
            <li>
              Another key feature is the user review system, where users can
              provide valuable feedback on scholarships and update or remove
              their reviews to keep information accurate and helpful for other
              users.
            </li>
            <li>
              For admins and moderators, the site provides a dashboard to manage
              scholarship listings, including adding, editing, and deleting
              entries. They can also handle user applications and reviews,
              canceling applications or removing reviews if necessary, and
              admins have the ability to assign different roles to users.
            </li>
          </ul>
          <div className="card-actions">
            <p className=" items-center flex mr-1 gap-0 md:gap-4 ">Skills used: 
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiReactjsLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiFirebaseLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiJavascriptLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiTailwindCssLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiNodejsLine className="text-4xl p-2"/></h2>

            </p>
          </div>
          <div className="card-actions items-center justify-end">
          <button className="px-9 py-2 border-2 hover:bg-primary hover:text-text hover:transition hover:duration-1000 border-primary text-primary rounded-l-full rounded-r-full flex items-center gap-2">Live link <FiArrowUpRight/></button>

           <a href="https://github.com/Jamanul/grant-genius-client"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a> 
         <a href="https://github.com/Jamanul/grant-genius-server"><h2 className="hover:text-primary border-2 rounded-full hover:border-primary bg-primary hover:bg-transparent text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a>   
          </div>
        </div>
      </div>
      <div className="card lg:card-side mb-6 bg-[#140C1C] border-primary rounded-3xl border-2 p-2 shadow-xl">
        <figure>
          <Image width={100} height={100} className="w-[500px]" src="/knowledge-hub.PNG" alt="Album" />
        </figure>
        <div className="card-body md:w-2/3">
          <h2 className="card-title">Knowledge Hub</h2>
          <p>
          My website is about library management platform where users can explore and learn about various books available. Users can borrow books from the library, add their own books to the collection, and update book information as needed. Also, the platform can be used for the return of borrowed books and provides detailed information about each book.
          </p>
          <p className="text-2xl font-bold mt-0">Core Features</p>

          <ul className="list-disc ml-4 md:ml-10">
            <li>
            The key features of our library management website include a great catalog that allows users to explore and learn about different types of books available.
            </li>
            <li>
            Users can easily borrow books and easily return borrowed items.
            </li>
            <li>
            Users can also buy the borrowed books by a safe payment.
            </li>
          </ul>
          <div className="card-actions">
            <p className=" items-center flex mr-1 gap-0 md:gap-4 ">Skills used: 
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiReactjsLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiFirebaseLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiJavascriptLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiTailwindCssLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiNodejsLine className="text-4xl p-2"/></h2>

            </p>
          </div>
          <div className="card-actions items-center justify-end">
          <button className="px-9 py-2 border-2 hover:bg-primary hover:text-text hover:transition hover:duration-1000 border-primary text-primary rounded-l-full rounded-r-full flex items-center gap-2">Live link <FiArrowUpRight/></button>
           <a href="https://github.com/Jamanul/knowledge-hub-client"> <h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:border-2 hover:text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a>
           <a href="https://github.com/Jamanul/knowledge-hub-server"><h2 className="hover:text-primary border-2 rounded-full hover:border-primary bg-primary hover:bg-transparent text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a>  
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-[#140C1C] border-primary rounded-3xl border-2 p-2 shadow-xl">
        <figure>
          <Image width={100} height={100} className="w-[500px]" src="/crafty.PNG" alt="Album" />
        </figure>
        <div className="card-body md:w-2/3">
          <h2 className="card-title">Crafty Canvas</h2>
          <p>
          Our website provides a dynamic and customizable environment for artists and art enthusiasts. Users can create accounts to manage their artwork. Artists can add new arts, categorize them into subcategories for easy browsing, update details, and delete works as needed. The platform is designed to support artists and showcasing their works,
          </p>
          <p className="text-2xl font-bold mt-0">Core Features</p>

          <ul className="list-disc ml-4 md:ml-10">
            <li>
            The website offers both light and dark themes, providing users with a personalized browsing experience. Users can create accounts to save, update, and delete their own artwork.
            </li>
            <li>
            Users can easily add their own artwork and categorize it by subcategories, making it simple for others to discover and explore.
            </li>
            <li>
            By creating a user account, artists can save their artwork, manage their collections.
            </li>
          </ul>
          <div className="card-actions">
            <p className=" items-center flex mr-1 gap-0 md:gap-4 ">Skills used: 
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiReactjsLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiFirebaseLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiJavascriptLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiTailwindCssLine className="text-4xl p-2"/></h2>
            <h2 className="text-primary border-2 h-10 w-10 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiNodejsLine className="text-4xl p-2"/></h2>

            </p>
          </div>
          <div className="card-actions items-center justify-end">
          <button className="px-9 py-2 border-2 hover:bg-primary hover:text-text hover:transition hover:duration-1000 border-primary text-primary rounded-l-full rounded-r-full flex items-center gap-2">Live link <FiArrowUpRight/></button>
           <a href="https://github.com/Jamanul/crafty-canvas-client"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a> 
          <a href="https://github.com/Jamanul/crafty-canvas-server"> <h2 className="hover:text-primary border-2 rounded-full hover:border-primary bg-primary hover:bg-transparent text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a> 
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
