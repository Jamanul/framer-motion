"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
    const [visible,setVisible]=useState(false)
  return (
    <div className="flex flex-col gap-2 items-center min-h-screen justify-center ">
        <motion.button layout onClick={()=>setVisible(!visible)}>Set visible</motion.button>
      <AnimatePresence mode="popLayout">
       {visible &&  <motion.div
          initial={{
            rotate: "0deg",
            scale: 0,
          }}
          animate={{
            rotate: "180deg",
            scale: 1,
            y: [0,150,-150,-150,0]
          }}
          exit={{
            rotate: "0deg",
            scale: 0,
          }}
          transition={{
            duration :1 ,
            ease:"easeInOut",
            times:[0,0.25,0.5,0.9,1]
          }}
          style={{
            height: "180px",
            width: "180px",
            background: "white",
          }}
        ></motion.div>}
      </AnimatePresence>
        <div>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95,rotate: '2.5deg'}} transition={{duration:1}} className="bg-red-600 text-white">
                click me
            </motion.button>
        </div>

    </div>
  );
};

export default page;
