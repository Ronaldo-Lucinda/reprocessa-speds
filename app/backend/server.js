const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/processa-arquivo', (req, res) => {
    res.send('Recebendo arquivo');
    processaArquivo();
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});