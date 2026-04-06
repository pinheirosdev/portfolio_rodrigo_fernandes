import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/5543988144636";
  const emailUrl = "mailto:rodrigo.fernandes1910@gmail.com";

  return (
    <section className="py-24" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-16 bg-blue-600 text-white">
            <h2 className="text-4xl font-bold mb-8 leading-tight">Vamos construir o próximo capítulo?</h2>
            <p className="text-blue-100 mb-12 text-lg leading-relaxed">
              Disponível para novos desafios estratégicos e liderança de grandes operações comerciais em todo o território nacional.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-blue-200 text-sm font-semibold uppercase tracking-wider">Localização</span>
                  <span className="text-xl font-medium">Londrina, PR | São Paulo, SP</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-blue-200 text-sm font-semibold uppercase tracking-wider">E-mail Corporativo</span>
                  <span className="text-xl font-medium break-all underline underline-offset-4 decoration-white/20">rodrigo.fernandes1910@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-blue-200 text-sm font-semibold uppercase tracking-wider">WhatsApp</span>
                  <span className="text-xl font-medium">+55 (43) 98814-4636</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-slate-900">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Fale diretamente comigo:</h3>
            
            <div className="space-y-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 rounded-2xl transition-all shadow-lg hover:shadow-[#25D366]/20 font-bold"
              >
                <div className="flex items-center gap-4">
                  <MessageSquare size={32} />
                  <div className="text-left">
                    <span className="block text-sm uppercase opacity-70">Enviar Mensagem</span>
                    <span className="text-xl">WhatsApp Profissional</span>
                  </div>
                </div>
                <Send className="group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href={emailUrl}
                className="group flex items-center justify-between p-6 bg-white hover:bg-slate-100 text-slate-950 rounded-2xl transition-all shadow-lg hover:shadow-white/10 font-bold"
              >
                <div className="flex items-center gap-4">
                  <Mail size={32} />
                  <div className="text-left">
                    <span className="block text-sm uppercase opacity-70">Enviar Agora</span>
                    <span className="text-xl">E-mail Direto</span>
                  </div>
                </div>
                <Send className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <p className="mt-12 text-slate-500 text-sm text-center italic">
              "Foco em resultados e pessoas. Pronto para grandes desafios."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}