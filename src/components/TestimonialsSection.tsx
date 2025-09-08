import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b15c?w=150&h=150&fit=crop&crop=face",
    content: "WEBKING.AI transformed our online presence completely. The website design exceeded our expectations and significantly boosted our conversions.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, InnovateCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Outstanding professionalism and creativity. They delivered a stunning website that perfectly represents our brand identity.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Director, GrowthLab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The attention to detail and user experience design is remarkable. Our website traffic increased by 150% after the redesign.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Incredible work on our e-commerce platform. Sales increased dramatically with the new user-friendly design.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    content: "Professional, responsive, and delivered on time. The website perfectly captures our restaurant's atmosphere.",
    rating: 5
  },
  {
    id: 6,
    name: "Alex Kumar",
    role: "Consultant, BizAdvise",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Exceptional service and stunning results. WEBKING.AI understood our vision and brought it to life perfectly.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'fill-brand-orange text-brand-orange' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied clients say about their experience working with WEBKING.AI
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center space-x-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card transition-all duration-700 transform ${
                  testimonial.position === 1
                    ? 'scale-110 z-20 opacity-100'
                    : testimonial.position === 0 || testimonial.position === 2
                    ? 'scale-90 z-10 opacity-70'
                    : 'scale-75 z-0 opacity-40'
                }`}
                style={{
                  transform: `
                    scale(${testimonial.position === 1 ? 1.1 : 0.9})
                    rotateY(${testimonial.position === 0 ? '-15deg' : testimonial.position === 2 ? '15deg' : '0deg'})
                    translateZ(${testimonial.position === 1 ? '50px' : '0px'})
                  `,
                }}
              >
                <div className="glass p-8 rounded-2xl border border-border hover-3d max-w-md mx-auto">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange/20"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 text-brand-orange/20" size={24} />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex justify-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === Math.floor(index / 3)
                    ? 'bg-brand-orange scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-brand-orange/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-orange/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;