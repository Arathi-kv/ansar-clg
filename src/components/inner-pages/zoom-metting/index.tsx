import BreadcrumbZoomMetting from "@/components/breadcrumb/BreadcrumbZoomMetting";
import ZoomMettingArea from "@/components/zoom-metting/ZoomMettingArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function ZoomMetting() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbZoomMetting />
        <ZoomMettingArea />
      
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
