'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
    {
        title: 'AI Sketch Artist',
        description: 'Developed a custom module to Convert Image into Sketch.',
        tags: ['Python', 'AWS S3 Bucket'],
        github: 'https://github.com/sonarbhavarth/image_sketch_app',
    },
    {
        title: 'Government Management System',
        description: 'Built a modular system for Government that tracks Department WORK.',
        tags: ['React.js', 'Tailwind CSS'],
        github: 'https://github.com/sonarbhavarth/Government-Management-System',
    },
    {
        title: 'StockSense AI',
        description: 'Created a stock price prediction model using historical data analysis and efficient data pipelines.',
        tags: ['Python', 'Machine Learning'],
        github: 'https://github.com/sonarbhavarth/stockAI-IOS-APP',
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>

                    <div className="grid gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                            <Github size={18} />
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
