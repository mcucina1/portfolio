import { Link } from "react-router-dom"

function ProjectDisplay({setLoaded ,name, image, alt, url, description, link}) {

  return (
    <div className='flex justify-start sm:justify-center md:justify-center lg:justify-center'>
        <div className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-shadow duration-200 relative bg-white rounded-md border-2 border-gray-100 border-opacity-60 mt-2 mb-6 max-w-[600px] h-full'>
            <Link to={`${url}`}>
            <div className="relative overflow-hidden">
            <img 
                onLoad={() => setLoaded(true)}
                src={image}
                alt={alt}
                className='object-fill w-full rounded-t-md cursor-pointer'
            />
            </div>
            </Link>
            <footer className='py-4 px-6 flex flex-col flex-wrap'>
                <h5 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>{name}</h5>
                <p>{description}</p>
               {/*  <a href={link} target='_blank' rel='noreferrer' className='underline absolute bottom-4'>github</a> */}
            </footer>
        </div>
    </div>
  )
}

export default ProjectDisplay