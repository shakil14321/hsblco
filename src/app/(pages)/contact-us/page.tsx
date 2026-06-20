import SubBanner from "@/components/common/SubBanner";
import ContactComp from "@/components/ContactComp";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <SubBanner title="Contact Us" description="We're here to help you with any questions or concerns you may have." />
      <ContactComp />
    </>
  );
};

export default ContactPage;
