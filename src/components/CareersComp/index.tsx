import { JOB_LISTINGS } from "@/constant/careersData";

import JobsGrid from "./JobsGrid";
import { CareerFormSection } from "./JobForm";
import SubBanner from "../common/SubBanner";
import { SuccessStories } from "../AboutUsComp/SuccessStories";



export default function Careers() {
    return (
        <>
            <SubBanner title="Career" description="" />

            {/* Jobs Grid */}
            <JobsGrid data={JOB_LISTINGS} />

            {/* Perks / Why Join Us */}
            <CareerFormSection />
            <SuccessStories />
        </>
    );
}