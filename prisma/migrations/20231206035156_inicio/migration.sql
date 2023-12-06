-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "senha" TEXT,
    "numero" TEXT,
    "nome" VARCHAR(50) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endereco" TEXT,
    "cpf" TEXT,
    "complemento" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "telefone" TEXT,
    "data_nascimento" TIMESTAMP(0),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);
