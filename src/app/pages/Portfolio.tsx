import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "landscape", label: "Landscape" },
    { id: "snow", label: "Snow Removal" },
    { id: "facility", label: "Facility" },
  ];

  const projects = [
    {
      id: 1,
      title: "Corporate Campus Transformation",
      category: "landscape",
      location: "Adams County, CO",
      year: "2024",
      client: "Fortune 500 Tech Company",
      description: "Complete landscape redesign featuring native plants, water-efficient irrigation, and sustainable hardscaping.",
      beforeImage: "https://images.unsplash.com/photo-1682355329957-1046671a47d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBlJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzk1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1741527694859-925f4a4ec88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMG1haW50ZW5hbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Commercial", "Sustainable", "Irrigation"],
    },
    {
      id: 2,
      title: "Municipal Facility Snow Management",
      category: "snow",
      location: "Brighton, CO",
      year: "2023-2024",
      client: "City of Brighton",
      description: "24/7 winter maintenance program for city facilities, parking lots, and municipal buildings.",
      beforeImage: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Government", "24/7 Service", "Winter"],
    },
    {
      id: 3,
      title: "Office Building Grounds Maintenance",
      category: "landscape",
      location: "Weld County, CO",
      year: "2023",
      client: "Commercial Property Group",
      description: "Year-round grounds management for a 5-building office complex with seasonal color programs.",
      beforeImage: "https://images.unsplash.com/photo-1764931879811-2fb7b6841e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbGFuZHNjYXBpbmd8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1764931879811-2fb7b6841e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbGFuZHNjYXBpbmd8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Commercial", "Multi-Site", "Ongoing"],
    },
    {
      id: 4,
      title: "School District Facility Support",
      category: "facility",
      location: "Adams County, CO",
      year: "2024",
      client: "Public School District",
      description: "Comprehensive facility maintenance including repairs, pressure washing, and emergency services.",
      beforeImage: "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1haW50ZW5hbmNlJTIwaGFuZHltYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1haW50ZW5hbmNlJTIwaGFuZHltYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Government", "Education", "Multi-Trade"],
    },
    {
      id: 5,
      title: "Healthcare Campus Landscaping",
      category: "landscape",
      location: "Brighton, CO",
      year: "2023",
      client: "Regional Medical Center",
      description: "Healing garden installation and maintenance for healthcare facility with accessible pathways.",
      beforeImage: "https://images.unsplash.com/photo-1682355329957-1046671a47d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBlJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzk1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1741527694859-925f4a4ec88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMG1haW50ZW5hbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczOTUwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Healthcare", "Accessible", "Healing Garden"],
    },
    {
      id: 6,
      title: "Industrial Park Snow Removal",
      category: "snow",
      location: "Weld County, CO",
      year: "2023-2024",
      client: "Industrial Development Group",
      description: "Large-scale snow removal and ice management for 40-acre industrial complex.",
      beforeImage: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1738975293751-da682b492625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwcmVtb3ZhbCUyMGNvbW1lcmNpYWwlMjBlcXVpcG1lbnQlMjBjb2xvcmFkb3xlbnwxfHx8fDE3NzM5NTAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Industrial", "Large-Scale", "EPA Compliant"],
    },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
              Our Work Portfolio
            </h1>
            <p className="text-xl text-green-100">
              Showcasing our commitment to excellence across Adams and Weld Counties
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-[#2d5016] text-white" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-6 p-6">
                    {/* Before/After Images */}
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <Badge className="absolute top-3 left-3 bg-black/70 text-white z-10">
                          Before
                        </Badge>
                        <img
                          src={project.beforeImage}
                          alt={`${project.title} - Before`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="relative rounded-lg overflow-hidden">
                        <Badge className="absolute top-3 left-3 bg-[#2d5016] text-white z-10">
                          After
                        </Badge>
                        <img
                          src={project.afterImage}
                          alt={`${project.title} - After`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>
                      </div>
                      <div className="space-y-3 border-t pt-4">
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-[#2d5016]" />
                          <span className="font-medium mr-2">Location:</span>
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-[#2d5016]" />
                          <span className="font-medium mr-2">Completed:</span>
                          <span className="text-muted-foreground">{project.year}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="font-medium mr-2">Client:</span>
                          <span className="text-muted-foreground">{project.client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Proven Results Across Colorado
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "2", label: "Counties Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-[#e8f5e9]"
              >
                <div className="text-3xl font-bold text-[#2d5016] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
