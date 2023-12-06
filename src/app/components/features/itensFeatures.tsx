import Image from "next/image";

interface itens {
  imagem: string;
  titulo: string;
  texto: string;
}
export default function Itens(props: itens) {
  return (
    <div className="flex w-max ">
      <Image
        src={props.imagem}
        alt="cartao"
        className="w-auto h-full my-auto cursor-pointer mr-3"
        height={50}
        width={50}
      />
      <div className="flex flex-col justify-center w-max">
        <h1 className=" text-sm text-white sm:text-2xl font-bold text">
          {props.titulo}
        </h1>
        <p className="text-white text-xs sm:text-sm leading-4">{props.texto}</p>
      </div>
    </div>
  );
}
