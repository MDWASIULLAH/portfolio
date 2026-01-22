"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Brain, Code, Terminal, Cpu, Globe, Zap, Database, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
    {
        category: "Artificial Intelligence",
        icon: <Brain className="w-6 h-6 text-brand-purple" />,
        description: "Building intelligent systems that learn and adapt.",
        items: [
            { name: "Machine Learning", level: 90 },
            { name: "Deep Learning", level: 85 },
            { name: "Neural Networks", level: 80 },
            { name: "Python (NumPy, Pandas)", level: 95 },
            { name: "TensorFlow / PyTorch", level: 85 },
        ],
        gradient: "from-brand-purple/20 via-brand-pink/10 to-transparent",
        border: "group-hover:border-brand-purple/50"
    },
    {
        category: "Web Development",
        icon: <Globe className="w-6 h-6 text-brand-blue" />,
        description: "Crafting responsive, high-performance web experiences.",
        items: [
            { name: "Next.js / React", level: 92 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Node.js", level: 85 },
            { name: "Three.js / React Three Fiber", level: 75 },
        ],
        gradient: "from-brand-blue/20 via-brand-cyan/10 to-transparent",
        border: "group-hover:border-brand-blue/50"
    },
    {
        category: "Tools & DevOps",
        icon: <Terminal className="w-6 h-6 text-brand-cyan" />,
        description: "Optimizing workflows and deployment pipelines.",
        items: [
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 80 },
            { name: "VS Code", level: 95 },
            { name: "Figma", level: 85 },
            { name: "Vercel", level: 90 },
        ],
        gradient: "from-brand-cyan/20 via-emerald-500/10 to-transparent",
        border: "group-hover:border-brand-cyan/50"
    },
];

export default function SkillsSection() {
    return (
        <Section id="skills" className="overflow-visible">
            <div className="max-w-7xl w-full relative z-10">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 text-center md:text-right">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink">Arbitrary Stats</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl ml-auto">
                            A breakdown of my technical proficiency and the tools I use to bring ideas to life.
                        </p>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            {/* Card Background & Glow */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                                group.gradient
                            )} />

                            <div className={cn(
                                "relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl",
                                group.border
                            )}>
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                                        {group.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                                            {group.category}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                                    {group.description}
                                </p>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <div key={item.name} className="relative">
                                            <div className="flex justify-between text-sm mb-1.5">
                                                <span className="text-white/80 font-medium">{item.name}</span>
                                                <span className="text-white/40 font-mono text-xs">{item.level}%</span>
                                            </div>

                                            {/* Progress Bar Background */}
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                {/* Animated Progress Bar */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + (i * 0.1), duration: 1, ease: "easeOut" }}
                                                    className={cn(
                                                        "h-full rounded-full bg-gradient-to-r",
                                                        groupIndex === 0 ? "from-brand-purple to-brand-pink" :
                                                            groupIndex === 1 ? "from-brand-blue to-brand-cyan" :
                                                                "from-brand-cyan to-emerald-400"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
