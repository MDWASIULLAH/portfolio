"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Smart India Hackathon (SIH)",
        category: "National Level Hackathon",
        description: "Participated in one of the world's biggest open innovation models. Solved real-time problems with integrated AI & Web solutions.",
        tags: ["Team Leadership", "Innovation", "Problem Solving"]
    },
    {
        title: "AI-Powered Chatbot",
        category: "Web Application",
        description: "A multimodal AI assistant integrating voice, text, and visual inputs for a seamless user experience.",
        tags: ["OpenAI API", "JavaScript", "UI/UX"]
    },
    {
        title: "Personal Brand Experience",
        category: "Design Engineering",
        description: "This portfolio website itself—crafted with Next.js, Three.js, and Framer Motion to demonstrate high-end frontend capabilities.",
        tags: ["Next.js", "WebGL", "Performance"]
    }
];

export default function ProjectsSection() {
    return (
        <Section id="projects" className="items-start">
            <div className="w-full max-w-6xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
                    Learning through <br /> <span className="text-brand-cyan">real-world challenges</span>.
                </h2>
                <p className="text-xl text-white/60 mb-16 max-w-2xl">
                    Each project strengthens my problem-solving mindset.
                    From national hackathons to personal experiments.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <span className="text-xs font-semibold tracking-wider text-brand-cyan uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/50" />
                                </h3>
                                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-white/40 bg-black/20 px-2 py-1 rounded">
                                            {tag}
                                        </span>
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
