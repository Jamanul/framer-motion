"use client"
import React from "react";
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";

const Contact = () => {
  const handleEmail = (e) => {
    e.preventDefault()
    const form = e.target;
    const email =form.email.value
    const message =form.message.value
    const firstName =form.firstName.value
    const lastName =form.lastName.value
    //console.log(email)
    const templateParams = {
        from_name: email,
        to_name: "Sakib",
        message: message
      };
      emailjs.send('service_xl87rme', 'template_sappsqj', templateParams, {
    publicKey: 'PUOD7aEdx0BUQNS6u',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text)
      Swal.fire({
        title: "Good job!",
        text: "You have send the email",
        icon: "success"
      });
      ;
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );
  };
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="bg-[#140C1C] px-4 py-10 rounded-3xl mt-20 md:mt-40 md:w-1/2">
        <h2 className="text-5xl mb-4 font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block bg-clip-text">
          Lets work together.
        </h2>
        <p className="text-xl">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
        <form onSubmit={handleEmail}>
         <div className="flex gap-4 mt-4">
         <div className="form-control w-1/2">
        
          <input type="text" placeholder="First Name" name="firstName" className="input input-bordered border border-white bg-[#050709]" required />
        </div>
         <div className="form-control w-1/2">
         
          <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered border border-white bg-[#050709]" required />
        </div>
         </div>
         <div className="flex gap-4 mt-4">
         <div className="form-control w-1/2">
          
          <input type="email" placeholder="Email" name="email" className="input input-bordered border border-white bg-[#050709]" required />
        </div>
        <div className="form-control w-1/2">
          
          <input type="text" placeholder="Number" name="number" className="input input-bordered border border-white bg-[#050709]" required />
        </div>
         </div>
         <div className="form-control ">
          
          <input type="text" placeholder="Your message" name="message" className="input input-bordered border border-white pt-6 pl-4 pb-40 mt-4 bg-[#050709]" required />
        </div>
        <input type="submit" value="Submit" className="mt-4 hover:transition bg-primary px-9 py-4 rounded-l-full rounded-r-full bg-gradient-to-r from-primary to-violet-400 hover:bg-gradient-to-r hover:from-violet-400 hover:to-primary hover:duration-1000 hover:ease-in-out"/>
        </form>
      </div>
      <div className="md:w-1/2 space-y-8 md:mt-80 md:ml-20">
            <div className="flex gap-4">
            <h2 className="text-primary border-2 rounded-full w-10 h-10 mt-2 border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><MdEmail className="text-4xl p-2"/></h2>
            <div >
                <h2 className="">Email</h2>
                <h2 className="text-2xl hover:text-primary hover:transform hover:duration-1000 hover:ease-in hover:transition">jk.skb.25@gmail.com</h2>

            </div>
            </div>
            <div className="flex gap-4">
            <h2 className="text-primary border-2 rounded-full w-10 h-10 mt-2 border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiPhone className="text-4xl p-2"/></h2>
            <div >
                <h2 className="">Number</h2>
                <h2 className="text-2xl hover:text-primary hover:transform hover:duration-1000 hover:ease-in hover:transition">+8801873076907</h2>

            </div>
            </div>
            <div className="flex gap-4">
            <h2 className="text-primary border-2 rounded-full w-10 h-10 mt-2 border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><TiLocation className="text-4xl p-2"/></h2>
            <div >
                <h2 className="">Address</h2>
                <h2 className="text-2xl hover:text-primary hover:transform hover:duration-1000 hover:ease-in hover:transition">Chattogram, Bangladesh.</h2>

            </div>
            </div>
      </div>
    </div>
  );
};

export default Contact;
