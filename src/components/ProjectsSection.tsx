import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web', 'E-commerce', 'Branding', 'Portfolio'];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'Modern e-commerce platform with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup including logo and guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Portfolio',
      description: 'Premium portfolio website for a creative professional with 3D animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'Three.js', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'D3.js', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Web',
      description: 'Elegant restaurant website with online reservation and menu showcase.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fashion Store',
      category: 'E-commerce',
      description: 'Luxury fashion e-commerce store with advanced filtering and AR try-on.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Shopify', 'AR.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-neon-gold/20 rotate-12 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-neon-magenta/10 rounded-full animate-pulse-neon"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? 'btn-neon'
                    : 'btn-glass'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden hover-3d border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="p-2 glass rounded-lg hover:bg-neon-cyan/20 transition-colors">
                      <Eye size={20} className="text-white" />
                    </button>
                    <button className="p-2 glass rounded-lg hover:bg-neon-cyan/20 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                    <button className="p-2 glass rounded-lg hover:bg-neon-cyan/20 transition-colors">
                      <Github size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 glass rounded-md text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 btn-glass text-sm">
                    View Project
                  </button>
                  <button className="p-2 glass rounded-lg hover:bg-neon-cyan/20 transition-colors">
                    <Github size={16} className="text-neon-cyan" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;