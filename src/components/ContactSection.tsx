
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos pelo seu contato. Retornaremos em breve."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="py-24 bg-company-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa a transformar dados em resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-company-purple/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Endereço</h4>
                  <p className="opacity-80">Uberlândia - MG - Brasil</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-company-purple/20 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Telefone</h4>
                  <p className="opacity-80">+55 (34) 98425-1266</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-company-purple/20 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="opacity-80">contato@lenicio.cloud</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-company-purple/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">CNPJ</h4>
                  <p className="opacity-80">33.108.251/0001-43</p>
                  <p className="opacity-80 text-sm">33.108.251 LENICIO DE SOUZA MELO JUNIOR</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/lenicio_souza/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-company-purple/20 hover:bg-company-purple/40 flex items-center justify-center transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/lenicio" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-company-purple/20 hover:bg-company-purple/40 flex items-center justify-center transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-company-blue">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required className="border-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Seu email" required className="border-gray-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" className="border-gray-300" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" className="border-gray-300" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como podemos ajudar?" rows={5} required className="resize-none border-gray-300" />
              </div>

              <Button type="submit" className="w-full bg-company-purple hover:bg-company-lightPurple transition-colors" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
