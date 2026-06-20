import { PARTNERS_LOGO } from "@/constant/partnersData";
import Image from "next/image";
import Marquee from "react-fast-marquee";


export const OurPartners = () => (
    <section className="py-20 mb-20 mx-auto">
        <div className="text-center ">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                just checkout us!
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-25 font-black text-secondary tracking-tighter max-w-3xl mx-auto leading-[1.1]">
                Our Global <span className="text-primary">Partners</span>
            </h2>
            <Marquee speed={50} >
                {PARTNERS_LOGO.map((partner, idx) => (
                    <div key={idx} className="mx-12 transition-all opacity-60 hover:opacity-100">
                        <Image width={250} height={250} src={partner.logo} alt={partner.name} className="" />
                    </div>
                ))}
            </Marquee>
        </div>
    </section>
);