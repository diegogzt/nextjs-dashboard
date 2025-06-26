"use client";
import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900 p-0">
      <div className="grow flex-col gap-0 md:flex-row flex justify-around">
        <div className="flex md:w-3/6 flex-col justify-center gap-8 rounded-3xl px-8 py-14 md:px-24 bg-gradient-to-tl from-black via-slate-900 to-slate-800 border border-slate-700 shadow-2xl shadow-black/60 backdrop-blur-md">
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text drop-shadow-2xl"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              DashPilot
            </motion.h1>
            <motion.h2
              className="text-xl md:text-3xl font-medium text-slate-300 drop-shadow-md"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Tu panel de control
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
            >
              intuitivo para gestionar y visualizar datos de manera eficiente.
              Simplifica la toma de decisiones con análisis en tiempo real.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
            className="w-fit"
          >
            <Link
              href="/login"
              className="flex items-center gap-4 self-start rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-7 py-3 text-base font-semibold text-slate-100 shadow-lg shadow-blue-900/30 ring-1 ring-slate-700 transition-all hover:scale-105 hover:bg-slate-800 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Log in</span>{" "}
              <ArrowRightIcon className="w-5 md:w-6 text-blue-400" />
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/6 md:px-28 md:py-12 ">
          <Image
            src="/hero-desktop.png"
            alt="hero image"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="hero image"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
