import BlogSimilar from "@/components/blog/BlogSimilar";
import BreadcrumbEventDetails from "@/components/breadcrumb/BreadcrumbEventDetails";
import EventDetailsArea from "@/components/event/EventDetailsArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function EventDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbEventDetails />
        <EventDetailsArea />    
        <BlogSimilar />    
       
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
