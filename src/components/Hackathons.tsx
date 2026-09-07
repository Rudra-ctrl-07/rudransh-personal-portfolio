import { motion } from "motion/react";
import { Trophy } from "lucide-react";

export default function Hackathons() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="hackathons">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-bold mb-16 text-center tracking-tight"
        >
          Hackathons & <span className="text-primary">Achievements</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-primary/20 glow-teal relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy size={120} className="text-primary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h3 className="text-3xl font-headline font-bold text-on-surface">Google Agentathon 2025</h3>
              <span className="px-4 py-1 bg-primary text-on-primary text-sm font-bold rounded-full flex items-center gap-2">
                World Record Event 🏆
              </span>
            </div>
            
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-4xl">
              Participated in the world-record Agentic AI Hackathon organised by GDG Hyderabad at Malla Reddy University (Dec 2025). 
              Built and presented an AI agent prototype using Google for Developers technologies over a 2-day competition.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
