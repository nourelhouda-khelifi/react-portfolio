import ProfilePic from '../assets/noukk.png';
import { motion } from "framer-motion"
const container =(delay)=>({
  hidden:{x:-100 , opacity:0},
  visible :{
    x:0,
    opacity: 1,
    transition:{
      duration:0.5,
      delay:delay
    }

  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2" >
         <div className="flex flex-col items-center lg:items-start">
          <motion.h1 
          variants={container(0)}
          initial='hidden'
          animate="visible"
          className="pb-16 text-6x font-thin tracking-tight lg:mt-16 lg:text-6xl" >Nourelhouda Khelifi</motion.h1>
          <motion.span 
          variants={container(0.5)}
          initial='hidden'
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
          Computer Science student
          </motion.span>
           <motion.p
           variants={container(1)}
           initial='hidden'
           animate="visible" 
           className="my-2 max-w-xl py-6 font-light tracking-tighter">I am a Computer Science student with a strong background in software development. My technical experience includes developing software applications, working with various programming languages, and managing databases. I am passionate about software engineering because the idea of creating innovative solutions to complex problems excites me. Iam eager to contribute my skills and learn from industry professionals to further develop my expertise in this field.</motion.p>
         </div>

        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            src={ProfilePic} alt='ProfilePic' className='w-full max-w-md  '></motion.img>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
