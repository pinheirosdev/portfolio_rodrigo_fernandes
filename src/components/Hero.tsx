import { ArrowRight, Download, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-4xl order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6">
              <Award size={16} />
              <span>32 Anos de Expertise Comercial</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Rodrigo Santos <span className="text-amber-500">Fernandes</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
              Diretor Comercial | Head Comercial | Gerente de Vendas
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Especialista em negociações estratégicas e crescimento rentável, com 20 anos no segmento de Materiais de Construção e 12 anos em Bens de Consumo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <span className="text-amber-500 block text-3xl font-bold mb-1 text-center">R$ 348 Mi</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider block text-center">Faturamento (ROB) 2025</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <span className="text-blue-500 block text-3xl font-bold mb-1 text-center">43+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider block text-center">Liderança de Equipe</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <span className="text-slate-200 block text-3xl font-bold mb-1 text-center">1.764</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider block text-center">Clientes Diretos</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contato" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                Entrar em Contato <ArrowRight size={20} />
              </a>
              <a 
                href="/Curriculo_Rodrigo_Fernandes_2026.pdf" 
                download
                className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                Download CV <Download size={20} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl -z-10 animate-pulse" />
              <img 
                src="/foto_perfil_rodrigo.jpg" 
                alt="Rodrigo Santos Fernandes"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-3xl border-2 border-slate-800 shadow-2xl transition-all duration-700"
              />
              <div className="absolute bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-950">9x</div>
                  <span className="text-sm font-semibold text-white">Prêmio Melhores<br/>Gestores Amanco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}