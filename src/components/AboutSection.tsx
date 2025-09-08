import { Download, Code, Palette, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Delivered' },
    { icon: Palette, number: '3+', label: 'Years Experience' },
    { icon: Zap, number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-neon-magenta/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-neon-cyan/10 rotate-45 animate-pulse-neon"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Avatar Placeholder */}
          <div className="relative">
            <div className="glass p-8 rounded-2xl hover-3d">
              <div className="w-full h-80 bg-gradient-neon opacity-20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 animate-pulse-neon"></div>
                <div className="relative z-10 text-center">
                  <Code size={64} className="text-neon-cyan mx-auto mb-4" />
                  <p className="text-lg gradient-text font-semibold">3D Professional Avatar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">WebKing.AI</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I'm a passionate web developer and designer specializing in creating 
                premium digital experiences that make brands stand out in the digital landscape.
              </p>
              <p>
                With expertise in modern web technologies and a keen eye for design, 
                I transform ideas into stunning, functional websites that drive results.
              </p>
              <p>
                Every project is crafted with attention to detail, ensuring optimal 
                performance, beautiful aesthetics, and exceptional user experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 glass rounded-lg mb-2">
                    <stat.icon className="text-neon-cyan" size={24} />
                  </div>
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button className="btn-neon flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;