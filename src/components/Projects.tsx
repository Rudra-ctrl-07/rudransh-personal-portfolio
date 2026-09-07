import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction",
    description: "Built an end-to-end machine learning model to predict customer churn using classification algorithms. Performed exploratory data analysis and evaluated model performance.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Rudra_ctrl_07",
    featured: true,
  },
  {
    id: "2",
    title: "Shopping Mart Website",
    description: "Designed and developed a full-featured e-commerce web app with product listings, a shopping cart, and a responsive checkout flow using modern web standards.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Rudra_ctrl_07",
  },
  {
    id: "3",
    title: "Travel Booking Website",
    description: "Built a travel booking platform where users can browse destinations, view packages, and simulate bookings with an intuitive and highly responsive user interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Rudra_ctrl_07",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-headline font-bold mb-4 tracking-tight"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant"
          >
            Exploring data and building intelligent applications.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group flex flex-col bg-surface-container-low p-8 rounded-xl border border-outline-variant transition-all hover:-translate-y-2 hover:border-primary/30 h-full ${project.featured ? 'glow-teal' : ''}`}
            >
              <div className="mb-6">
                {project.featured ? (
                  <span className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full">Featured</span>
                ) : (
                  <div className="h-6" />
                )}
              </div>
              
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-surface-container-high border border-primary/15 text-primary text-[10px] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-container text-primary-container rounded-lg text-sm font-bold hover:bg-primary/5 transition-all"
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demoUrl || "#"}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-on-primary rounded-lg text-sm font-bold transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
