import { work } from '@/utils/projects'
import Image from 'next/image'
import React from 'react'

const WorkPage = () => {
  return (
    <section className='py-44'>
        <div className='max-w-screen-xl mx-auto'>
            <div className="grid grid-cols-1 gap-12 my-8">
                {work.map((elem , ind)=>(
                    <div className="work-item flex flex-col justify-center md:flex-row items-center gap-3" key={ind}>
                        <div className="work-image md:w-1/2">
                            <Image src={elem.img} width={500} height={300} />
                        </div>
                        <div className="work-text md:w-1/2">
                            <h3 className='mb-3'>{elem.title}</h3>
                            <span className='text-xl poppins'>{elem.para}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WorkPage