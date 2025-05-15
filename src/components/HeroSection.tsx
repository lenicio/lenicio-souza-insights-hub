import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-company-blue via-company-purple to-company-lightPurple text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-light"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-white animate-pulse-light" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white animate-pulse-light" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando Dados em <br />
            <span className="text-white">Insights e Resultados</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Soluções personalizadas em análise de dados, ciência de dados e automação para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-company-purple hover:bg-gray-100 transition-colors text-lg px-8 py-6" onClick={() => document.querySelector('#services')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Nossos Serviços
            </Button>
            <Button variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-white hover:bg-white/10 transition-colors text-lg px-8 py-6 text-purple-900">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => document.querySelector('#services')?.scrollIntoView({
        behavior: 'smooth'
      })}>
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>;
};
export default HeroSection;