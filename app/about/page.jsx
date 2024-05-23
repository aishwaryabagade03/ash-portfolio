import AboutHero from '@/components/about/AboutHero'
import Contact from '@/components/about/Contact'
import GalleryGrid from '@/components/about/GalleryGrid'
import Layout from '@/components/global/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout>
        <AboutHero/>
        <GalleryGrid/>
        <Contact/>
    </Layout>
  )
}

export default page