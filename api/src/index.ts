import express from 'express';
import exampleRouter from './routers/example';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/example', exampleRouter);

app.get('/', (_req, res) => {
  res.send('Deep Origin API is up');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
