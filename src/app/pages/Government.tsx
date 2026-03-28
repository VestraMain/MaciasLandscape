import { Shield, Download, FileText, Building2, CheckCircle, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

export default function Government() {
  const capabilities = [
    {
      title: "Landscape Services",
      naics: "561730",
      description: "Complete grounds management, design, installation, and maintenance for government facilities.",
    },
    {
      title: "Snow & Ice Management",
      naics: "561790",
      description: "24/7 emergency snow removal and de-icing services with full compliance to EPA standards.",
    },
    {
      title: "Facility Maintenance",
      naics: "238990",
      description: "Comprehensive building maintenance and repair services for government infrastructure.",
    },
  ];

  const certifications = [
    { name: "A+ BBB Rating", status: "Active" },
    { name: "EPA Certified", status: "Current" },
    { name: "SBE/MWBE", status: "Candidate" },
    { name: "Section 508 Compliant", status: "Verified" },
  ];

  const pastPerformance = [
    {
      client: "Adams County Government",
      project: "Annual Grounds Maintenance Contract",
      value: "$150K",
      year: "2023-2024",
    },
    {
      client: "City of Brighton",
      project: "Snow Removal Services - Municipal Facilities",
      value: "$85K",
      year: "2024-2025",
    },
    {
      client: "Weld County School District",
      project: "Landscape Installation & Maintenance",
      value: "$120K",
      year: "2023-2024",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2d5016] to-[#1a2e1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Government Procurement Portal
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Trusted provider for federal, state, and local government contracts across Colorado
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#2d5016] hover:bg-gray-100"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Capability Statement
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <FileText className="mr-2 w-5 h-5" />
                Request Contract Info
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Registration & Compliance Information
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border-2 border-[#2d5016]/20">
                  <Building2 className="w-10 h-10 text-[#2d5016] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Business Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-muted-foreground">Legal Name:</span>
                      <span className="font-semibold">Macias Landscape LLC</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-muted-foreground">UEI Number:</span>
                      <span className="font-mono font-semibold">XXXXXXXXXXXXXX</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-muted-foreground">CAGE Code:</span>
                      <span className="font-mono font-semibold">XXXXX</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-muted-foreground">DUNS:</span>
                      <span className="font-mono font-semibold">XX-XXX-XXXX</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Tax ID:</span>
                      <span className="font-mono font-semibold">XX-XXXXXXX</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border-2 border-[#2d5016]/20">
                  <Award className="w-10 h-10 text-[#2d5016] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {cert.name}
                        </span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {cert.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS Codes & Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Core Capabilities & NAICS Codes
            </motion.h2>

            <div className="grid gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <Badge className="bg-[#2d5016] text-white mr-3">
                            NAICS {capability.naics}
                          </Badge>
                          <h3 className="text-xl font-semibold">{capability.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{capability.description}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-4"
            >
              Past Performance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mb-12 text-lg"
            >
              Proven track record serving Colorado government entities
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#2d5016] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left rounded-tl-lg">Client</th>
                    <th className="px-6 py-4 text-left">Project</th>
                    <th className="px-6 py-4 text-left">Contract Value</th>
                    <th className="px-6 py-4 text-left rounded-tr-lg">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {pastPerformance.map((project, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-semibold">{project.client}</td>
                      <td className="px-6 py-4">{project.project}</td>
                      <td className="px-6 py-4 font-semibold text-[#2d5016]">{project.value}</td>
                      <td className="px-6 py-4">{project.year}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4a5f5e] to-[#2d5016] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact our government contracts team to discuss your procurement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#2d5016] hover:bg-gray-100">
                <Download className="mr-2 w-5 h-5" />
                Download Full Capability Statement
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
