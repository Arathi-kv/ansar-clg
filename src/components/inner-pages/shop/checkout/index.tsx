import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CheckoutArea from "@/components/checkout/CheckoutArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Checkout() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Checkout" subtitle="Checkout" breadcrumb_img="/assets/img/breadcrumb/course-v4-breadcrumb.jpg" />
        <CheckoutArea />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
