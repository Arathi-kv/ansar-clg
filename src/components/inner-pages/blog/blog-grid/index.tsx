import BlogGridArea from "@/components/blog/BlogGridArea";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function BlogGrid() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Blog Grid" subtitle="Blog Grid" breadcrumb_img="/assets/img/breadcrumb/blog-grid.jpg" />
        <BlogGridArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
