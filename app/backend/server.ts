import * as express from 'express';
import { processaArquivo } from './src/processa-arquivo';


const app = express.;
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


app.get('/processa-arquivo', (req: Request, res: Response) => {
    res.send('Processando arquivo.');
    processaArquivo('/tmp/sped-contri.txt');;;
  });
  



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});