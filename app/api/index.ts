import express, { Express, Request, Response } from 'express';
import { reprocessarArquivo } from './src/reprocessa-arquivo/';

const servidor = express();

servidor.get('/', (req: Request, res: Response) => {
    res.send('Hello World!').end();
})

//console.log(process.argv[1])

servidor.get('/reprocessa-arquivo', (req: Request, res: Response) => {
    res.send('reprocessa-arquivo').end();
    reprocessarArquivo('/tmp/arquivoSped.txt');
})

servidor.listen(3000, () => console.log('Servidor Rodando'));