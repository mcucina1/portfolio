import React from 'react'
import '../styles/About.css'
import pic from '../assets/images/me_in_Japan.jpg'
import resume from '../assets/Resume.pdf'
import { useState } from 'react'
import { Spinner } from '@material-tailwind/react'

function About() {
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className='w-full animate-fade divide-y-2 divide-gray-100'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          About
          </h1>
      </div>
      <div className={`${!loaded ? 'flex justify-center items-center h-[60vh]' : 'hidden'}`}> <Spinner className='text-[whitesmoke] h-12 w-12'/> </div>
      <section className={`${loaded ? 'flex justify-center items-center lg:items-start flex-col grid lg:grid-cols-2' : 'hidden'}`}>
      {/* <div className={`${loaded ? 'flex justify-center items-center h-[60vh] w-screen mb-[10rem]' : 'hidden'}`}> <Spinner className='text-[whitesmoke] h-12 w-12'/> </div> */}
          <div className='flex flex-col items-center space-x-2 pt-8'>
            <div className='w-64 h-64 lg:w-80 lg:h-80 mt-8 rounded-full overflow-hidden'>
            <img onLoad={() => setLoaded(true)} src={pic} alt='me' className='bg-[length:200px]'/>
            </div>
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Michael Cucina</h3>
            <div className='font-medium text-gray-500 dark:text-gray-400'>Programmer</div>
            <div className='text-gray-500 dark:text-gray-400'>Colorado State University</div>
          </div>
          <div className='bio mt-12 prose prose-lg'>
            <p className='mb-4'> Hello, my name is Michael. I'm a student at Colorado State University, an aspiring computer scientist, and a USAF veteran.</p>
            <p className='mb-4'>I joined the Air Force soon after high school and specialized in maintaining aerospace ground equipment used for aircraft maintenance. My experiences led me across the globe, operating in Japan, Korea, Europe, Africa, and throughout the United States. I had the privilege of meeting some of the best people from all walks of life, and made some life-long friends along the way. Transitioning from military service, I pursued an education at Colorado State University, and I’m planning on graduating this fall with my bachelor’s in computer science. I love the problem solving associated with programming and working with software, and look forward to what lies ahead after graduation.</p>
            <p className='mb-4'>Feel free to contact me, I look forward to talking to you further.</p>
            <p>You can find my 
              <span 
                className='rounded border-2 border-solid border-[lavender]; mx-0.5 p-1 py-[0.25rem] font-medium cursor-pointer transition-shadow duration-150 hover:shadow-slate-500 hover:shadow-sm'
                onClick={() => window.open(resume)}
                >
                  Resume
              </span> 
              here.
            </p>
          </div>
      </section>
    </div>
  )
}

export default About