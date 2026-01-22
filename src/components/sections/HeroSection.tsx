"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function HeroSection() {
    return (
        <Section className="h-screen flex flex-col items-center justify-center text-center z-10 pt-32 md:pt-0 bg-gradient-mesh">
            <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl"
            >
                MD WASIULLAH
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-6 text-xl md:text-2xl text-white/60 max-w-2xl font-light"
            >
                Building intelligent systems for a <span className="text-brand-blue font-normal">smarter future</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-12 flex flex-col md:flex-row gap-4 text-sm text-white/40 tracking-widest uppercase"
            >
                <span>CSE Student</span>
                <span className="hidden md:block">•</span>
                <span>AI/ML Enthusiast</span>
                <span className="hidden md:block">•</span>
                <span>Web Developer</span>
            </motion.div>
        </Section>
    );
}
