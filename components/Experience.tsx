'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        company: 'Oracle',
        role: 'Cloud Engineer Intern',
        period: '3 Months',
        location: 'Remote',
        description: [
            'Automated OCI environment provisioning using Python & Shell scripts, cutting setup time by 40%.',
            'Monitored cloud infrastructure health and resolved critical alerts to ensure high availability.'
        ]
    },
    {
        company: 'App Maddy',
        role: 'DevOps Engineer Intern',
        period: '1 Month',
        location: 'Remote',
        description: [
            'Collaborated on setting up CI/CD pipelines to streamline code deployment.',
            'Containerized applications using Docker and managed version control with Git.'
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border-l-2 border-blue-500 pl-6"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Briefcase size={16} className="text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                                </div>

                                <h4 className="text-gray-700 font-medium mb-2">{exp.role}</h4>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-1.5">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                            <span className="mt-2 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
