"use client";

import dynamic from "next/dynamic";

const ClientReach = dynamic(
  () => import("@/components/OurClientComp/ClientReach"),
  { ssr: false },
);

const IntegrationEcosystem = dynamic(
  () => import("@/components/OurClientComp/IntegrationEcosystem"),
  { ssr: false },
);

const OurClientComp = () => {
  return (
    <>
      <ClientReach />
      <IntegrationEcosystem />
    </>
  );
};

export default OurClientComp;
