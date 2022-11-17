특강 과제 안내
과제 제출: 다음 Gitlab Group에 프로젝트 생성 후 Push
https://kdt-gitlab.elice.io/sw_track/class_03/materials/unique-homework
과제 기한: 2022.12.01 까지 (필수 X)
과제 제출 혜택: 선착순 10명만 특강사님 코드리뷰
선착순으로 제출한 사람들 코드 리뷰는 익명으로 공개됨.
과제 시나리오: 도서관 사서가 이용하는 도서 등록 API
다음 URL로 요청하면 주석에서 표현한 행위를 하는 REST API를 만들기

/* 책 정보 모두 가져오기 */
GET /api/book HTTP/1.1

/* 책 정보 가져오기 */
GET /api/book/:id HTTP/1.1

/* 책 등록하기 */
POST /api/book HTTP/1.1

/* 책 삭제하기 */
DELETE /api/book/:id HTTP/1.1

/* 책 정보 수정하기 */
PUT /api/book/:id HTTP/1.1