'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <GraduationCap size={24} className="text-blue-600" />
                                Education
                            </h2>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white border border-gray-200 rounded-lg p-4"
                                >
                                    <h3 className="font-semibold text-gray-900">B.Tech in Computer Engineering</h3>
                                    <p className="text-sm text-gray-500">Atmiya University, Rajkot • 2026</p>
                                    <p className="text-blue-600 text-sm font-medium mt-1">CGPA: 7.15</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="bg-white border border-gray-200 rounded-lg p-4"
                                >
                                    <h3 className="font-semibold text-gray-900">Diploma in Information Technology</h3>
                                    <p className="text-sm text-gray-500">Gujarat Technological University</p>
                                    <p className="text-blue-600 text-sm font-medium mt-1">CGPA: 7.15</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Award size={24} className="text-blue-600" />
                                Certifications
                            </h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="bg-white border border-gray-200 rounded-lg p-4"
                            >
                                <ul className="space-y-3">
                                    {[
                                        'Oracle Cloud Infrastructure Foundations Associate',
                                        'Google Cloud Platform (GCP) Badges',
                                        'MongoDB Basics'
                                    ].map((cert, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
