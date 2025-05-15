
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, ChartLine, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Análise de Dados",
      description: "Transforme seus dados brutos em informações acionáveis com análises detalhadas e visualizações personalizadas.",
      icon: <Database className="h-10 w-10 text-company-purple" />,
      features: ["Dashboards interativos", "Relatórios personalizados", "ETL e limpeza de dados", "Visualização avançada"]
    },
    {
      title: "Ciência de Dados",
      description: "Modelos preditivos e algoritmos de machine learning para identificar padrões e oportunidades em seus dados.",
      icon: <ChartLine className="h-10 w-10 text-company-purple" />,
      features: ["Machine Learning", "Modelos preditivos", "Análise estatística", "Big Data"]
    },
    {
      title: "Automação",
      description: "Otimize processos e aumente a eficiência com soluções personalizadas de automação para seu negócio.",
      icon: <Settings className="h-10 w-10 text-company-purple" />,
      features: ["RPA (Robotic Process Automation)", "Pipelines de dados", "Fluxos de trabalho automatizados", "Integração de sistemas"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-company-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em dados e automação para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none hover:-translate-y-2 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-company-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-4">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-company-purple mr-2"></span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-company-blue hover:bg-company-purple transition-colors"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
