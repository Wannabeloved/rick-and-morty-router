
import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

const dataPath = path.join(__dirname, 'data');

// Загружаем данные из файлов
// ПРИМЕЧАНИЕ: Убедитесь, что файлы characters.json, locations.json и episodes.json существуют в папке 'data'
let characters = [];
let locations = [];
let episodes = [];

try {
  characters = JSON.parse(fs.readFileSync(path.join(dataPath, 'characters.json'), 'utf-8'));
} catch (e) {
  console.error("Could not load characters.json. Make sure the file exists in the 'data' directory.");
}

try {
  locations = JSON.parse(fs.readFileSync(path.join(dataPath, 'locations.json'), 'utf-8'));
} catch (e) {
  console.error("Could not load locations.json. Make sure the file exists in the 'data' directory.");
}

try {
  episodes = JSON.parse(fs.readFileSync(path.join(dataPath, 'episodes.json'), 'utf-8'));
} catch (e) {
  console.error("Could not load episodes.json. Make sure the file exists in the 'data' directory.");
}


const data = { characters, locations, episodes };

const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
  console.log('Available endpoints: /characters, /locations, /episodes');
});
