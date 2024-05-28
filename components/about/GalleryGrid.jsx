import Image from 'next/image'
import React from 'react'

const GalleryGrid = () => {
  return (
    <section className='pt-36 md:pt-0 md:py-36'>
        <div className="max-w-screen-xl mx-auto">
            <h1 className='text-3xl md:text-6xl'>When I am not designing</h1>
            <div className="md:grid-cols-3 grid grid-cols-1 py-12">
                <div className='h-full'>
                    <div className="grid-cols-1">
                        <div>
                            <Image className=' h-[336px] object-fit-cover' src='/assets/ash/gallery2.jpg' width={400} height={300}/>
                        </div>
                        <div className='my-7'>
                            <Image className=' h-[436px] object-fit-cover' src='/assets/ash/gallery4.jpg' width={400} height={300}/>
                        </div>
                        <div>
                            <Image className='h-[342px] object-fit-cover' src='/assets/ash/gallery5.jpg' width={400} height={300}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid-cols-1">
                        <div>
                            <Image className='object-cover' src='/assets/ash/gallery3.jpg' width={400} height={600}/>
                        </div>
                        <div className='mt-7'>
                            <Image className='object-cover h-[470px]' src='/assets/ash/gallery7.jpg' width={400} height={470}/>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <div className="grid-cols-1">
                        <div>
                            <Image className='object-cover' src='/assets/ash/gallery6.jpg' width={400} height={600}/>
                        </div>
                        <div className='my-7'>
                            <Image className='object-cover' src='/assets/ash/gallery8.jpg' width={400} height={600}/>
                        </div>
                        <div>
                            <Image className='object-cover' src='/assets/ash/gallery1.jpg' width={400} height={600}/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GalleryGrid