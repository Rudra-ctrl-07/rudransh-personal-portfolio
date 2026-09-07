import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 pb-4 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface pointer-events-none"></div>
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-4"
        >
          Rudransh <span className="text-primary text-glow">Gujja</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-headline text-on-surface mb-6 tracking-tight"
        >
          Data Science Student · ML Enthusiast · CGPA 8.49
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed mb-10"
        >
          Turning raw data into meaningful insights through Python and Machine Learning. 
          Building the future of intelligent systems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,212,170,0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-container rounded-lg font-headline font-bold flex items-center justify-center gap-2 transition-all"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(70, 241, 197, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Rudransh_Gujja_Resume.pdf"
            className="px-8 py-4 border-2 border-primary-container text-primary-container rounded-lg font-headline font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
