import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { schema } from "./schema";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface usuario {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  data_nascimento: Date;
}
export async function POST(request: Request) {
  const user: usuario = await request.json();

  const { error } = schema.validate(user);

  if (error) {
    return NextResponse.json(
      { error: "Bad Request", message: error.message },
      { status: 400 }
    );
  }

  const senhaCriptografada = await bcrypt.hash(user.senha, 10);

  try {
    const existingUser = await prisma.usuarios.findMany({
      where: {
        email: user.email,
      },
    });
    if (existingUser.length !== 0) {
      return NextResponse.json(
        { error: "Bad Request", message: "Email já cadastrado" },
        { status: 400 }
      );
    }
    await prisma.usuarios.create({
      data: {
        nome: user.nome,
        email: user.email,
        senha: senhaCriptografada,
        telefone: user.telefone,
        cpf: user.cpf,
        data_nascimento: new Date(user.data_nascimento),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(
      { message: "Usuário cadastrado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", message: error },
      { status: 500 }
    );
  }
}
