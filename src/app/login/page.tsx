"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";

import { useState, FormEvent } from "react";

import Headers from "../components/headers/headers";
import imgLogin from "public/img/login/login.jpg";
import imgGoogle from "public/img/login/google.png";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);

  async function loginEntrar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email: (e.target as any).email.value,
        password: (e.target as any).password.value,
        redirect: false,
      });
      if (result?.error !== null) {
        setError(true);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("Login incorreto. Verifique suas credenciais.");
    }
  }

  async function google() {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <>
      <Headers />
      <section className="container bg-white px-10 pt-15 mx-auto ">
        <div className="flex h-full flex-col sm:flex-row">
          <div className="sm:w-1/2 flex justify-center">
            <Image src={imgLogin} alt="QuemSomos" className="max-h-96 w-auto" />
          </div>

          <div className="sm:w-1/2 flex flex-col justify-center">
            <form onSubmit={loginEntrar} className="w-full sm:w-80">
              <div className="mb-3">
                <label className="block mb-2 text-2xl font-medium text-black">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm  placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg focus:invalid:shadow-red-600
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  id="email"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-2xl font-medium text-black">
                  Senha:
                </label>
                <input
                  type="password"
                  name="senha"
                  className="mt-1 block w-full px-3 py-2 bg-gray-300 border-2 border-blue-400  border-slate-300 rounded-md text-sm placeholder-slate-400 	
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:bg-white invalid:border-hidden focus:shadow-cyan-400 focus:shadow-lg
                   focus:invalid:shadow-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
                  id="senha"
                  minLength={8}
                  required
                ></input>
              </div>

              <button
                type="submit"
                className="bg-padrao rounded-sm py-2 px-8 brightness-110 text-white font-bold mt-5 flex mx-auto hover:brightness-125 transition"
              >
                Acessar
              </button>
              {error && (
                <p className="mb-0 mt-3 font-bold text-red-500">
                  Email ou senha incorreto!
                </p>
              )}
              <p className="mb-1 mt-4 text-textSomos">
                <Link href="cadastro" className="text-padrao font-semibold">
                  Cadastre-se
                </Link>{" "}
                ou entre com:
              </p>
              <div className="flex">
                <Image
                  height="30"
                  src={imgGoogle}
                  alt="google"
                  onClick={() => google()}
                  className="cursor-pointer"
                />
                <Image
                  height="30"
                  src={imgGoogle}
                  alt="google"
                  className="cursor-pointer"
                />
              </div>

              <p className="mt-3">
                <Link href="/cadastro" className="text-padrao font-semibold">
                  Esqueceu a senha?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
