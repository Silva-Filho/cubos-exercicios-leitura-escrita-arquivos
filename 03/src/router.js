import express from "express";

import { pesquisarEndereco } from "./controllers/pesquisarEndereco.js";

export const roteador = express();

roteador.get("/enderecos/:cep", pesquisarEndereco);

