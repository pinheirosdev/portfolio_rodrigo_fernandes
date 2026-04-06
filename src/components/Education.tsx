import { Globe, MapPin, GraduationCap } from "lucide-react";

const intlEducation = [
  { univ: "Stanford (EUA)", curso: "Human Technology Insights for Retail Advantage", ano: "2016" },
  { univ: "Kellogg (EUA)", curso: "Retail Management Program", ano: "2017" },
  { univ: "Wharton (EUA)", curso: "Retail Administration Program", ano: "2018" },
  { univ: "Univ. de Lisboa (Portugal)", curso: "Executivo Inovação para o Varejo", ano: "2019" },
  { univ: "Miami (EUA)", curso: "Retail Growth Program - G4 Educação", ano: "2025" },
];

export default function Education() {
  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900" id="formacao">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-4 font-bold tracking-widest uppercase text-sm">
              <Globe size={20} />
              <span>International Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Formação de <span className="text-amber-500">Classe Mundial</span>
            </h2>
          </div>
          <div className="text-slate-500 max-w-sm">
            Especializações em Gestão de Varejo e Tecnologia Humana nas instituições mais prestigiadas do mundo.
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {intlEducation.map((ed, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-amber-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={48} />
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-sm mb-4 font-semibold">
                <MapPin size={14} />
                {ed.univ}
              </div>
              <h3 className="text-xl text-slate-100 group-hover:text-white mb-4 leading-tight font-bold">
                {ed.curso}
              </h3>
              <p className="text-slate-500 text-sm font-mono">{ed.ano}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-900 pt-16">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-8">Formação Acadêmica</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-1 bg-amber-500/30 rounded-full" />
                <div>
                  <h5 className="text-lg font-bold text-white">Pós-Graduação em Gestão Empresarial</h5>
                  <p className="text-slate-400">Faculdade América do Sul-PR • 2017</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-amber-500/30 rounded-full" />
                <div>
                  <h5 className="text-lg font-bold text-white">Bacharelado em Marketing</h5>
                  <p className="text-slate-400">UNIP • 2000</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold mb-8">Idiomas e Feiras</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="block text-slate-500 text-xs mb-1 uppercase font-bold">Espanhol</span>
                <span className="text-white font-bold">Avançado C1</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="block text-slate-500 text-xs mb-1 uppercase font-bold">Inglês</span>
                <span className="text-white font-bold">Intermediário B1</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["NRF New York", "Global Shop Vegas", "Euro Shop Dusseldorf"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}