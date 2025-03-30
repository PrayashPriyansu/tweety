import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import { useEffect } from "react";

const colors = [
  "#DD335C", // Bold Red (Initial Color)
  "#FF5E72", // Soft Warm Pink
  "#FFD700", // Gold
  "#FFFF70", // Soft Yellow
  "#00FFD5", // Cyan-Teal
  "#00FFFF", // Bright Aqua
  "#DD335C", // Loop Back to Red
];

export default function AuroraEffect() {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`
        radial-gradient(125% 125% at 50% 0%, #020617 40%, ${color})
    `;

  useEffect(function () {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div>
      <motion.div
        style={{
          backgroundImage,
        }}
        className="absolute inset-0 overflow-hidden -z-10"
      ></motion.div>

      <div className="bg-black absolute inset-0 -z-30"></div>
    </div>
  );
}
