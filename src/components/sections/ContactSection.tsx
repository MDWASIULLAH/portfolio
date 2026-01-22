"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Github, Linkedin, ExternalLink, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-wasiullah-497209257/",
        icon: Linkedin,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "hover:border-blue-500/50"
    },
    {
        name: "GitHub",
        url: "https://github.com/MDWASIULLAH",
        icon: Github,
        color: "text-white",
        bg: "bg-white/5",
        border: "hover:border-white/50"
    }
];

const contactDetails = [
    {
        icon: Mail,
        label: "Email Me",
        value: "mdwasiullah445@gmail.com",
        href: "mailto:mdwasiullah445@gmail.com",
        accent: "text-brand-blue"
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://wa.me/917644002898",
        accent: "text-brand-green" // Assuming brand-green needs definition or inline style, using generic for now
    },
    {
        icon: Phone,
        label: "Call Me",
        value: "+91 76440 02898",
        href: "tel:+917644002898",
        accent: "text-brand-purple"
    }
];

export default function ContactSection() {
    return (
        <Section id="contact" className="items-center justify-center min-h-[80vh] pb-24">

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl w-full text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-medium mb-6">
                        Get in Touch
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
                        Have an idea? <br />
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple">build it.</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        Whether it's a project collaboration, internship opportunity, or just a chat about AI — I'm all ears.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactDetails.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4"
                        >
                            <div className={cn("p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-xl", item.accent)}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-white/40 mb-1">{item.label}</h3>
                                <p className="text-lg font-semibold text-white group-hover:text-brand-blue transition-colors">{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-12 border-t border-white/5"
                >
                    <p className="text-white/40 font-medium">Connect on Socials</p>
                    <div className="flex gap-4">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                target="_blank"
                                className={cn(
                                    "px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 transition-all hover:scale-105",
                                    link.border
                                )}
                            >
                                <link.icon className={cn("w-5 h-5", link.color)} />
                                <span className="text-white font-medium">{link.name}</span>
                                <ArrowRight className="w-4 h-4 text-white/20 -ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
