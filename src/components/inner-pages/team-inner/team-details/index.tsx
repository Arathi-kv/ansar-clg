import BreadcrumbTeamDetails from "@/components/breadcrumb/BreadcrumbTeamDetails";
import TeamDetailsArea from "@/components/team/TeamDetailsArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbTeamDetails />
        <TeamDetailsArea />
      
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
