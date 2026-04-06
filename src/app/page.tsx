import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Home() {
  const linkedinUrl = "https://www.linkedin.com/in/rodrigo-fernandes-3286b91/";
  const whatsappUrl = "https://wa.me/5543988144636";
  const emailUrl = "mailto:rodrigo.fernandes1910@gmail.com";

  return (
    <main className="min-h-screen">
      {/* Header Fixo de Navegação */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white font-bold text-xl tracking-tighter">
            RODRIGO <span className="text-amber-500">SANTOS FERNANDES</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experiencia" className="text-sm text-slate-400 hover:text-white transition-colors">Trajetória</a>
            <a href="#formacao" className="text-sm text-slate-400 hover:text-white transition-colors">Formação</a>
            <a href="#contato" className="px-5 py-2 bg-slate-900 border border-slate-800 text-white rounded-full text-sm hover:border-blue-500 transition-all">
              Contato
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Achievements />
      <Experience />
      <Education />
      <Contact />

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © 2026 Rodrigo Santos Fernandes. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors" title="WhatsApp">
              <MessageSquare size={24} />
            </a>
            <a href={emailUrl} className="text-slate-400 hover:text-white transition-colors" title="Email">
              <Mail size={24} />
            </a>
            <span className="text-slate-800 hidden md:inline">|</span>
            <div className="hidden md:block text-xs uppercase tracking-widest text-slate-600 font-bold">
              Executivo de Alta Performance
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}