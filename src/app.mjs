import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname));  // Cambiado para usar __dirname directamente

app.get('/', (req, res) => {
  res.send('app');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
