import { motion } from "motion/react";
import { Code2, BarChart3, Terminal } from "lucide-react";
import { SkillCategory } from "../types";

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "ML & Data",
    icon: "analytics",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Tools",
    icon: "terminal",
    skills: ["Jupyter Notebook", "Google Colab", "Kaggle", "Git", "GitHub", "Power BI", "MySQL", "Generative AI Studio"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-bold mb-16 text-center tracking-tight"
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon === "code" && <Code2 className="text-primary" size={24} />}
                {category.icon === "analytics" && <BarChart3 className="text-primary" size={24} />}
                {category.icon === "terminal" && <Terminal className="text-primary" size={24} />}
                <h3 className="text-lg font-headline font-bold text-primary uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(70, 241, 197, 0.1)" }}
                    className="px-4 py-2 rounded-full bg-surface-container-low text-primary border border-primary/20 font-medium text-sm transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
