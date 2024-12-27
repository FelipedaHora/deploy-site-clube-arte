"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PortfolioModal from "./PortfolioModal";
import Image, { StaticImageData } from 'next/image';
import  logoCompany  from "../public/images/CAPA-COMPANY.png";
import backgroundCompany from "../public/images/BACKGROUND-COMPANY.png";

const portfolioItems = [
  {
    title: "Design de Identidade Visual",
    client: "Company - Gestão em Negócios e Terceirização",
    image: logoCompany,
    description: "Desenvolvimento completo de identidade visual para uma empresa consolidada no estado do Mato Grosso, focando em transmitir modernidade e confiabilidade.",
    challenge: "A empresa precisava de uma identidade que refletisse sua natureza tecnológica e inovadora, mantendo um aspecto profissional e acessível.",
    solution: "Criamos um sistema de identidade visual flexível e dinâmico, com elementos que representam fluxo e transformação digital.",
    mainImage: backgroundCompany,
    gallery: [
      "/images/foto-pasta-company.png",
      "/images/foto-mochila-company.png",
      "/images/foto-app-company.png"
    ],
    logoAnimation: "/images/company-gif.gif"
  },
  {
    title: "Branding & Campanha de Mídia Social",
    client: "Mais que Dim Dim",
    image: "/images/CAPA-DIMDIM.png",
    description: "Estratégia completa de mídia social para uma confeitaria, incluindo direção criativa e produção de conteúdo.",
    challenge: "Aumentar o engajamento nas redes sociais e estabelecer uma presença digital consistente com a identidade da marca.",
    solution: "Desenvolvemos uma linguagem visual sofisticada e uma estratégia de conteúdo que destaca a qualidade dos produtos.",
    mainImage: "/images/dimdim-gif.gif",
    gallery: [
      "/images/post1-dimdim.jpg",
      "/images/post2-dimdim.jpg",
      "/images/post3-dimdim.jpg"
    ]
  },
  {
    title: "Branding & Gerenciamento de Redes Sociais",
    client: "Maju Restaurante",
    image: "/images/CAPA-MAJU.png",
    description: "Estratégia de gerenciamento de redes sociais para um restaurante especializado em pratos exclusivos, destacando a alta qualidade dos ingredientes e a experiência gastronômica premium.",
    challenge: "Consolidar a presença digital do restaurante, transmitindo a exclusividade dos pratos e atraindo um público que valorize ingredientes de alta qualidade.",
    solution: "Criamos um plano estratégico de redes sociais com conteúdos visuais impactantes, storytelling envolvente e campanhas interativas, promovendo a autenticidade e o prestígio da marca.",
    mainImage: "/images/BACKGROUND-MAJU.png",
    gallery: [
      "/images/post1-maju.png",
      "/images/post2-maju.png",
      "/images/post3-maju.png"
    ]
  },
  {
    title: "Gerenciamento de Redes Sociais",
    client: "RK Conveniência",
    image: "/images/CAPA-RK.png",
    description: "Gestão de redes sociais para uma distribuidora de bebidas, unindo estratégias para atrair clientes de varejo e fortalecer parcerias no atacado.",
    challenge: "Ampliar o alcance digital da empresa, destacando a diversidade do portfólio de bebidas e posicionando a marca como referência tanto para consumidores finais quanto para revendedores.",
    solution: "Implementamos uma estratégia de conteúdo focada em campanhas segmentadas, divulgação de promoções e comunicação alinhada às necessidades dos públicos varejista e atacadista.",
    mainImage: "/images/BACKGROUND-RK.png",
    gallery: [
      "/images/post1-rk.png",
      "/images/post2-rk.png",
      "/images/post3-rk.png"
    ]
  },
  {
    title: "Branding & Gerenciamento de Redes Sociais",
    client: "Cheiro de Rica",
    image: "/images/CAPA-CHEIRO.png",
    description: "Gestão de redes sociais para uma perfumaria especializada em perfumes importados e decantes sofisticados, destacando exclusividade e elegância.",
    challenge: "Fortalecer a presença online da marca, atraindo clientes que valorizam sofisticação e a experiência sensorial única dos perfumes importados.",
    solution: "Desenvolvemos uma estratégia de conteúdo focada em storytelling emocional, visuais refinados e campanhas que ressaltam a exclusividade e versatilidade dos produtos.",
    mainImage: "/images/BACKGROUND-CHEIRO.png",
    gallery: [
      "/images/post1-cheiro.png",
      "/images/post2-cheiro.png",
      "/images/post3-cheiro.png"
    ]
  },
  {
    title: "Gerenciamento de Redes Sociais",
    client: "Neurodesenvolver",
    image: "/images/CAPA-GREICY.png",
    description: "Gestão de redes sociais para uma clínica multidisciplinar especializada em psicopedagogia, neuropsicopedagogia, psicomotricidade, fonoaudiologia e psicologia infantil, promovendo o desenvolvimento integral das crianças.",
    challenge: "Aumentar a visibilidade da clínica no meio digital, comunicando a importância de uma abordagem multidisciplinar no cuidado e desenvolvimento infantil.",
    solution: "Criamos uma estratégia de conteúdo educativo e acolhedor, com materiais informativos, depoimentos, e postagens que engajam famílias interessadas em soluções para o desenvolvimento infantil.",
    mainImage: "/images/BACKGROUND-GREICY.png",
    gallery: [
      "/images/post1-greicy.png",
      "/images/post2-greicy.png",
      "/images/post3-greicy.png"
    ]
  }
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<
    null | {
      title: string;
      client: string;
      image: StaticImageData | string;
      description: string;
      challenge: string;
      solution: string;
      mainImage: StaticImageData | string;
      gallery: (StaticImageData | string)[];
      logoAnimation?: string;
    }
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="portfolio" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nosso portfólio de projetos bem-sucedidos e soluções criativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
            >
              <CardContent className="p-0">
                <AspectRatio ratio={1}>
                  <div className="relative h-full">
                    <Image
                      src={item.image} // Caminho da imagem
                      alt={item.title} // Texto alternativo
                      width={1080}
                      height={500}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                      priority={index < 3} // Otimiza imagens iniciais
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.client}</p>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </section>
  );
}