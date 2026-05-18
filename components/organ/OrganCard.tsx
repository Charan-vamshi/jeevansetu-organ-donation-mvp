"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const costMap: Record<string, string> = {
  Kidney: "$10,000 – $20,000",
  Heart: "$50,000 – $100,000",
  Liver: "$40,000 – $80,000",
  Lungs: "$30,000 – $60,000",
  Pancreas: "$25,000 – $50,000",
  Cornea: "$5,000 – $10,000",
};

export default function OrganCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative glass rounded-2xl overflow-hidden group cursor-pointer
                 border border-white/5 hover:border-white/15 transition-colors duration-300 flex flex-col"
    >
      {/* Image container — fixed height, no overflow */}
      <div className="relative w-full h-52 bg-black/30 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
        />
      </div>

      {/* Content — sits below image, never overlaps */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white text-lg font-semibold tracking-wide">{name}</h3>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">
            Transplant
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-auto pt-3" />

        {/* Cost row */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Est. Surgery Cost</p>
          <p className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
            {costMap[name] ?? "N/A"}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full
                      bg-gradient-to-r from-white/30 via-white/10 to-transparent
                      transition-all duration-500 ease-out" />
    </motion.div>
  );
}