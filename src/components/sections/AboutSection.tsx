"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <Section id="overview" className="items-start md:items-start text-left relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl w-full grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-center relative z-10">

                {/* Profile Image with "Colorful" Frame - Removed Grayscale */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative"
                >
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink rounded-2xl blur opacity-70 animate-pulse" />

                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                        <Image
                            src="/profile.jpg"
                            alt="MD WASIULLAH"
                            width={500}
                            height={600}
                            className="object-cover w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>

                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">curiosity</span>. <br />
                        Grounded in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">engineering</span>.
                    </h2>

                    <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                        <p>
                            I am a Computer Science Engineering student with a strong interest in <strong className="text-white">AI/ML</strong>,
                            and hands-on experience in web technologies like HTML, CSS, JavaScript,
                            and Python. My work sits at the intersection of logic and creativity.
                        </p>
                        <p>
                            I focus on learning by building — combining rigorous engineering principles
                            with design thinking to create intelligent, future-ready applications.
                            Whether it's a predictive model or an immersive web experience, I aim for precision.
                        </p>
                    </div>

                    {/* Tags/Badges */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {['Artificial Intelligence', 'Web Development', 'Creative Coding'].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-white/80 hover:border-brand-purple/50 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
