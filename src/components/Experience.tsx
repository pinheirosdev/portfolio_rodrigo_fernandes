const experiencias = [
  {
    empresa: "Amanco Wavin | Orbia",
    periodo: "Jan 2022 - Mar 2026",
    cargo: "Gerente Regional de Vendas Sul (PR/SC/RS)",
    desc: "Gestão de KPIs, campanhas e faturamento de R$ 348 Milhões. Liderança de 43 colaboradores (diretos e indiretos).",
  },
  {
    empresa: "Amanco Wavin",
    periodo: "Abr 2014 - Dez 2021",
    cargo: "Gerente Regional de Vendas SPC (Grande SP e Litoral)",
    desc: "Atendimento aos mesmos grandes canais de distribuição com a marca Amanco. Liderança de 24 colaboradores.",
  },
  {
    empresa: "Amanco Wavin",
    periodo: "Jan 2012 - Mar 2014",
    cargo: "Coordenador Regional de Vendas SPC",
    desc: "Coordenação de canal direto (Home-Centers) e indireto (Atacados e Distribuidores). Foco em ações de Sell-Out.",
  },
  {
    empresa: "Mars Brasil | Effem",
    periodo: "Jun 2000 - Dez 2005",
    cargo: "Coordenador de Vendas",
    desc: "Gestão de Grandes Contas Nacionais (Hipermercados e Supermercados) das marcas Pedigree, Whiskas e M&Ms.",
  }
];

export default function Experience() {
  return (
    <section className="py-24" id="experiencia">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center uppercase tracking-widest">
          Trajetória <span className="text-blue-500 underline decoration-amber-500 underline-offset-8">Executiva</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiencias.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors py-4">
              <div className="absolute w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 -left-[9px] top-6" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.empresa}</h3>
                <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-400 text-sm font-mono mt-2 md:mt-0">
                  {exp.periodo}
                </span>
              </div>
              <h4 className="text-xl text-amber-500 font-semibold mb-3">{exp.cargo}</h4>
              <p className="text-slate-400 leading-relaxed max-w-3xl">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}