import { motion } from "motion/react";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jul 2025",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Great Learning",
    date: "Jul 2025",
  },
  {
    name: "Introduction to Generative AI Studio",
    issuer: "Simplilearn",
    date: "Jun 2025",
  },
  {
    name: "Alpha DSA with Java",
    issuer: "Apna College",
    date: "2025",
  },
  {
    name: "Python & Java Courses",
    issuer: "GeeksforGeeks",
    date: "2025",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-surface" id="certifications">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-bold mb-16 text-center tracking-tight"
        >
          My <span className="text-primary">Certifications</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary shadow-lg group transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Award className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-headline font-bold text-lg mb-1 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
