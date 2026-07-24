import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventGridArea from "@/components/event/EventGridArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function EventGrid() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Event Grid" subtitle="Event Grid" breadcrumb_img="/assets/img/breadcrumb/event-1.png" />
        <EventGridArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
