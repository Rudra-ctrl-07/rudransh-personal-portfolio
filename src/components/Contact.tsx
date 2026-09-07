import { motion } from "motion/react";
import { Mail, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">
              Let's <span className="text-primary relative inline-block">Connect<span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span></span>
            </h2>
            <p className="text-on-surface-variant text-lg mt-8 mb-12">
              I'm currently looking for internship opportunities and would love to collaborate on interesting data projects.
            </p>
            
            <div className="space-y-6">
              <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:rudranshgujja1@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded-lg border border-outline-variant group-hover:border-primary/50 transition-all">
                  <Mail className="text-primary" size={20} />
                </div>
                <span className="text-on-surface group-hover:text-primary transition-colors">rudranshgujja1@gmail.com</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ x: 10 }}
                href="https://github.com/Rudra_ctrl_07"
                target="_blank"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded-lg border border-outline-variant group-hover:border-primary/50 transition-all">
                  <Github className="text-primary" size={20} />
                </div>
                <span className="text-on-surface group-hover:text-primary transition-colors">github.com/Rudra_ctrl_07</span>
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-8 rounded-xl border border-outline-variant"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-headline font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-headline font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-headline font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,212,170,0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
