// app.mjs
import http from 'http';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;

const server = http.createServer(async (req, res) => {
  const filePath = req.url === '/' ? '/index.html' : req.url;
  const fullPath = join(__dirname, 'public', filePath);

  try {
    const content = await fs.readFile(fullPath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
