import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-12 px-8 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-headline font-bold text-on-surface tracking-tighter">
          Rudransh Gujja
        </div>
        
        <p className="font-body text-sm text-on-surface-variant text-center md:text-left">
          © 2024 Rudransh Gujja · Built with passion for Data Science
        </p>
        
        <div className="flex gap-6 items-center">
          <a 
            href="https://github.com/Rudra_ctrl_07" 
            target="_blank"
            className="text-on-surface-variant hover:text-primary transition-all"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-primary transition-all"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
