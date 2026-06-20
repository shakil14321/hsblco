import {
  Facebook,
  Linkedin,
  LucideProps,
  Twitter,
  Youtube,
} from "lucide-react";
import { JSX, RefAttributes } from "react";

export const FacebookIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<LucideProps, "ref"> &
    RefAttributes<SVGSVGElement>,
) => <Facebook {...props} />;
export const TwitterIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<LucideProps, "ref"> &
    RefAttributes<SVGSVGElement>,
) => <Twitter {...props} />;
export const LinkedinIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<LucideProps, "ref"> &
    RefAttributes<SVGSVGElement>,
) => <Linkedin {...props} />;
export const YoutubeIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<LucideProps, "ref"> &
    RefAttributes<SVGSVGElement>,
) => <Youtube {...props} />;
