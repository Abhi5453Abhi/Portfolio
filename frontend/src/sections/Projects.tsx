import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'AstroNova – Astrology Consultation Web App',
            url: 'https://getastronova.vercel.app/',
            description: 'Built a modern, responsive web application enabling users to connect with professional astrologers for real-time consultations. The platform features a sleek, minimal UI with fast load times and smooth navigation. It supports personalized astrology services including horoscope insights, session booking, and secure interactions. Designed with a focus on user experience, scalability, and mobile responsiveness.',
            tags: ['React', 'Next.js', 'Tailwind CSS', 'WebRTC'], // Inferred tags based on description
            image: '/astronova-preview.png' // Astronova landing page preview
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 md:px-6 bg-surface/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Showcasing recent web applications and technical solutions.
                    </p>
                </div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-green/30 transition-all duration-300 flex flex-col md:flex-row"
                        >
                            {/* Project Image Area */}
                            <div className="w-full md:w-1/2 aspect-video bg-gray-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500"><span class="text-lg font-medium">Project Preview</span></div>';
                                            }
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <span className="text-lg font-medium">Project Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-green transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-secondary leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 text-accent-green text-sm rounded-full border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-black font-bold rounded-lg hover:bg-accent-green-dark transition-all duration-300 shadow-glow hover:shadow-lg transform hover:-translate-y-1"
                                    >
                                        Visit Website <FaExternalLinkAlt size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
