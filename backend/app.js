import express from 'express';
import './db.js'; // Assurez-vous que le chemin est correct
import articleRoutes from './routes/article.routes.js'; // Importer les routes des articles

const app = express();
const port = 5000;

app.use(express.json()); // Pour parser les requêtes JSON

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', articleRoutes); // Utiliser les routes des articles

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
