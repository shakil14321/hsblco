import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  fn?: () => void;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  className?: string;
}

const CustomButton = ({
  title,
  className,
  variant,
  fn,
}: Props) => {
  return (
    <Button
      variant={variant}
      onClick={fn && fn}
      className={`${className} relative overflow-hidden px-8 h-12 rounded-full font-semibold transition-all flex items-center gap-2 group`}
    >
      <span>{title}</span>

      <span className="flex items-center justify-between w-6 h-6 overflow-hidden">
        <ArrowRight
          size={18}
          className="-translate-x-4 transition-transform duration-300 ease-linear group-hover:translate-x-0"
        />
        <ArrowRight
          size={18}
          className="-translate-x-3 transition-transform duration-300 ease-linear group-hover:translate-x-4"
        />
      </span>
    </Button>
  );
};

export default CustomButton;
