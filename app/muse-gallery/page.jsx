import Hero from '@/components/MuseGallery/Hero'
import MuseContent from '@/components/MuseGallery/MuseContent'
import Layout from '@/components/global/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout>
        <Hero/>
        <MuseContent/>
    </Layout>
  )
}

export default page