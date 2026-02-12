"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  buttonGlow,
} from "@/components/animations/motionVariants";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0B0F14] to-[#020617] px-6">
      {/* HERO CONTENT */}
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            JeevanSetu
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Connecting donors, hospitals, and patients through organ donation awareness.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button {...buttonGlow} className="glass-button">
              Request
            </motion.button>

            <motion.button {...buttonGlow} className="glass-button">
              Donate
            </motion.button>

            <Link href="/help">
              <motion.button {...buttonGlow} className="glass-button">
                Help
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-20"
      >
        {[
          { label: "Registered Donors", value: "1,240+" },
          { label: "Active Requests", value: "320+" },
          { label: "Hospitals Connected", value: "45+" },
          { label: "Lives Impacted", value: "890+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeUp as any}
            className="glass p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/10"
          >
            <h3 className="text-3xl font-semibold text-white">
              {stat.value}
            </h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
