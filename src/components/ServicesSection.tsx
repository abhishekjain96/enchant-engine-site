import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Zap, 
  Smartphone, 
  Monitor,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, responsive websites that captivate and convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Setup',
      description: 'Complete online store solutions with secure payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard']
    },
    {
      icon: Palette,
      title: 'Branding & Portfolio',
      description: 'Professional brand identity design and stunning portfolio websites that showcase your work.',
      features: ['Logo Design', 'Brand Guidelines', 'Portfolio Sites']
    },
    {
      icon: Zap,
      title: 'SEO Optimized Sites',
      description: 'High-performance websites optimized for search engines and user experience.',
      features: ['Technical SEO', 'Page Speed', 'Analytics Setup']
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Mobile-first designs that work perfectly across all devices and screen sizes.',
      features: ['Mobile First', 'Touch Optimized', 'App-like Experience']
    },
    {
      icon: Monitor,
      title: 'Custom Development',
      description: 'Tailored web applications built with cutting-edge technologies and frameworks.',
      features: ['Custom Features', 'API Integration', 'Database Design']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-neon-magenta/5 rounded-full blur-3xl animate-pulse-neon"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-neon-cyan/5 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flip-card h-80">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front glass p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 glass rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-neon-cyan" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back glass p-8 rounded-2xl border border-neon-cyan/30 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6 gradient-text text-center">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <ArrowRight className="text-neon-cyan" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-neon text-sm">
                    Get Started
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

export default ServicesSection;