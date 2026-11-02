(function(){
  const body=document.body, root=body.dataset.root||'./', menu=body.dataset.menu||'', role=csStorage.getItem('csDemoRole')||'guest';
  const nav=[['care','돌봄 찾기','care/home.html'],['share','용품 찾기','share/search.html'],['community','커뮤니티','community/home.html']];
  if(role!=='guest') nav.push(['chat','매칭 대화방','care/chatList.html'],['mypage','나의 이용','mypage/index.html']);
  if(role==='agency') nav.push(['dashboard','기관 대시보드','share/dashboard.html'],['agency','물품 관리','share/itemList.html']);
  if(role==='admin') nav.push(['admin','관리자','admin/index.html']);
  const header=document.querySelector('#site-header');
  if(header) header.innerHTML=`<header><div class="header-inner"><a class="logo" href="${root}index.html"><span class="logo-mark"></span><span>케어쉐어</span></a><nav>${nav.map(n=>`<a class="${menu===n[0]?'active':''}" href="${root+n[2]}">${n[1]}</a>`).join('')}</nav><div class="header-actions"><a href="${root}community/report.html">신고</a>${role==='guest'?`<a href="${root}member/join.html">회원가입</a><a class="login" href="${root}member/login.html">로그인</a>`:`<a class="bell" href="${root}alarm/list.html">알림<span class="count">2</span></a><a class="login" href="#" id="demoLogout">시연 로그아웃</a>`}</div></div></header>`;
  const footer=document.querySelector('#site-footer');
  if(footer) footer.innerHTML=`<footer><div class="footer-inner"><div><div class="brand">케어쉐어</div><p>돌봄과 복지용구를 한 곳에서 잇는 팀 프로젝트</p></div><div class="team">플랜B 팀 · 포트폴리오 정적 시연본<br>표시된 이름·연락처·데이터는 모두 시연용입니다.</div></div></footer>`;
  const toast=(text,warn=false)=>{const el=document.querySelector('#toast');if(!el)return;el.classList.toggle('warn',warn);el.querySelector('.tick').textContent=warn?'!':'✓';el.lastElementChild.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)};
})();
