import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import PrivacyPolicyArea from "@/components/privacy-policy/PrivacyPolicyArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="Privacy Policy" subtitle2="Privacy Policy" style_3={true} />
        <PrivacyPolicyArea />       
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
