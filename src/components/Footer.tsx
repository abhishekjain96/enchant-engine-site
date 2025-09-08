import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-neon opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold gradient-text">WebKing.AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating premium digital experiences that elevate brands and drive success. 
              Your vision, our expertise, exceptional results.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-neon-cyan/20 transition-all duration-300 hover-3d group"
                >
                  <social.icon 
                    className="text-neon-cyan group-hover:scale-110 transition-transform" 
                    size={20} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@webking.ai</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2025 WebKing.AI - All Rights Reserved</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="text-neon-magenta" size={16} /> by WebKing.AI
            </span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-glass px-4 py-2 text-sm"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-neon-gold/20 rotate-45 animate-float"></div>
      <div className="absolute top-10 right-20 w-8 h-8 bg-neon-magenta/30 rounded-full animate-pulse-neon"></div>
    </footer>
  );
};

export default Footer;