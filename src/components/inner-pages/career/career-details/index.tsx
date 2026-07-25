import BreadcrumbCareerDetails from "@/components/breadcrumb/BreadcrumbCareerDetails";
import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function CareerDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCareerDetails />
        <CareerDetailsArea />
      
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
