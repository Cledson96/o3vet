import Image from "next/image";

interface itens {
  imagem: string;
  titulo: string;
  texto: string;
}
export default function Itens(props: itens) {
  return (
    <div className="flex ">
      <Image
        src={props.imagem}
        alt="cartao"
        className="w-auto h-full my-auto cursor-pointer mr-3"
        width={50}
        height={50}
      />
      <div className="flex flex-col justify-center w-max">
        <h1 className="text-white text-2xl font-bold text">{props.titulo}</h1>
        <p className="text-white text-sm leading-4">{props.texto}</p>
      </div>
    </div>
  );
}
