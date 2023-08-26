import React from 'react'
import styles from "../index.css"
import { projects }  from '../assets/static/data.js'
import ProjectDisplay from './ProjectDisplay'
import { Spinner } from '@material-tailwind/react'
import { useState } from 'react'

function Projects() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='animate-fade divide-y-2 divide-gray-100 w-full'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>Projects</h1>
      </div>
      <div className={`${!loaded ? 'flex justify-center items-center h-[60vh]' : 'hidden'}`}> <Spinner className='text-[whitesmoke] h-12 w-12'/> </div>
      <div className={`${loaded ? 'grid gap-9 lg:grid-cols-2 px-10 py-12 grid-cols-1 xl:grid-cols-2' : 'hidden'}`}>
        {projects.map(project => {
          const images = project.img
          console.log(images[0])
          
          return (
          <ProjectDisplay key={project.name}
            setLoaded={setLoaded}
            name={project.name}
            image={project.img[0]}
            alt={project.alt}
            url={project.url}
            description={project.short_description}
            link={project.link}
          />
          )
        })}
      </div>
   </div>
  )
}

export default Projects