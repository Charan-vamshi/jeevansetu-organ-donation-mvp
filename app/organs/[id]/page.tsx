"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const organs = [
  {
    id: "kidney",
    name: "Kidney",
    description:
      "The kidney removes waste and excess fluids from the blood and helps regulate blood pressure.",
    image: "/organs/kidney.png",
  },
  {
    id: "heart",
    name: "Heart",
    description:
      "The heart pumps blood throughout the body and supports circulation and oxygen delivery.",
    image: "/organs/heart.png",
  },
  {
    id: "liver",
    name: "Liver",
    description:
      "The liver processes nutrients, detoxifies chemicals, and produces essential proteins.",
    image: "/organs/liver.png",
  },
  {
    id: "lungs",
    name: "Lungs",
    description:
      "The lungs enable breathing by exchanging oxygen and carbon dioxide.",
    image: "/organs/lungs.png",
  },
  {
    id: "pancreas",
    name: "Pancreas",
    description:
      "The pancreas regulates blood sugar and aids digestion through enzyme production.",
    image: "/organs/pancreas.png",
  },
  {
    id: "cornea",
    name: "Cornea",
    description:
      "Cornea donation restores vision by replacing damaged or diseased corneal tissue.",
    image: "/organs/cornea.png",
  },
];

export default function OrganDetailsPage() {
  const params = useParams();
  const organ = organs.find((o) => o.id === params.id);

  if (!organ) return null;

  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto">
      <div className="glass p-8 grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-80">
          <Image
            src={organ.image}
            alt={organ.name}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-white">
            {organ.name}
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {organ.description}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="glass-button">Request Organ</button>
            <button className="glass-button">Donate Organ</button>
          </div>
        </div>
      </div>
    </main>
  );
}
