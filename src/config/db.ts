import mongoose from 'mongoose';

const DB_URL =
  process.env.DB_URL ||
  'MongoDB 서버 주소가 설정되지 않았습니다. env 파일도 필요합니다.\n';

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('connected', () =>
  console.log(`⭕ MongoDB 서버 연결 완료! URL: ${DB_URL}`),
);

db.on('error', (error) => console.error('❌ MongoDB 서버 연결 실패,,,'));
