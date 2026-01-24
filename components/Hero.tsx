'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Profile Photo */}
                        <div className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden">
                            <Image
                                src="/bhavarthsonar/profile-photo.jpg"
                                alt="Bhavarth Sonar"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                                priority
                                unoptimized // Force unoptimized to bypass any basePath issues with next/image
                            />
                        </div>

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
