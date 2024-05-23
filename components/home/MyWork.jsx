import { projects } from '@/utils/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyWork = () => {
  return (
    <section className='py-16'>
        <div className="max-w-screen-xl mx-auto">
            <h2>My Work</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                {projects.map((elem , ind)=>(
                    <div className="project-div my-4" key={ind + elem.id}>
                        <Image src={elem.img} width={450} height={450} />
                        <div className="mt-4">

                        <h6>
                            <Link href='/'>{elem.title}</Link>
                        </h6>
                        <p className="para-small">{elem.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MyWork