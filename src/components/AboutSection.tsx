
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Sobre Lenício de Souza</h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de uma década de experiência em análise de dados e desenvolvimento de sistemas, 
              Lenício de Souza fundou a empresa com a missão de transformar o poder dos dados em 
              resultados tangíveis para negócios de todos os portes.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Especialista em ciência de dados e automação de processos, nossa equipe combina conhecimento 
              técnico avançado com uma profunda compreensão dos desafios empresariais para entregar 
              soluções que realmente fazem a diferença.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-company-gray rounded-lg p-4 flex-1 min-w-[160px] text-center">
                <span className="block text-3xl font-bold text-company-purple">10+</span>
                <span className="text-gray-600">Anos de Experiência</span>
              </div>
              <div className="bg-company-gray rounded-lg p-4 flex-1 min-w-[160px] text-center">
                <span className="block text-3xl font-bold text-company-purple">100+</span>
                <span className="text-gray-600">Projetos Concluídos</span>
              </div>
              <div className="bg-company-gray rounded-lg p-4 flex-1 min-w-[160px] text-center">
                <span className="block text-3xl font-bold text-company-purple">50+</span>
                <span className="text-gray-600">Clientes Satisfeitos</span>
              </div>
            </div>
            <Button 
              className="bg-company-purple hover:bg-company-lightPurple transition-colors"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>
          <div className="bg-gradient-to-br from-company-purple to-company-lightBlue rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-company-blue">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Capacitar empresas a tomarem decisões baseadas em dados, automatizarem processos 
                e aumentarem sua competitividade no mercado através de soluções tecnológicas inovadoras.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-company-blue">Nossos Valores</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-company-purple mr-3"></span>
                  <span className="text-gray-700"><strong>Excelência</strong> - Comprometimento com a qualidade em todos os projetos</span>
                </li>
                <li className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-company-purple mr-3"></span>
                  <span className="text-gray-700"><strong>Inovação</strong> - Busca constante por soluções criativas e eficientes</span>
                </li>
                <li className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-company-purple mr-3"></span>
                  <span className="text-gray-700"><strong>Transparência</strong> - Comunicação clara e honesta com os clientes</span>
                </li>
                <li className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-company-purple mr-3"></span>
                  <span className="text-gray-700"><strong>Resultados</strong> - Foco em entregar valor e impacto mensurável</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
