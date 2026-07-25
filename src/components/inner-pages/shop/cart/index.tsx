import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CartArea from "@/components/cart/CartArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Cart() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Cart" subtitle="Cart" breadcrumb_img="/assets/img/breadcrumb/course-v4-breadcrumb.jpg" />
        <CartArea />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
