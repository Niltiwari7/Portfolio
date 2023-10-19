import React from "react";
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/images__1_-removebg-preview.png";

const Home = ({ ratio }) => {
 

 

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Nilesh Tiwari
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">Contact me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

                 </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
    
    </div>
  );
};

export default Home;