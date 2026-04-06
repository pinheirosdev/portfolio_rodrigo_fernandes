import { Trophy, CheckCircle, Globe } from "lucide-react";

const prêmios = [
  { ano: "2014, 2018, 2019, 2024", lugar: "1º Lugar (Melhor do Brasil)", color: "text-amber-500", bg: "bg-amber-500/10" },
  { ano: "2020, 2021, 2023", lugar: "2º Lugar (Nacional)", color: "text-slate-200", bg: "bg-slate-200/10" },
  { ano: "2015, 2017", lugar: "3º Lugar (Nacional)", color: "text-amber-700", bg: "bg-amber-700/10" },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Realizações e Prêmios de <span className="text-amber-500 italic">Alto Impacto</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Destaque 9 vezes em 11 anos como gerente, entre 7 regionais Amanco Wavin no Brasil. Uma trajetória marcada por resultados consistentes e excelência em gestão.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-slate-300">Abertura de Grandes Contas estratégicas como Sodimac/Dicico, Cassol e Construjá.</p>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-slate-300">Reconhecimento internacional com Case Sodimac apresentado em Amsterdã (2021).</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl -z-10" />
            <img 
              src="/foto_com_trofeus.jpg" 
              alt="Rodrigo Fernandes com Troféus"
              className="rounded-3xl border border-slate-800 shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-950 p-6 rounded-2xl shadow-xl font-bold">
              <span className="text-3xl">9 ANOS</span><br/>
              <span className="text-sm uppercase tracking-wider font-extrabold opacity-80">Entre os Melhores</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prêmios.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2 group">
              <div className={`w-16 h-16 rounded-full ${p.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Trophy className={p.color} size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${p.color}`}>{p.lugar}</h3>
              <p className="text-slate-500 font-mono text-sm">{p.ano}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}