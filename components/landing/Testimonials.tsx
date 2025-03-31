import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service completely exceeded my expectations!",
    company: "Acme Corp",
  },
  {
    name: "Jane Smith",
    feedback: "Absolutely wonderful experience, highly recommend!",
    company: "Tech Innovators",
  },
  {
    name: "Sam Wilson",
    feedback: "A game-changer for our business. Best decision ever!",
    company: "NextGen Solutions",
  },
  {
    name: "Emma Brown",
    feedback: "Incredible customer service and seamless experience!",
    company: "Creative Minds",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return null;
}
//   <div className="relative w-full  mx-auto h-screen overflow-hidden py-10">
//     <motion.div
//       initial={{ y: "100%", opacity: 0 }}
//       animate={{ y: "0%", opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//       key={index}
//       className="absolute w-full text-center bg-gray-900 text-white p-6 rounded-xl shadow-xl"
//     >
//       <p className="text-lg font-medium italic">
//         "{testimonials[index].feedback}"
//       </p>
//       <h3 className="mt-4 text-xl font-semibold">
//         - {testimonials[index].name}
//       </h3>
//       <p className="text-sm text-gray-400">{testimonials[index].company}</p>
//     </motion.div>
//   </div>
// );
