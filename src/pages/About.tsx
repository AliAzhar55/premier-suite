import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Star, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import { teamMembers } from '@/utils/data';
import { theme } from '@/utils/theme';

const About = () => {
  const stats = [
    { number: '500+', label: 'Properties Sold', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Users },
    { number: '$2B+', label: 'Properties Value', icon: CheckCircle },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from property selection to client relationships.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency are at the core of everything we do. We build trust through authentic relationships.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We see beyond the present to help our clients make informed decisions for their future.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-luxury"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-gradient bg-gradient-secondary">Premier Suite</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Your trusted partner in luxury real estate for over 15 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 with a vision to redefine luxury real estate, Premier Suite has grown 
                  from a boutique agency to one of the most trusted names in premium property sales and investments.
                </p>
                <p>
                  Our journey began with a simple belief: every client deserves personalized attention, 
                  expert guidance, and access to the finest properties in the market. Today, we continue 
                  to uphold these values while embracing innovation and technology.
                </p>
                <p>
                  With over $2 billion in property transactions and a 98% client satisfaction rate, 
                  we've built our reputation on trust, expertise, and exceptional results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                <img
                  src="/api/placeholder/600/600"
                  alt="Premier Suite Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6 p-8 bg-card rounded-2xl shadow-card border border-border/50"
              >
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 card-hover">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Contact */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-border">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a href={`tel:${member.phone}`}>
                          <Phone className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-luxury"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Experience the Premier Suite difference. Let our expert team 
              help you achieve your real estate goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="hero" asChild>
                <a href={`tel:${theme.contact.phone}`}>
                  <Phone className="w-6 h-6 mr-2" />
                  Call Us Today
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="hero"
                className="bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background hover:text-foreground"
                asChild
              >
                <a 
                  href={`https://wa.me/${theme.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;