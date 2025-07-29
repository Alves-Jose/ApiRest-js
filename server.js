import express from "express";

//importando o prisma client
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

//importando express
const app = express();
app.use(express.json());

//Enviando dados do usuario para o DB
app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

//Editando usuário do DB com ID (01:00:00)
app.put("/usuarios/:id", async (req, res) => {

  await prisma.user.update({
    where: {
        id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

//listando os usuários que ja foram cadastrados no DB
app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.listen(3000);

/* Criar API de Usuários

    - Criar um usuário  
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário


    1) Tipo de Rota / Método HTTP
    2) Endereço

    josemarcos8133
    Nutella1010
*/
