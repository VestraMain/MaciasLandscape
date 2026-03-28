import { Trees, Snowflake, Wrench, Droplets, Hammer, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

export default function Services() {
  const mainServices = [
    {
      icon: Trees,
      title: "Landscape Installation & Maintenance",
      description: "Transform your commercial property with professional landscape design and ongoing care that enhances curb appeal and property value.",
      image: "https://images.unsplash.com/photo-1741527694859-925f4a4ec88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMG1haW50ZW5hbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        "Custom landscape design & consultation",
        "Native plant selection & installation",
        "Seasonal color programs",
        "Turf management & lawn care",
        "Mulching & edging",
        "Tree & shrub care",
        "Fertilization programs",
        "Weed control & pest management",
      ],
    },
    {
      icon: Snowflake,
      title: "Commercial Snow & Ice Management",
      description: "Keep your property safe and accessible all winter long with our 24/7 emergency snow removal and de-icing services.",
      image: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        "24/7 emergency response",
        "Pre-storm planning & monitoring",
        "Snow plowing & hauling",
        "Sidewalk & parking lot clearing",
        "EPA-compliant de-icing",
        "Anti-icing treatments",
        "Detailed storm reports",
        "Multi-location management",
      ],
      badge: "24/7 Emergency",
      badgeColor: "bg-[#ea580c]",
    },
    {
      icon: Wrench,
      title: "Specialty Handyman & Facility Support",
      description: "Comprehensive facility maintenance services to keep your commercial property operating smoothly and looking its best.",
      image: "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1haW50ZW5hbmNlJTIwaGFuZHltYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      services: [
        "General repairs & maintenance",
        "Pressure washing",
        "Parking lot maintenance",
        "Signage installation",
        "Fence repair & installation",
        "Gutter cleaning",
        "Exterior painting",
        "Emergency repairs",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Droplets,
      title: "Irrigation Management",
      description: "Water-efficient irrigation systems designed for Colorado's climate.",
    },
    {
      icon: Hammer,
      title: "Hardscape Construction",
      description: "Patios, walkways, retaining walls, and more.",
    },
    {
      icon: Shield,
      title: "Property Inspections",
      description: "Regular site assessments and maintenance reports.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1682355329957-1046671a47d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBlJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzk1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1a]/95 to-[#2d5016]/85" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              Commercial & Government Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Landscape & Facility Management Solutions
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Professional services tailored for Colorado's commercial properties and government facilities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-white" style={{ backgroundColor: '#0284c7' }}>
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.badge && (
                      <Badge className={`absolute top-6 right-6 ${service.badgeColor || "bg-[#2d5016]"} text-white border-none text-lg px-4 py-2`}>
                        {service.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to meet all your property maintenance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#2d5016]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Choose Macias Landscape?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "A+", label: "BBB Rating" },
                { number: "24/7", label: "Emergency Service" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2d5016] to-[#1a2e1a] text-white"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4a5f5e] to-[#2d5016] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact us today for a free consultation and custom quote for your property.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-white" style={{ backgroundColor: '#0284c7' }}>
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
