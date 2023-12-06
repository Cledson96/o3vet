import Image from "next/image";
import imgQuemSomos from "public/img/quemSomos/quemSomos.png";
export default function QuemSomos() {
  return (
    <section className="container bg-white px-10 pt-15 mx-auto " id="quemSomos">
      <div className="flex h-full flex-col sm:flex-row">
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={imgQuemSomos}
            alt="QuemSomos"
            className="max-h-96 w-auto"
          />
        </div>

        <div className="sm:w-1/2 sm:text-right	text-center flex flex-col justify-center">
          <h1 className="text-padrao text-5xl font-bold mb-8 tracking-titulo font-georama font-georama-semibold">
            Quem somos?
          </h1>
          <p className="leading-7 text-textSomos text-justify sm:text-right">
            Somos pioneiros em ozonioterapia veterinária no Brasil. Desde o
            início, nosso maior compromisso é proporcionar saúde e melhor
            qualidade de vida para os animais. Fazemos isso através de
            tratamentos com base na ozonioterapia, técnicas da medicina
            veterinária integrativa e capacitação de profissionais da área.
          </p>
        </div>
      </div>
    </section>
  );
}
