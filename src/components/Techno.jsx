import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";

const icon=(duration)=>(
  {
    initial:{y:-10},
    animate: {
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  }
)


const Techno = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-warp items-center justify-center gap-4">
        <motion.div 
        variants={icon(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={icon(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaJsSquare className="text-7xl text-yellow" />
        </motion.div>
        <motion.div
         variants={icon(5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMongodb className="text-7xl text-green" />
        </motion.div>
        <motion.div
        variants={icon(2)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <GrMysql className="text-7xl text-blue" />
        </motion.div>
        <motion.div
        variants={icon(6)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaHtml5  className="text-7xl text-html" />
        </motion.div>
        <motion.div 
        variants={icon(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaCss3  className="text-7xl text-css" />
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Techno
