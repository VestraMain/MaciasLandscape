import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Award, Shield, Wrench, Snowflake, Trees, Building2, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { motion } from "motion/react";

const heroImages = [
  "https://images.unsplash.com/photo-1682355329957-1046671a47d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBlJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzk1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1764931879811-2fb7b6841e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbGFuZHNjYXBpbmd8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const services = [
    {
      icon: Trees,
      title: "Landscape Installation & Maintenance",
      description: "Professional design, installation, and year-round maintenance of commercial landscapes that enhance property value.",
      features: ["Native Plant Expertise", "Irrigation Systems", "Seasonal Color Programs"],
      image: "https://images.unsplash.com/photo-1741527694859-925f4a4ec88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMG1haW50ZW5hbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Snowflake,
      title: "Commercial Snow & Ice Management",
      description: "24/7 emergency response with state-of-the-art equipment to keep your property safe and accessible.",
      features: ["24/7 Emergency Service", "Pre-Storm Planning", "EPA-Compliant De-icing"],
      image: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "24/7",
    },
    {
      icon: Wrench,
      title: "Specialty Handyman & Facility Support",
      description: "Comprehensive facility maintenance services to keep your commercial property operating at peak efficiency.",
      features: ["Preventive Maintenance", "Rapid Response", "Multi-Trade Capabilities"],
      image: "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1haW50ZW5hbmNlJTIwaGFuZHltYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const trustSignals = [
    { label: "A+ BBB Rating", value: "Since 2015" },
    { label: "Years in Business", value: "10+" },
    { label: "Commercial Projects", value: "500+" },
    { label: "Government Contracts", value: "Active" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden pt-20">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <Badge className="mb-4 bg-[#2d5016] text-white border-none">
              Est. 2015 | A+ BBB Accredited
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building & Maintaining Colorado's Infrastructure Since 2015
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200">
              A+ BBB Accredited | Commercial & Government Grounds Management
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-white text-lg px-8 h-14"
                  style={{ backgroundColor: '#0284c7' }}
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/government">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 h-14"
                >
                  Government Portal
                  <Building2 className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Signals Ticker */}
      <section className="bg-[#2d5016] text-white py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold">{signal.value}</div>
                <div className="text-sm text-green-100">{signal.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Services for Colorado's Front Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional landscape and facility management tailored for commercial properties and government entities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {service.badge && (
                      <Badge className="absolute top-4 right-4 bg-[#ea580c] text-white border-none">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#2d5016] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: '#0284c7' }}
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Procurement Section */}
      <section className="py-20 bg-gradient-to-br from-[#4a5f5e] to-[#2d5016] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Government Procurement Hub
              </h2>
              <p className="text-xl text-green-100">
                Trusted by government agencies across Colorado for reliable, compliant service delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <h3 className="font-semibold mb-4">Registration Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-green-200">UEI:</span>
                    <span className="ml-2 font-mono">XXXXXXXXXXXXXX</span>
                  </div>
                  <div>
                    <span className="text-green-200">CAGE Code:</span>
                    <span className="ml-2 font-mono">XXXXX</span>
                  </div>
                  <div>
                    <span className="text-green-200">SBE/MWBE:</span>
                    <span className="ml-2">Candidate</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <h3 className="font-semibold mb-4">Primary NAICS Codes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-mono mr-2">561730</span>
                    <span className="text-green-200">Landscaping Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-mono mr-2">561790</span>
                    <span className="text-green-200">Other Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-mono mr-2">238990</span>
                    <span className="text-green-200">Specialty Trade</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/government">
                <Button
                  size="lg"
                  className="bg-white text-[#2d5016] hover:bg-gray-100"
                >
                  Download Capability Statement
                  <Award className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted & Certified
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence is backed by industry-leading certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "A+ BBB Accredited" },
              { icon: Shield, label: "Fully Insured" },
              { icon: Star, label: "EPA Compliant" },
              { icon: CheckCircle, label: "Section 508 Ready" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#2d5016]" />
                </div>
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1632076231313-d3ec83a01922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmFkbyUyMGZyb250JTIwcmFuZ2UlMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5016]/90 to-[#1a2e1a]/80" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              Get a free consultation and quote from Colorado's trusted landscape and facility management experts.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-white text-lg px-8 h-14"
                style={{ backgroundColor: '#0284c7' }}
              >
                Request a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
