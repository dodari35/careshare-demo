# 화면 및 리소스 목록

## 화면 변환 목록

| 화면군 | 원본 JSP | 정적 HTML |
|---|---|---|
| 공통 | `index.jsp`, `totalSearch.jsp` | `index.html`, `totalSearch.html` |
| 용품 | `share/search.jsp`, `agencyDetail.jsp`, `rentalForm.jsp`, `dashboard.jsp`, `itemList.jsp`, `itemForm.jsp`, `productForm.jsp`, `rentalManage.jsp`, `qna.jsp`, `qnaManage.jsp`, `extendForm.jsp` | 같은 경로의 `.html` |
| 돌봄 | `care/home.jsp`, `caregiverList.jsp`, `caregiverProfile.jsp`, `requestForm.jsp`, `requestList.jsp`, `recommend.jsp`, `requestSend.jsp`, `jobPost.jsp`, `chatList.jsp`, `chat.jsp`, `chatStart.jsp`, `chatDock.jsp`, `matchDetail.jsp`, `offer.jsp`, `caregiverMypage.jsp` | 같은 경로의 `.html` |
| 커뮤니티 | `community/home.jsp`, `list.jsp`, `read.jsp`, `write.jsp`, `report.jsp` | 같은 경로의 `.html` |
| 회원 | `member/login.jsp`, `join.jsp`, `caregiverJoin.jsp`, `agencyJoin.jsp`, `leave.jsp`, `zipcode.jsp` | 같은 경로의 `.html` |
| 개인 | `mypage/index.jsp`, `alarm/list.jsp` | 같은 경로의 `.html` |
| 관리자 | `admin/index.jsp` | `admin/index.html` |

총 42개 정적 HTML 화면입니다.

## 재사용 리소스

- `css/careshare.css`: 원본 공통 스타일 그대로 사용
- `img/profile/*.jpg`: 원본 프로필 이미지 40개
- `img/map/agn01map.png`: 원본 기관 위치 지도
- `css/demo.css`: JSP 내부 화면별 스타일과 정적 시연에 필요한 보완 스타일
- `js/demo.js`: 공통 헤더·푸터, 시연 로그인, 폼·탭·채팅 동작

## 정적 변환에서 제외한 서버 파일

- `*Proc.jsp`: 등록, 수정, 승인, 신고, 상태 변경 등 DB 처리
- `*Image.jsp`: DB/업로드 파일 이미지 응답
- `chatPoll.jsp`, `chatSend.jsp`, `chatFileSend.jsp`, `chatTyping.jsp`: 실시간 채팅 서버 처리
- `sessionCheck.jsp`, `idCheck.jsp`, `logout.jsp`: 세션과 중복 확인 처리
- `dbcheck.jsp`, `recalc.jsp`: 개발·운영 점검
- `inc/*.jsp`: 공통 include이며 `demo.js`와 각 HTML 구조에 통합

이 파일들은 페이지 누락이 아니라 GitHub Pages에서 실행할 수 없는 서버 전용 엔드포인트입니다.
