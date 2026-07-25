import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv1Area from "@/components/course/Coursesv1Area";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Courses() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses" subtitle="Courses" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <Coursesv1Area />        
        
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
