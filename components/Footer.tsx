'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-transparent border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="font-semibold text-gray-900">Bhavarth Sonar</p>
                        <p className="text-sm text-gray-500">Software Developer</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/sonarbhavarth" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Github">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/bhavarth-sonar-9883641b5/" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:Sonarbhavarth@gmail.com" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Bhavarth Sonar
                </div>
            </div>
        </footer>
    );
}
