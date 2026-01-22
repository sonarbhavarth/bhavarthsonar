'use client';

import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Cloud & DevOps',
        skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Oracle Cloud (OCI)', 'CI/CD']
    },
    {
        category: 'Languages',
        skills: ['Python', 'C++', 'Java', 'Shell Scripting', 'JavaScript/TypeScript']
    },
    {
        category: 'Web & Databases',
        skills: ['SQL', 'Redis', 'REST APIs', 'React.js', 'Next.js']
    },
    {
        category: 'Tools & OS',
        skills: ['Git', 'Linux', 'VS Code', 'JIRA']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
