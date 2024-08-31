import about from '../assets/about.png'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-8">
           <div className="flex items-center justify-center">
            <img src={about} alt="nour kh"></img>

           </div>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:0.5}}
          className='w-full lg:w-1/2'>
           <div className='flex justify-center lg:justify-start'>
            <p className='my-2  py-6'>
              I am an enthusiastic Computer Science student with a strong background in software development, seeking an opportunity to further my skills through a software engineering internship. My experience spans various technologies, including React, Node.js, MySQL, and MongoDB.<br></br>  <br />My journey in web development began with a curiosity about how things work, driving me to explore the depths of software engineering. Over time, I have developed a broad skill set that includes building software applications, programming, and database management.

              <br></br>  <br />I thrive in collaborative settings and enjoy tackling complex challenges to deliver effective solutions. Beyond coding, I stay active by exploring the latest tech trends and contributing to open-source projects. I am eager to bring my passion for problem-solving and technical expertise to a dynamic team, where I can learn, grow, and make an impact.
            </p>

           </div>

          </motion.div>

        </div>
    </div>
  )
}

export default About
