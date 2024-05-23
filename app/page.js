import Layout from "@/components/global/Layout";
import AboutText from "@/components/home/AboutText";
import Faq from "@/components/home/Faq";
import HeroSection from "@/components/home/HeroSection";
import MyWork from "@/components/home/MyWork";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutText/>
      <MyWork/>
      <Faq/>
      <Testimonial/>
    </Layout>
  );
}
