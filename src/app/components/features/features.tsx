import Itens from "./itensFeatures";

interface itensInterface {
  imagem: string;
  titulo: string;
  texto: string;
}

export default function Feature() {
  const itens: itensInterface[] = [
    {
      imagem: "/img/feature/cartao.png",
      titulo: "Parcelamento",
      texto: "Parcelamos no cartão de crédito.",
    },
    {
      imagem: "/img/feature/cadeado.png",
      titulo: "Segurança",
      texto: "Compra segura:Certificado SSl.",
    },
    {
      imagem: "/img/feature/mapa.png",
      titulo: "Entregamos",
      texto: "Em todo o Brasil.",
    },
  ];
  return (
    <div className="gap-4 row bg-padrao py-3 flex justify-center sm:gap-8 w-full h-16 md:h-20 lg:gap-28 ">
      {itens.map((item, index) => {
        return (
          <Itens
            key={index}
            imagem={item.imagem}
            titulo={item.titulo}
            texto={item.texto}
          />
        );
      })}
    </div>
  );
}
