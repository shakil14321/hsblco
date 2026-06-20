import { TEAM_MEMBERS } from "@/constant/ourTeamData";
import States from "../States";
import { OurPartners } from "./OurPartners";
import OurTeam from "./OurTeam";
import { SuccessStories } from "./SuccessStories";
import { WhitePapers } from "./WhitePares";

const AboutUsComp = () => {
  return (
    <>
      <States />
      <OurTeam data={TEAM_MEMBERS} />
      <OurPartners />
      <WhitePapers />
      <SuccessStories />
    </>
  );
};

export default AboutUsComp;
