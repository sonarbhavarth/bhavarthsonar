'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';

const Card3D = ({ onClose }: { onClose: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-1 rounded-3xl shadow-2xl cursor-pointer"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                    className="relative w-80 h-96 sm:w-96 sm:h-[30rem] rounded-[22px] overflow-hidden bg-slate-950 border border-slate-700/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                    <Image
                        src="/bhavarthsonar/profile-photo.jpg"
                        alt="Bhavarth Sonar"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-z-10">
                        <h3 className="text-2xl font-bold text-white mb-1">Bhavarth Sonar</h3>
                        <p className="text-emerald-400 font-medium">Software Developer</p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-white text-slate-900 rounded-full p-2 hover:bg-zinc-200 transition-colors shadow-lg z-30"
                >
                    <X size={20} />
                </button>
            </motion.div>
        </motion.div>
    );
};

export default function Hero() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <AnimatePresence>
                {isProfileOpen && <Card3D onClose={() => setIsProfileOpen(false)} />}
            </AnimatePresence>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Profile Photo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer relative group"
                            onClick={() => setIsProfileOpen(true)}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                {/* Optional: Add an icon like 'Expand' here specifically on hover if desired, 
                                    but keeping it clean for now per "no visual noise" rule. */}
                            </div>
                            <Image
                                src="/bhavarthsonar/profile-photo.jpg"
                                alt="Bhavarth Sonar"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                                priority
                                unoptimized // Force unoptimized to bypass any basePath issues with next/image
                            />
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                            Bhavarth Sonar
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-6">
                            Software Developer
                        </p>

                        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                            Final-year Computer Engineering student with hands-on experience in Full Stack Development, Cloud Automation, and DevOps.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </a>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://github.com/sonarbhavarth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/bhavarth-sonar-9883641b5/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:Sonarbhavarth@gmail.com"
                                    className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
