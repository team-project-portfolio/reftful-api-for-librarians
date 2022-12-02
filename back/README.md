과제 제출: 다음 Gitlab Group에 프로젝트 생성 후 Push
https://kdt-gitlab.elice.io/sw_track/class_03/materials/unique-homework

# 도서관 사서가 이용하는 API

## 1. API 문서
https://documenter.getpostman.com/view/23971901/2s8YsxuWPQ

## 2. Env
PORT=8000
DB_URL=mongodb+srv://kku:8GCcZnv5zc5Wr27Z@cluster0.tgjjbu0.mongodb.net/homework?retryWrites=true&w=majority
S3_ID={}
S3_SECRET={}

/* 도서 정보 모두 가져오기 */
GET /api/book HTTP/1.1

/* 도서 정보 가져오기 */
GET /api/book/:id HTTP/1.1

/* 도서 등록하기 */
POST /api/book HTTP/1.1

/* 도서 삭제하기 */
DELETE /api/book/:id HTTP/1.1

/* 도서 정보 수정하기 */
PUT /api/book/:id HTTP/1.1

/* 도서 공개 여부 수정하기 */
PATCH /api/book/:id HTTP/1.1

/* 도서 표지 사진 업로드 presigned url 요청 */
POST /api/image-upload HTTP/1.1

/* 도서 표지 사진 S3 업로드 */
POST /api/image-upload HTTP/1.1