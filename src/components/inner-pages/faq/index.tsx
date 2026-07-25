import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import FaqArea from "@/components/faq/FaqArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Faq() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="Faq’s" subtitle2="Faq’s" style_3={true} />
        <FaqArea />
       
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
