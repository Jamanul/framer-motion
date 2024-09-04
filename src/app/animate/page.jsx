"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
    const [visible,setVisible]=useState(true)
  return (
    <div className="flex flex-col gap-2 items-center min-h-screen justify-center ">
        <button onClick={()=>setVisible(!visible)}>Set visible</button>
      <AnimatePresence>
       {visible &&  <motion.div
          initial={{
            rotate: "0deg",
            scale: 0,
          }}
          animate={{
            rotate: "180deg",
            scale: 1,
          }}
          exit={{
            rotate: "0deg",
            scale: 0,
          }}
          transition={{
            duration :1 ,
            ease:"easeInOut"
          }}
          style={{
            height: "180px",
            width: "180px",
            background: "white",
          }}
        ></motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default page;
