import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//CONFIGURAÇÃO ENDPOINT

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

//CRAINDO ENDPOINT PARA ENVIAR E RECEBER MENSAGENS A API DA GEMINI E RETORNAR MENSAGENS DO BACKEND PARA O FRONTEND


app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body;
});