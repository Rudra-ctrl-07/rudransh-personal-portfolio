import { motion } from "motion/react";

export default function About() {
  return (
    <section className="bg-surface-container-lowest py-24" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center md:justify-end items-center self-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="w-[180px] h-[180px] rounded-full bg-surface-container-low flex items-center justify-center border-2 border-primary-container relative">
                <span className="text-4xl font-headline font-bold text-primary text-glow">RG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-headline font-bold mb-6 tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              I'm Rudransh Gujja, a 2nd year B.Tech Data Science student at Malla Reddy University, Hyderabad with a CGPA of 8.49. 
              I'm passionate about turning raw data into meaningful insights — from EDA and visualization to building ML models. 
              I've participated in Google Agentathon 2025, completed 6 industry certifications, and I'm actively seeking 
              Data Science and Data Analyst internship opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
