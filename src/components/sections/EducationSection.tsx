"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const educationData = [
    {
        title: "Bachelor of Technology (B.Tech)",
        institution: "KIIT University",
        location: "Bhubaneswar, Odisha",
        details: "Computer Science & Engineering (CSE)",
        year: "2025 – 2029",
        status: "Currently Studying",
        icon: GraduationCap,
        accent: true,
        stats: [
            { label: "Focus", value: "AI & ML" }
        ]
    },
    {
        title: "Senior Secondary (12th Grade)",
        institution: "LA Garden High School",
        location: "Ranchi, Jharkhand",
        details: "Specialized in Science (PCM) with Computer Science.",
        year: "2024",
        status: "Graduated",
        icon: School,
        accent: false,
    },
    {
        title: "Secondary (10th Grade)",
        institution: "NS DAV Public School",
        location: "Ranchi, Jharkhand",
        details: "Foundation in Science and Mathematics.",
        year: "2022",
        status: "Graduated",
        icon: BookOpen,
        accent: false,
    }
];

export default function EducationSection() {
    return (
        <Section id="education" className="overflow-visible">
            <div className="max-w-5xl w-full">
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Journey</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl">
                            My academic path has been driven by valid curiosity and a desire to understand the core principles of computing.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-purple/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className={cn(
                                    "relative grid md:grid-cols-2 gap-8 md:gap-16 items-center",
                                    index % 2 === 0 ? "md:text-right" : "md:text-left md:flex-row-reverse"
                                )}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-0 md:top-8 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
                                    <div className={cn(
                                        "w-4 h-4 rounded-full border-2 transition-all duration-500",
                                        item.accent
                                            ? "bg-brand-blue border-brand-blue shadow-[0_0_20px_#0050FF]"
                                            : "bg-brand-black border-white/20 group-hover:border-white"
                                    )} />
                                </div>

                                {/* Content Side */}
                                <div className={cn(
                                    "pl-16 md:pl-0",
                                    index % 2 === 0 ? "md:pr-8" : "md:col-start-2 md:pl-8"
                                )}>
                                    <div className={cn(
                                        "group relative p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1",
                                        item.accent && "border-brand-blue/30 bg-brand-blue/5"
                                    )}>
                                        <div className="flex flex-col gap-1 mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className={cn(
                                                "text-brand-cyan font-medium text-lg flex items-center gap-2",
                                                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                            )}>
                                                {item.institution}
                                            </p>
                                        </div>

                                        <div className="space-y-3 text-white/60 text-sm">
                                            <div className="flex items-center gap-2 md:justify-end">
                                                <MapPin className="w-4 h-4" />
                                                <span>{item.location}</span>
                                            </div>
                                            <p className="leading-relaxed">
                                                {item.details}
                                            </p>
                                        </div>

                                        {/* Optional Stats/Badges */}
                                        {item.stats && (
                                            <div className="flex gap-4 mt-6 md:justify-end">
                                                {item.stats.map((stat, i) => (
                                                    <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">
                                                        <div className="text-brand-blue font-bold">{stat.value}</div>
                                                        <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Date/Year Side */}
                                <div className={cn(
                                    "pl-16 md:pl-0 flex flex-col justify-center",
                                    index % 2 === 0 ? "md:col-start-2 md:pl-8 md:items-start" : "md:pr-8 md:items-end md:text-right"
                                )}>
                                    <div className="flex items-center gap-3 text-brand-blue mb-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="font-bold text-xl">{item.year}</span>
                                    </div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/50">
                                        {item.status}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
