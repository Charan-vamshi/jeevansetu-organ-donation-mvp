"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hoverLift, fadeUp } from "@/components/animations/motionVariants";

type OrganCardProps = {
  name: string;
  description: string;
  image: string;
};

const MotionDiv = motion.div as any;

export default function OrganCard({
  name,
  description,
  image,
}: OrganCardProps) {
  return (
    <Link href={`/organs/${name.toLowerCase()}`}>
      <MotionDiv
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...hoverLift}
        className="glass overflow-hidden cursor-pointer group max-w-sm mx-auto"
      >
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
            className="object-contain bg-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>

          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </MotionDiv>
    </Link>
  );
}
