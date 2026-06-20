import SubBanner from "@/components/common/SubBanner";
import OurClientComp from "@/components/OurClientComp";
import Head from "next/head";

const OurClientsPage = () => {
  return (
    <>
      <Head>
        <title>Our Clients - HSBLCO LLC</title>
        <meta
          name="description"
          content="Discover our global client reach and integration ecosystem at HSBLCO LLC."
        />
        <meta
          name="description"
          content="Advanced AI Solutions, Blockchain, and Custom Software Engineering for Modern Enterprises."
        />
      </Head>
      <SubBanner
        title="Our Valued Clients"
        description="Building lasting partnerships and delivering exceptional solutions globally."
        bgBanner="black"
      />

      <OurClientComp />
    </>
  );
};

export default OurClientsPage;
