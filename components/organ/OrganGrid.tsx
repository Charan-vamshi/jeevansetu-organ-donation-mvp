"use client";

import Image from "next/image";

const organs = [
  {
    name: "Kidney",
    image: "/organs/kidney.png",
    cost: "$10,000 – $20,000",
  },
  {
    name: "Heart",
    image: "/organs/heart.png",
    cost: "$50,000 – $100,000",
  },
  {
    name: "Liver",
    image: "/organs/liver.png",
    cost: "$40,000 – $80,000",
  },
  {
    name: "Lungs",
    image: "/organs/lungs.png",
    cost: "$30,000 – $60,000",
  },
  {
    name: "Pancreas",
    image: "/organs/pancreas.png",
    cost: "$25,000 – $50,000",
  },
  {
    name: "Cornea",
    image: "/organs/cornea.png",
    cost: "$5,000 – $10,000",
  },
  {
    name: "Brain",
    image: "/organs/brain.png",
    cost: "$70,000 – $120,000",
  },
];

export default function OrganGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
      {organs.map((organ, i) => (
        <div
          key={i}
          className="relative group rounded-xl overflow-hidden glass p-4"
        >
          {/* Image */}
          <Image
            src={organ.image}
            alt={organ.name}
            width={300}
            height={200}
            className="mx-auto"
          />

          {/* Name */}
          <h3 className="text-center text-white mt-4 text-lg">
            {organ.name}
          </h3>

          {/* 🔥 Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            
            <div className="w-full p-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              
              <p className="text-xs text-gray-300">
                Estimated Surgery Cost
              </p>

              <p className="text-white font-semibold text-lg">
                {organ.cost}
              </p>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
}