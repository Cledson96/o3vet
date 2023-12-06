"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "public/img/headers/logo.png";
import lupa from "public/img/headers/lupa.png";
import carrinho from "public/img/headers/carrinho.png";

interface MenuItem {
  name: string;
  status: "on" | "off";
  link: string;
}

export default function Headers() {
  const itensMenu: MenuItem[] = [
    { name: "Quem somos", status: "on", link: "#quemSomos" },
    { name: "Serviços", status: "on", link: "#quemSomos" },
    { name: "Cursos", status: "on", link: "#quemSomos" },
    { name: "Produtos", status: "on", link: "#quemSomos" },
    { name: "Promoções", status: "on", link: "#quemSomos" },
    { name: "Contato", status: "on", link: "#quemSomos" },
  ];

  return (
    <header className="container px-20 py-3 text-textHeaders w-screen min-w-full">
      <div className="row h-20 flex-row flex">
        <div className="h-full w-6/12  flex justify-between">
          <Link className="flex h-full w-auto min-w-fit" href="/">
            <Image src={logo} alt="O3vet" className="h-full w-auto" />
          </Link>
          <div className="my-auto flex ml-4 w-full">
            <input
              type="text"
              className="h-10 border-2 border-gray-200 p-2 rounded-3xl w-full"
              placeholder="O que você busca?"
            />
            <div className="bg-padrao p-2 h-10 rounded-full ml-4">
              {" "}
              <Image src={lupa} alt="O3vet" className="w-auto h-full" />
            </div>
          </div>
        </div>
        <div className="h-full w-6/12  flex justify-end">
          <h1 className="text-padrao my-auto text-2xl font-bold cursor-pointer">
            Login
          </h1>
          <div className="h-10 my-auto ml-8 flex ">
            <Image
              src={carrinho}
              alt="carrinho"
              className="w-auto h-3/5 my-auto cursor-pointer"
            />
            <div className="rounded-full bg-padrao h-4 w-4 flex items-center justify-center text-sm text-white">
              0
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-7 h-12 hidden sm:flex w-full">
        <ul className="flex flex-row justify-between h-full w-full">
          {itensMenu.map((item, index) => {
            return (
              <li
                className="hover:bg-padrao  hover:text-white flex p-5 transition duration-300 ease-in-out"
                key={index}
              >
                <Link
                  className="flex items-center font-normal"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>{" "}
      </div>
    </header>
  );
}
