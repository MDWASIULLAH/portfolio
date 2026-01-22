"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Users, Download, X, Maximize2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const certificates = [
    {
        title: "Bhubaneswar Tech Workshop",
        issuer: "Kshitij, IIT Kharagpur x KIIT",
        date: "December 2025",
        image: "/assets/kshitij-cert.jpg",
        description: "Participated in the workshop organized by Kshitij, IIT Kharagpur.",
        icon: Award,
        color: "text-brand-cyan",
        bgColor: "bg-brand-cyan/10",
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "Ministry of Education, Govt. of India",
        date: "September 2025",
        image: "/assets/sih-cert.jpg",
        description: "Participated in the internal hackathon, contributing to innovative problem solving.",
        icon: Award,
        color: "text-brand-blue",
        bgColor: "bg-brand-blue/10",
        teamImage: "/assets/sih-team.jpg",
        role: "Team Leader"
    },
    {
        title: "AI Odyssey 2025",
        issuer: "Konnexions - KIIT University",
        date: "September 2025",
        image: "/assets/ai-odyssey-cert.jpg",
        description: "Successfully participated in AI Odyssey, showcasing skills in AI & Web Technologies.",
        icon: Award,
        color: "text-brand-purple",
        bgColor: "bg-brand-purple/10",
    },
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "2024",
        image: null,
        description: "Mastered the foundations of Deep Learning and Neural Networks.",
        icon: Award,
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10",
    },

];

export default function CertificatesSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Section id="certificates" className="items-center overflow-visible">
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={selectedImage}
                                    alt="Certificate Full View"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <a
                                href={selectedImage}
                                download
                                className="mt-4 flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full font-medium transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Certificate
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 mb-16 text-center">
                    Certifications & <span className="text-brand-blue">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col"
                        >
                            {/* Image Area if available */}
                            {cert.image && (
                                <div
                                    className="relative h-48 w-full overflow-hidden border-b border-white/10 cursor-pointer"
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />

                                    {/* Hints overlay */}
                                    <div className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-lg text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Maximize2 className="w-4 h-4" />
                                    </div>
                                </div>
                            )}

                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-white/60">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    <div className={cn("p-2 rounded-lg", cert.bgColor, cert.color)}>
                                        <cert.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                                    {cert.description}
                                </p>

                                {/* Team Photo Section for SIH */}
                                {cert.teamImage && (
                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-brand-purple" />
                                                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                                                    {cert.role === "Team Leader" ? "Team Leader" : "Team Photo"}
                                                </span>
                                            </div>
                                            {cert.role && (
                                                <span className="text-xs font-bold text-brand-purple bg-brand-purple/10 px-2 py-1 rounded">
                                                    {cert.role}
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="relative h-32 w-full rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-brand-purple/50 transition-colors"
                                            onClick={() => setSelectedImage(cert.teamImage!)}
                                        >
                                            <Image
                                                src={cert.teamImage}
                                                alt="Team Photo"
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                            <div className="absolute top-2 right-2 p-1 bg-black/50 rounded text-white/70 opacity-0 hover:opacity-100 transition-opacity">
                                                <Maximize2 className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
