import express,  {Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 5000;

app.get('/', (request: Request, response: Response) => {
  response.send('Hello world');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
