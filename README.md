# 케어쉐어 포트폴리오 정적 시연본

실제 회원가입·접수·승인·메시지 전송을 하지 않습니다. 개인정보 대신 가상 내용을 입력하세요.

## GitHub Pages 배포

1. ZIP을 풉니다. ZIP 자체가 아닌 내용 전체를 저장소 루트에 올립니다.
2. index.html, css/, js/, care/, share/ 등이 저장소 루트에 있어야 합니다. 숨김 파일 .nojekyll도 포함합니다.
3. Settings → Pages → Build and deployment → Source에서 Deploy from a branch를 선택합니다.
4. 올린 브랜치(예: main), /(root)를 선택하고 Save를 누릅니다.
5. 배포 완료 후 Pages에 표시된 주소로 접속합니다. 저장소 하위 경로도 상대 경로로 동작합니다.

[GitHub 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 시연 흐름

- 메인 → 용품 찾기 → 지역 선택 → 이 조건으로 찾기.
- 대표 기관 상세 → 물품 선택 → 대여 신청 → 기간 선택 → 신청. 상단 역할을 일반 회원으로 바꾸면 나의 이용에서 로컬 기록을 확인할 수 있습니다.
- 커뮤니티 → 글 쓰기 → 제목·내용 → 저장 → 목록 검색.
- 돌보미 목록에서 조건 검색·정렬.
- 대화방 메시지 입력 → 새로고침하면 로컬 메시지를 복원합니다. 상대에게 전송하지 않습니다.
- 상단 역할 메뉴로 기관·관리자 화면을 살펴볼 수 있습니다. 실제 권한 검사는 아닙니다.

미지원 기능과 원본 대비 차이, 검증 범위는 CONVERSION_REPORT.md를 확인하세요. 이번 작업은 GitHub에 실제 게시하지 않았습니다.
