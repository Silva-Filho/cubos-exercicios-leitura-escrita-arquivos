import express from "express";

import { roteador } from "./router.js";

const servidor = express();

const porta = 3000;
/* const porta = 5555; */

servidor.use(express.json());
servidor.use(roteador);

servidor.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}.`);
} );

