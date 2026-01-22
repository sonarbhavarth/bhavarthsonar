'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">
                        I am a final-year Computer Engineering student with hands-on experience in <strong className="text-gray-900">Cloud Automation and ERP Development</strong>.
                        Proven ability in <strong className="text-gray-900">Python, Docker, and OCI</strong>.
                        I successfully reduced manual deployment time by 40% during my internship at Oracle.
                        I am currently seeking a DevOps role to apply my skills in CI/CD pipelines, infrastructure automation, and scalability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
