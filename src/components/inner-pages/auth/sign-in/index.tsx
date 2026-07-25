import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";
import LoginForm from "@/components/form/LoginForm";




export default function Signin() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="Login" subtitle2="Login" style_3={true} />
        <LoginForm />            
       
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
