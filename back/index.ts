import 'dotenv/config';
import { app } from './src/app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `π£ ${PORT}λ² PORTμμ μλ²λ₯Ό μμν©λλ€. http://localhost:${PORT}`,
  );
});
