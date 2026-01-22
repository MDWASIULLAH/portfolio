"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Brain, Network, Cpu } from "lucide-react";

export default function InterestsSection() {
    return (
        <Section id="interests" className="items-center text-center">
            <div className="max-w-3xl space-y-8">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <div className="relative p-4 rounded-full bg-brand-blue/10 border border-brand-blue/20 shadow-[0_0_30px_-5px_#0050FF40]">
                        <Brain className="w-12 h-12 text-brand-blue" />
                    </div>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/90">
                    Artificial Intelligence <br /> & <span className="text-brand-cyan">Machine Learning</span>
                </h2>

                <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                    Focused on understanding <span className="text-white/80">intelligent systems</span>,
                    data-driven models, and real-world AI applications.
                    My passion lies in bridging the gap between theoretical algorithms and impactful engineering.
                </p>

                <div className="flex justify-center gap-8 pt-8 opacity-60">
                    <Network className="w-6 h-6 text-brand-cyan" />
                    <div className="w-2 h-2 rounded-full bg-white/20 my-auto" />
                    <Cpu className="w-6 h-6 text-brand-blue" />
                </div>
            </div>
        </Section>
    );
}
