"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Trophy, Code, Zap } from "lucide-react";

export default function ExperienceSection() {
    return (
        <Section id="experience" className="items-end text-right">
            <div className="w-full max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-6">
                    Hackathons & <br /> <span className="text-brand-cyan">Experiments</span>
                </h2>
                <p className="text-xl text-white/60 mb-16 max-w-2xl ml-auto">
                    Pushing boundaries through rapid innovation and collaborative coding challenges.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Smart India Hackathon",
                            subtitle: "National Finalist",
                            icon: Trophy,
                            gradient: "from-purple-500 to-blue-500"
                        },
                        {
                            title: "Darkroot Hackathon",
                            subtitle: "Participant",
                            icon: Code,
                            gradient: "from-cyan-500 to-teal-500"
                        },
                        {
                            title: "Innovation Challenges",
                            subtitle: "Continuous Learning",
                            icon: Zap,
                            gradient: "from-orange-500 to-red-500"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 overflow-hidden transition-all hover:-translate-y-1"
                        >
                            <div className={`absolute top-0 right-0 p-32 rounded-full opacity-5 bg-gradient-to-br ${item.gradient} blur-3xl group-hover:opacity-10 transition-opacity`} />

                            <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right">
                                <div className="p-3 rounded-xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 text-white/80" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-white/50">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
