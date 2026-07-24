import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import AboutOne from "@/components/about/AboutOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ChooseFive from "@/components/choose/ChooseFive";
import BackToTop from "@/components/common/BackToTop";
import CtaFive from "@/components/cta/CtaFive";
import MissionArea from "@/components/mission/MissionArea";



export default function Aboutusv1() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="About Us" subtitle="About Us" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <AboutOne />
        <MissionArea></MissionArea>
         <ChooseFive style_2={true} />
       
       
        <CtaFive />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
