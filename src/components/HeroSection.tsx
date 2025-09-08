import heroAvatar from '@/assets/hero-avatar.png';
import floatingShapes from '@/assets/floating-shapes.png';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with floating shapes */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={floatingShapes} 
          alt="" 
          className="w-full h-full object-cover scale-110 animate-float"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-neon-magenta/20 rounded-full animate-pulse-neon"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-neon-gold/30 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-neon-cyan/30 transform rotate-45 animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <Sparkles className="text-neon-cyan" size={20} />
              <span className="text-neon-cyan font-medium">Premium Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Premium{' '}
              <span className="gradient-text">Digital Identities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              We design future-ready websites that impress & convert. 
              Experience the power of premium web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="btn-neon"
              >
                See My Work
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-glass"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="relative flex justify-center">
            <div className="relative hover-3d">
              <img 
                src={heroAvatar} 
                alt="Professional Avatar" 
                className="w-80 h-96 object-contain drop-shadow-2xl"
              />
              {/* Neon glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl scale-110 animate-pulse-neon"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-neon-cyan" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;