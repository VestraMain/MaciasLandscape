import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a frontend-only implementation
    // In production, this would send data to a backend API
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#2d5016] to-[#1a2e1a] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-green-100">
              Let's discuss how we can help transform and maintain your property
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(303) 555-1234"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="landscape-installation">Landscape Installation</option>
                      <option value="landscape-maintenance">Landscape Maintenance</option>
                      <option value="snow-removal">Snow & Ice Management</option>
                      <option value="facility-support">Facility Support</option>
                      <option value="government-contract">Government Contract</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, property size, specific needs, and timeline..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-white"
                    style={{ backgroundColor: '#0284c7' }}
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond to your inquiry within 24 hours during business days.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Details Card */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#2d5016]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+13035551234" className="text-muted-foreground hover:text-[#2d5016]">
                        (303) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#2d5016]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:info@maciaslandscape.com" className="text-muted-foreground hover:text-[#2d5016]">
                        info@maciaslandscape.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#2d5016]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Office Location</p>
                      <p className="text-muted-foreground">
                        123 Commerce Street<br />
                        Brighton, CO 80601
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#2d5016]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 7:00 AM - 5:00 PM<br />
                        Saturday: 8:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Emergency Service Card */}
              <Card className="p-6 bg-gradient-to-br from-[#ea580c] to-[#dc2626] text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-100">24/7 Emergency Service</p>
                    <p className="text-lg font-bold">Snow Removal Hotline</p>
                  </div>
                </div>
                <p className="text-sm text-orange-100 mb-4">
                  For urgent snow and ice removal needs, call our emergency line anytime.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-white text-[#ea580c] hover:bg-gray-100"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Emergency Line
                </Button>
              </Card>

              {/* Service Area Card */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2d5016] mr-2" />
                    Adams County
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2d5016] mr-2" />
                    Weld County
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2d5016] mr-2" />
                    Brighton & Surrounding Areas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2d5016] mr-2" />
                    Colorado Front Range
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Visit Our Office
            </h2>
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-[#2d5016]" />
                  <p className="text-lg font-semibold mb-2">123 Commerce Street, Brighton, CO 80601</p>
                  <p className="text-sm">Interactive map would be integrated here in production</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
