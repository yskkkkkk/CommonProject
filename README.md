# Persona

한 계정으로 여러 개의 **캐릭터(페르소나)** 를 만들어, 그 페르소나로 게시·소통하는 SNS 서비스입니다.
일반적인 SNS와 달리 사용자의 원래 정체성이 아니라 상황·관심사별로 만든 캐릭터 단위로 활동합니다.

> 학기 팀 프로젝트로 진행했습니다 (5인, 2022-01-03 ~ 2022-02-18).

## 기술 스택

**Backend**
- Java, Spring Boot, MyBatis, MySQL
- JWT 인증, Spring Mail(이메일 인증), Swagger(springfox)

**Frontend**
- React 17, React Router
- Tailwind CSS, Material Tailwind, Headless UI

## 주요 기능

- **회원** — 회원가입 / 로그인(JWT), 이메일 인증, 아이디·비밀번호 찾기, 계정 설정
- **캐릭터(페르소나)** — 생성 / 수정 / 삭제, 닉네임 중복 확인, 카테고리, 팔로우·팔로워, 업적(achievement), 알림(팔로우·보관함·업적 등 유형별 설정)
- **콘텐츠** — 게시물 작성 / 수정 / 삭제(미디어 업로드), 메인·개인 피드, 태그·본문 검색, 댓글, 게시물·댓글 좋아요, 신고, 해시태그
- **보관함(Storage)** — 게시물을 모아 저장하는 컬렉션 생성·관리, 저장/해제

## 프로젝트 구조

```
backend/    Spring Boot + MyBatis REST API
frontend/   React 웹 클라이언트
docs/       설계 문서 — API 명세서, 화면정의서
exec/       DB 스키마(DDL) · 초기 데이터(DML) 등 배포용 자료
```

## 실행 · 배포

- DB는 `exec/persona_ddl.sql`(스키마)과 `exec/persona_dml.sql`(초기 데이터)로 구성합니다.
- 애플리케이션 설정 예시는 `exec/application.properties.png`를 참고하세요.

## 참고

- 애플리케이션 설정(`backend/src/main/resources/application.properties`)에 하드코딩된 자격증명이 남아 있어, 별도의 보안 정리(자격증명 폐기·환경변수 이전)가 필요합니다.
