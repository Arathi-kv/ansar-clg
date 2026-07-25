import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutThree from "@/components/about/AboutThree";

import CampusThree from "@/components/campus/CampusThree";
import BackToTop from "@/components/common/BackToTop";
import CourseThree from "@/components/course/CourseThree";
import EventFive from "@/components/event/EventFive";
import FeaturesThree from "@/components/features/FeaturesThree";
import HeroThree from "@/components/hero/HeroThree";






export default function University() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroThree />
        <FeaturesThree />
        <AboutThree />
        <CourseThree />
         <EventFive></EventFive>
        <CampusThree />
       
       
        
                      
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
