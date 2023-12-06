import Image from "next/image";
import imgServicos from "public/img/servicos/servicos.png";
import home from "public/img/servicos/home.png";
import camera from "public/img/servicos/camera.png";
import idea from "public/img/servicos/luz.png";
import o3 from "public/img/servicos/o3.png";

export default function QuemSomos() {
  return (
    <section className="container bg-white px-10 pt-15 mx-auto ">
      <div className="lg:flex h-full">
        <div className="lg:w-1/2 sm:text-left	text-center flex flex-col justify-center">
          <h1 className="text-padrao text-5xl font-bold mb-8 tracking-titulo font-georama font-georama-semibold">
            Serviços
          </h1>
          <p className="leading-7 text-textSomos text-justify sm:text-left">
            Hoje temos uma estrutura completa de serviços para atender os
            diversos cenários que envolvem a necessidade de nossas
            especialidades.
          </p>
          <ul className="text-textSomos mt-7">
            <li className="flex items-center mb-6">
              <Image src={home} alt="o3vet" width={27} className="mr-3" />{" "}
              Atendimento em local próprio.
            </li>
            <li className="flex items-center mb-6">
              <Image src={camera} alt="o3vet" width={27} className="mr-3" />{" "}
              Atendimento volante, feito em clínicas parceiras e/ou domiciliar.
            </li>
            <li className="flex items-center mb-6">
              <Image src={idea} alt="o3vet" width={27} className="mr-3" />{" "}
              Consultoria para clínicas e hospitais veterinários que queiram
              montar o serviço especializado em ozonioterapia.
            </li>
            <li className="flex items-center">
              <Image src={o3} alt="o3vet" width={27} className="mr-3" />{" "}
              Desenvolvimento de produtos com ozônio para veterinária.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src={imgServicos} alt="Servicos" className="max-h-96 w-auto" />
        </div>
      </div>
    </section>
  );
}
