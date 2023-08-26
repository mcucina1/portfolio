import React from 'react'
import { useParams } from 'react-router-dom';
import { projects }  from '../assets/static/data.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsGithub }  from 'react-icons/bs'

function IndividualProject() {
  const { url } = useParams()
  const project = projects.find(project => project.url === url)

  return (
    <div className='animate-fade w-full'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10'>{project.name}</h1>
      </div>
      <div className='w-[95%] m-4 flex flex-col items-center xl:items-start'>
        <div className='w-full justify-center items-center mt-2 mb-6 max-w-[800px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative bg-white rounded-md border-2 border-gray-100 border-opacity-60'>
        <Swiper navigation={true} modules={[Navigation]}>
              {project.img.map(image => {
                return (
                  <SwiperSlide style={{height:'auto'}}>
                  <img 
                  src={image}
                  alt={project.alt}
                  className='h-full'
                  />
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>
      </div>
      <div className='m-4 flex flex-col items-center xl:items-start'>
        <p className='mb-4 w-full lg:w-[70%] leading-8 font-roboto'>{project.long_description}</p>
      </div>
      <div className='ml-4 lg:ml-[16%] xl:ml-4'>
        <h1 className='mb-4 text-2xl font-semibold'>Stack</h1>
        <p className='flex flex-wrap'>{project.stack.map(stack => {
          return (
          <span className={`${stack.color} text-white rounded-sm mb-1 mr-2 p-1 px-2 text-sm`}>{stack.tech}</span>
          )})}
        </p>
        <h1 className='mt-4 text-2xl font-semibold'>Code</h1>
        <div className='relative flex flex-row items-center bg-slate-800 mt-4 p-1 py-2 rounded-md hover:cursor-pointer w-[5.25rem] h-8 transition-colors duration-150 hover:bg-black'
          onClick={() => window.open(project.link, '_blank')}
        >
            <BsGithub className='w-10 h-10 m-0 p-0 invert'/>
            <p className='font-github mt-1 text-white m-0 pl-1 pb-1'>GitHub</p>
        </div>
        </div>
    </div>
  )
}

export default IndividualProject