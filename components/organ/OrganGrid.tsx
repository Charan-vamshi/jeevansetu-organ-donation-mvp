"use client";

import { motion } from "framer-motion";
import OrganCard from "./OrganCard";
import { staggerContainer } from "@/components/animations/motionVariants";

const organs = [
  {
    name: "Kidney",
    description: "Helps remove waste and excess fluids from the blood.",
    image: "/organs/kidney.png",
  },
  {
    name: "Heart",
    description: "Pumps blood throughout the body and supports circulation.",
    image: "/organs/heart.png",
  },
  {
    name: "Liver",
    description: "Processes nutrients and removes toxins from the body.",
    image: "/organs/liver.png",
  },
  {
    name: "Lungs",
    description: "Responsible for oxygen exchange and breathing.",
    image: "/organs/lungs.png",
  },
  {
    name: "Pancreas",
    description: "Regulates blood sugar and aids digestion.",
    image: "/organs/pancreas.png",
  },
  {
    name: "Cornea",
    description: "Restores vision through corneal transplantation.",
    image: "/organs/cornea.png",
  },
];

const MotionDiv = motion.div as any;

export default function OrganGrid() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-10">
        Available Organs
      </h2>

      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {organs.map((organ, index) => (
          <OrganCard
            key={index}
            name={organ.name}
            description={organ.description}
            image={organ.image}
          />
        ))}
      </MotionDiv>
    </section>
  );
}
