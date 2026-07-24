import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactArea from "@/components/contact/ContactArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Contactus() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Contact us" subtitle="Contact us" breadcrumb_img="/assets/img/breadcrumb/contact.jpg" />
        <ContactArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
