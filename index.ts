import 'dotenv/config';
import { app } from './src/app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `💣 ${PORT}번 PORT에서 서버를 시작합니다. http://localhost:${PORT}`,
  );
});
