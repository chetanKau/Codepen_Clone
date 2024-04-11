import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Projects = () => {

  const projects = useSelector((state) => state.projects?.projects)
  // console.log(projects)
  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {
        projects && projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} index={index} />
        )
      }
    </div>
  )
}

const ProjectCard = (project, index) => {
  return <motion.div key={index} className='w-full cursor-pointer md:w-[350px] h-[300px] bg-secondary rounded-md p-4 flex items-center justify-center gap-4'>


    <div className='bg-primary flex flex-col w-full h-full rounded-md overflow-hidden ' style={{ overflow: "hidden", height: "100%" }}>
      <iframe
        title='Result'
        srcDoc={project?.project?.output}
        style={{ border: "none", widows: "100%", height: "100%" }}
      />

      <div className='flex items-center justify-start gap-3 w-full'>

        {/* image */}
        <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
          {
            project?.project?.user?.photoURL ? (

              <motion.img
                whileHover={{ scale: 1.2 }}
                src={project?.project?.user?.photoURL}
                alt={project?.project?.user?.displayName}
                referrerPolicy='no-referrer'
                className='w-full h-full object-cover'
              />

            ) : (
              <p className='text-xl text-white font-semibold capitalize'>
                {project?.user?.email[0]}
              </p>
            )
          }
        </div>
      </div>
    
    {/* name */}
    <div>
   
      <p className='text-white text-lg capitalize '>{project?.project?.title}</p>
      { console.log("Project title now",project?.project)}
        <p className='text-primaryText text-sm'>
          {project?.project?.user?.displayName ? project?.project?.user?.displayName : `${project?.project?.user?.email.split("@")[0]}`}
        </p>
      
    </div>
    </div>
  </motion.div >
};

export default Projects
