"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type ServiceItem = { icon: IconType; title: string };
type Theme = {
  iconColor: string;
  iconBg: string;
  orbitRing: string;
  dotColor: string;
  centerBg: string;
};

export default function AIOrbit({
  services,
  resetKey,
  theme,
  centerIcon: CenterIcon,
}: {
  services: ServiceItem[];
  resetKey: number;
  theme: Theme;
  centerIcon: IconType;
}) {
  const radius = 160;
  const size = 480;
  const center = size / 2;

  return (
    <div
      key={resetKey}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Dashed orbit ring */}
      <div
        className={`absolute rounded-full border border-dashed ${theme.orbitRing}`}
        style={{ width: radius * 2, height: radius * 2 }}
      />

      {/* Dots between items */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {services.map((_, i) => {
          const between =
            (i * 360) / services.length -
            90 +
            360 / services.length / 2;
          const bx = center + Math.cos((between * Math.PI) / 180) * radius;
          const by = center + Math.sin((between * Math.PI) / 180) * radius;
          return (
            <circle key={i} cx={bx} cy={by} r="4" fill={theme.dotColor} opacity="0.6" />
          );
        })}
      </svg>

      {/* Spinning orbit */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${center}px ${center}px` }}
      >
        {services.map((item, i) => {
          const angle = (i * 360) / services.length - 90;
          const rad = (angle * Math.PI) / 180;
          const x = center + Math.cos(rad) * radius;
          const y = center + Math.sin(rad) * radius;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className="absolute"
              style={{
                width: 80,
                height: 80,
                left: x - 40,
                top: y - 40,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="w-full h-full flex flex-col items-center justify-center gap-1"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <div className={`w-16 h-16 rounded-full border-2 ${theme.iconBg} shadow-lg flex items-center justify-center`}>
                  <Icon className={`text-2xl ${theme.iconColor}`} />
                </div>
                <span className={`text-[11px] font-semibold whitespace-nowrap ${theme.iconColor} mt-1`}>
                  {item.title}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center icon — CenterIcon prop থেকে আসবে, FaRobot নয় */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className={`w-32 h-32 flex items-center justify-center rounded-full ${theme.centerBg} shadow-2xl border-4 border-white`}>
          <CenterIcon className={`text-6xl ${theme.iconColor}`} />
        </div>
      </div>
    </div>
  );
}