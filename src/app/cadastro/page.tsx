"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import InputMask from "react-input-mask";
import ReactLoading from "react-loading";

import { FormEvent, useState } from "react";

import Headers from "../components/headers/headers";
import imgLogin from "public/img/login/login.jpg";

interface user {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  data_nascimento: Date;
}

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function cadastro(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (
      (e.target as any).senha.value !== (e.target as any).confirmaSenha.value
    ) {
      alert("As senhas não coincidem.");
      setLoading(false);
      return;
    }
    const dados: user = {
      nome: (e.target as any).nome.value,
      email: (e.target as any).email.value,
      senha: (e.target as any).senha.value,
      telefone: (e.target as any).telefone.value,
      cpf: (e.target as any).cpf.value,
      data_nascimento: (e.target as any).data.value,
    };
    try {
      const resposta = await fetch("api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (resposta.status === 400) {
        alert("Usuário já cadastrado.");
        setLoading(false);
        return;
      } else {
        alert("Usuário cadastrado com sucesso.");
        setLoading(false);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Estamos com problemas no servidor, favor tente mais tarde!");
    }
  }

  return (
    <>
      <Headers />
      <section className="container bg-white px-10 pt-15 mx-auto pb-16">
        <div className="flex h-full flex-col sm:flex-row">
          <div className="sm:w-1/2 flex justify-center">
            <Image src={imgLogin} alt="QuemSomos" className="max-h-96 w-auto" />
          </div>

          <div className="sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-padrao text-3xl font-bold mb-8">Cadastro</h1>
            <form onSubmit={cadastro} className="w-full ">
              <div className="w-full grid md:grid-cols-2 md:gap-2">
                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Nome completo:
                  </label>
                  <input
                    type="text"
                    name="nome"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    id="nome"
                    required
                  ></input>
                </div>

                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    id="email"
                    required
                  ></input>
                </div>

                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    CPF:
                  </label>
                  <InputMask
                    mask="999.999.999-99"
                    type="text"
                    name="cpf"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    id="cpf"
                    required
                  ></InputMask>
                </div>

                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Telefone:
                  </label>
                  <InputMask
                    mask="(99)99999-9999"
                    type="text"
                    name="telefone"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    id="telefone"
                    required
                  ></InputMask>
                </div>

                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Data de nascimento:
                  </label>
                  <input
                    type="date"
                    name="data"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    id="data"
                    required
                  ></input>
                </div>

                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Senha:
                  </label>
                  <input
                    type="password"
                    name="senha"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg
                   focus:invalid:shadow-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
                    id="senha"
                    minLength={8}
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="block mb-2 text-xl font-normal text-gray-700">
                    Confirmar senha:
                  </label>
                  <input
                    type="password"
                    name="confirmaSenha"
                    className="mt-1 block w-full px-3 py-1 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg
                   focus:invalid:shadow-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
                    id="confirmaSenha"
                    minLength={8}
                    required
                  ></input>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="bg-padrao rounded-sm py-2 px-8 brightness-110 text-white font-bold mt-5 flex mx-auto hover:brightness-125 transition"
              >
                {loading ? (
                  <div className="svg">
                    <ReactLoading
                      type="bubbles"
                      color="#fff"
                      height={30}
                      width={60}
                    />
                  </div>
                ) : (
                  "Cadastrar"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
