import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BlogDetailsWithoutSidebarArea from "@/components/blog/BlogDetailsWithoutSidebarArea";
import BlogSimilar from "@/components/blog/BlogSimilar";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";


export default function BlogDetailsWithoutSidebar() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="A Step-by-Step Guide to Building <br> Better User Experiences" style_2={true} />
        <BlogDetailsWithoutSidebarArea />
        <BlogSimilar />
        
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
