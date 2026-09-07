import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-lg">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-headline font-bold tracking-tighter text-on-surface"
        >
          Rudransh Gujja
        </motion.div>
        
        <div className="hidden md:flex gap-8 font-headline font-bold tracking-tight">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a 
          href="/RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 border-2 border-primary-container text-primary-container px-6 py-2 rounded-lg font-headline font-bold hover:bg-primary/5 transition-all"
        >
          <FileText size={18} />
          Resume
        </motion.a>
      </div>
    </nav>
  );
}
