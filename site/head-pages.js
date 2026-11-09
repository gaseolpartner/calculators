/* 가설파트너 홈페이지 head 의 <script id="gp-pages-js"> 내용 그대로 (11-02 이동). 고치면 github에 올리면 10분 안에 반영. 원본 백업: 08 폴더 gp-head-footer-backup.json */
(function(){
var P=location.pathname.replace(/\/+$/,'');if(P===''||P==='/')return;
/* 페이지 맨 위 배너 그림 바꾸기 (11-08) — 관리자 디자인 화면을 안 거치고 github 그림으로 바꿈.
 * 바꿀 페이지가 생기면 BAN 에 '페이지 주소':['옛 그림 파일 번호','새 그림 주소'] 한 줄 추가.
 * 새 그림은 site/img/ 에 올림 (원본: 08 폴더 01. 홈페이지 배너) */
var BAN={'/pages/calculators':['1678744446','https://gaseolpartner.github.io/calculators/site/img/banner-free-tools.png']};
if(BAN[P]){(function(o,n){
  var st=document.createElement('style');st.id='gp-ban';st.textContent='img[src$="/file/'+o+'"]{content:url("'+n+'")}';document.head.appendChild(st); // 크롬·사파리: 그려지기 전에 바로
  var k=0,iv=setInterval(function(){[].forEach.call(document.querySelectorAll('img[src$="/file/'+o+'"]'),function(i){i.src=n;i.removeAttribute('srcset');});if(++k>60)clearInterval(iv);},150); // 그 밖의 브라우저
})(BAN[P][0],BAN[P][1]);}
var OLD={'/pages/rental':'/pages/precio','/pages/rentalform':'/pages/precio','/pages/cost':'/pages/precio','/pages/sale':'/pages/precio','/pages/anorderform':'/pages/precio','/pages/outsource':'/pages/precio','/pages/outsourceform':'/pages/precio','/pages/gallery':'/pages/about','/pages/news':'/pages/support2','/pages/history':'/pages/about','/pages/guidebook':'/pages/support2','/pages/contact':'/pages/support'};
if(OLD[P]){location.replace(OLD[P]);return;}
var KAKAO='https://pf.kakao.com/_xovuVG/chat';
var CH='https://www.youtube.com/@%EA%B0%80%EC%84%A4%ED%8C%8C%ED%8A%B8%EB%84%88';
var CSS=''
+'.gpp-wrap{max-width:1180px;margin:0 auto;padding:0 24px;box-sizing:border-box;word-break:keep-all}'
+'.gpp-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}'
+'.gpp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:15px 26px;border-radius:10px;font-size:17px;font-weight:800;text-decoration:none!important;transition:transform .15s;box-sizing:border-box;cursor:pointer}'
+'.gpp-btn:hover{transform:translateY(-2px)}'
+'.gpp-y{background:#F2B705;color:#1b1b1b!important;box-shadow:0 8px 20px rgba(242,183,5,.35)}.gpp-d{background:#1b1b1b;color:#fff!important}.gpp-w{background:#fff;color:#222!important;border:1.5px solid #cfcfcf}'
+'a.gpp-kbtn{display:inline-flex!important;align-items:center;gap:6px;background:#FEE500;color:#191919!important;font-weight:800;border-radius:8px;padding:8px 14px;text-decoration:none!important}'
+'.gpp-note{max-width:1180px;margin:24px auto 0;padding:0 24px;box-sizing:border-box}'
+'.gpp-note>div{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;background:#fff8dc;border:1px solid #f2d36b;border-radius:16px;padding:22px 26px;word-break:keep-all}'
+'.gpp-note b{display:block;font-size:20px;font-weight:800;color:#1b1b1b}.gpp-note span{display:block;font-size:15px;color:#666;margin-top:4px}'
+'.gpp-note .gpp-btns{justify-content:flex-start}.gpp-note .gpp-btn{padding:13px 20px;font-size:16px}'
+'.gpp-after{text-align:center;margin-top:18px;font-size:15px;color:#666}'
+'.gpp-hero{position:relative;background:linear-gradient(180deg,#fff 0%,#f5f5f2 100%);padding:64px 0 56px;text-align:center;overflow:hidden}'
+'.gpp-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#e6e6e2 1px,transparent 1px),linear-gradient(90deg,#e6e6e2 1px,transparent 1px);background-size:34px 34px;opacity:.55;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 70%)}'
+'.gpp-hero .gpp-wrap{position:relative}'
+'.gpp-eye{display:inline-block;font-size:15px;font-weight:700;color:#8a6a00;background:#fff4cc;border:1px solid #f2d36b;padding:6px 14px;border-radius:999px}'
+'.gpp-h1{font-size:48px;line-height:1.25;font-weight:800;color:#1b1b1b;letter-spacing:-1.6px;margin:20px 0 16px}'
+'.gpp-mark{position:relative;white-space:nowrap;z-index:0}.gpp-mark:after{content:"";position:absolute;left:-6px;right:-6px;bottom:6px;height:18px;background:#F2B705;opacity:.55;z-index:-1}'
+'.gpp-sub{font-size:19px;line-height:1.65;color:#555;margin:0 auto 28px;max-width:660px}'
+'.gpp-cad{margin-top:26px;font-size:14px;color:#888}.gpp-steps{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:20px;font-size:14px;color:#555}.gpp-steps span{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:#fff;border:1px solid #e1e1e1}.gpp-steps b{display:inline-flex;width:20px;height:20px;border-radius:50%;background:#F2B705;color:#1b1b1b;font-size:12px;align-items:center;justify-content:center}.gpp-stn{margin-top:10px;font-size:14px;color:#777}.gpp-stn a{color:#b78800!important;font-weight:700;text-decoration:none!important}.gpp-trust{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:28px}.gpp-trust span{min-width:170px;padding:14px 18px;border-radius:14px;background:#1b1b1b;color:#bbb;font-size:13.5px}.gpp-trust b{display:block;font-size:22px;font-weight:800;color:#F2B705;margin-bottom:2px}.gpp-cad span{display:inline-block;margin:6px 4px 0;padding:5px 11px;border:1px solid #e1e1e1;border-radius:7px;background:#fff;color:#444;font-weight:600}'
+'.gpp-sec{padding:72px 0}.gpp-g{background:#f6f6f4}'
+'.gpp-h2{text-align:center;font-size:32px;font-weight:800;color:#1b1b1b;letter-spacing:-1px;margin:0 0 10px}.gpp-h2s{text-align:center;font-size:17px;color:#777;margin:0 0 36px}'
+'.gpp-feat{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}'
+'.gpp-f{background:#fff;border:1px solid #e8e8e8;border-radius:16px;padding:26px 22px;text-align:left}'
+'.gpp-n{display:inline-flex;width:40px;height:40px;border-radius:12px;background:#1b1b1b;color:#F2B705;font-weight:800;font-size:18px;align-items:center;justify-content:center}'
+'.gpp-f h3{font-size:19px;font-weight:800;color:#1b1b1b;margin:14px 0 6px}.gpp-f p{font-size:15px;line-height:1.6;color:#666;margin:0}'
+'.gpp-price{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;background:#1b1b1b;border-radius:20px;padding:36px 40px;color:#fff;text-align:left}'
+'.gpp-price small{display:block;color:#F2B705;font-weight:700;font-size:15px;margin-bottom:6px}'
+'.gpp-p{font-size:38px;font-weight:800;letter-spacing:-1px}.gpp-p em{font-style:normal;font-size:19px;color:#bbb;font-weight:600;margin-left:6px}'
+'.gpp-p2{font-size:15.5px;color:#bbb;margin-top:8px;line-height:1.6}'
+'.gpp-price .gpp-w{background:transparent;color:#fff!important;border-color:#666}'
+'.gpp-vids{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}'
+'.gpp-v{display:block;text-decoration:none!important;color:inherit;text-align:left}'
+'.gpp-vt{position:relative;display:block;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#111}.gpp-vt img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}.gpp-v:hover .gpp-vt img{transform:scale(1.04)}'
+'.gpp-vt i{position:absolute;left:50%;top:50%;width:56px;height:40px;margin:-20px 0 0 -28px;border-radius:12px;background:#ff0033;color:#fff;font-style:normal;display:flex;align-items:center;justify-content:center;font-size:18px}'
+'.gpp-v b{display:block;margin-top:10px;font-size:16px;font-weight:700;color:#1b1b1b;line-height:1.45}'
+'.gpp-end{text-align:center;background:#F2B705;padding:56px 0}.gpp-end h2{font-size:30px;font-weight:800;color:#1b1b1b;margin:0 0 8px}.gpp-end p{font-size:17px;color:#3a3a3a;margin:0 0 24px}.gpp-end .gpp-w{background:transparent;border-color:#1b1b1b}'
+'.gpp-hide{display:none!important}'
+'.gpp-cmp{padding:0 0 8px;background:#f5f5f2}.gpp-cmpbox{background:#1b1b1b;border-radius:20px;padding:34px 40px;color:#fff;position:relative;top:-8px;box-shadow:0 18px 40px rgba(0,0,0,.18)}'
+'.gpp-cmpbox .gpp-eye{background:#2b2b2b;border-color:#444;color:#F2B705}.gpp-cmpbox h2{font-size:28px;font-weight:800;letter-spacing:-.8px;margin:14px 0 22px;color:#fff;line-height:1.35}.gpp-cmpbox h2 b{color:#F2B705}'
+'.gpp-row{display:grid;grid-template-columns:84px 1fr 220px;gap:16px;align-items:center;margin:12px 0}.gpp-row>b{font-size:16px;font-weight:800}.gpp-row>em{font-style:normal;font-size:15px;color:#ccc}.gpp-row>em strong{color:#fff;font-size:18px}'
+'.gpp-track{height:18px;border-radius:999px;background:#2e2e2e;overflow:hidden;position:relative}.gpp-fill{display:block;height:100%;width:0;border-radius:999px;transition:width 1.6s cubic-bezier(.2,.8,.2,1)}.gpp-cmp.on .gpp-fill{width:var(--w)}'
+'.gpp-fill.y{background:#F2B705}.gpp-fill.g{background:repeating-linear-gradient(90deg,#777 0 14px,#5a5a5a 14px 22px)}.gpp-track.more:after{content:"…";position:absolute;right:8px;top:-6px;color:#ddd;font-weight:800}'
+'.gpp-cmpf{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-top:18px;font-size:13.5px;color:#999}.gpp-cmpf a{color:#F2B705!important;font-weight:800;text-decoration:none!important;font-size:15px}'
+'.gpp-latest .gpp-vbox{max-width:900px;margin:0 auto;border-radius:16px;overflow:hidden;background:#000;box-shadow:0 18px 40px rgba(0,0,0,.15);aspect-ratio:16/9}.gpp-latest iframe{width:100%;height:100%;border:0;display:block}'
+'.gpp-live{display:inline-flex;align-items:center;gap:7px}.gpp-live:before{content:"";width:9px;height:9px;border-radius:50%;background:#e53935;box-shadow:0 0 0 0 rgba(229,57,53,.6);animation:gppPing 1.8s infinite}@keyframes gppPing{70%{box-shadow:0 0 0 9px rgba(229,57,53,0)}100%{box-shadow:0 0 0 0 rgba(229,57,53,0)}}'
+'@media (max-width:640px){.gpp-cmpbox{padding:24px 18px}.gpp-cmpbox h2{font-size:21px}.gpp-row{grid-template-columns:58px 1fr;gap:6px 10px}.gpp-row>em{grid-column:2;font-size:13.5px}.gpp-row>b{font-size:14.5px}}'
+'.gpp-mcard{display:none;margin:0 0 18px;background:#fff;border:1px solid #e8e8e8;border-radius:16px;padding:20px 18px;word-break:keep-all;text-align:left}'
+'.gpp-mcard h3{font-size:18px;font-weight:800;color:#1b1b1b;margin:0 0 10px}.gpp-mcard .gpp-p{font-size:28px;color:#1b1b1b}.gpp-mcard .gpp-p em{color:#888}'
+'.gpp-mcard dl{margin:14px 0 16px;font-size:14.5px;line-height:1.55;color:#555}.gpp-mcard dt{font-weight:800;color:#1b1b1b;margin-top:10px}.gpp-mcard dd{margin:2px 0 0}'
+'.gpp-hint{display:none;font-size:13px;color:#888;margin:0 0 8px}'
+'.gpp-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.gpp-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}'
+'a.gpp-f{text-decoration:none!important;color:inherit;transition:transform .2s,border-color .2s}a.gpp-f:hover{transform:translateY(-4px);border-color:#F2B705}'
+'.gpp-f .gpp-go{display:block;margin-top:12px;font-weight:800;color:#1b1b1b;font-size:15px}'
+'.gpp-pro{display:inline-flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:14px;padding:10px 16px;border-radius:999px;background:#1b1b1b;color:#fff!important;text-decoration:none!important;font-size:15px;font-weight:700}.gpp-pro b{background:#F2B705;color:#1b1b1b;border-radius:999px;padding:2px 9px;font-size:12.5px;font-weight:900}.gpp-pro small{color:#bbb;font-size:13px;font-weight:500}.gpp-pro i{font-style:normal;color:#F2B705}.gpp-pro:hover{background:#000}'
+'.gpp-cmpg{display:grid;grid-template-columns:minmax(0,1fr) 230px;gap:34px;align-items:center}.gpp-cmpv{display:flex;flex-direction:column;gap:10px}.gpp-cmpv iframe{width:100%;aspect-ratio:9/16;border:0;border-radius:14px;background:#000;display:block}.gpp-cmpv a{color:#F2B705!important;font-size:13.5px;font-weight:800;text-decoration:none!important;line-height:1.45}.gpp-cmpv a span{display:block;color:#bbb;font-weight:500}'
+'@media (max-width:820px){.gpp-cmpg{grid-template-columns:1fr}.gpp-cmpv{max-width:240px;margin:0 auto;text-align:center}}'
+'@media (max-width:900px){.gpp-grid4{grid-template-columns:1fr 1fr}.gpp-grid3{grid-template-columns:1fr}}'
+'@media (max-width:640px){.gpp-mcard,.gpp-hint{display:block}.gpp-grid4{grid-template-columns:1fr}}'
+'@media (max-width:900px){.gpp-feat{grid-template-columns:1fr 1fr}.gpp-vids{grid-template-columns:1fr}.gpp-price{grid-template-columns:1fr;padding:28px 22px}}'
+'@media (max-width:640px){.gpp-hero{padding:40px 0}.gpp-trust span{min-width:0;flex:1 1 40%;padding:12px}.gpp-trust b{font-size:18px}.gpp-h1{font-size:31px;letter-spacing:-1px}.gpp-mark:after{height:12px;bottom:4px}.gpp-sub{font-size:16px}.gpp-btn{flex:1 1 100%;padding:14px 12px;font-size:16px}.gpp-h2{font-size:25px}.gpp-sec{padding:52px 0}.gpp-f{padding:18px 16px}.gpp-f h3{font-size:17px}.gpp-p{font-size:30px}.gpp-end h2{font-size:23px}.gpp-note>div{padding:18px}}';
function addStyle(){if(document.getElementById('gpp-style'))return;var s=document.createElement('style');s.id='gpp-style';s.appendChild(document.createTextNode(CSS));(document.head||document.documentElement).appendChild(s);}
addStyle();
function el(h){var d=document.createElement('div');d.innerHTML=h;return d.firstChild;}
function blocks(){var m=document.getElementById('skinMainSection');return m?[].slice.call(m.querySelectorAll(':scope>.skin_block')):[];}
function findBlock(re){var b=blocks();for(var i=0;i<b.length;i++){if(re.test(b[i].textContent))return b[i];}return null;}
function txt(root,map){if(!root)return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n,list=[];while(n=w.nextNode())list.push(n);list.forEach(function(n){var v=n.nodeValue,o=v;for(var i=0;i<map.length;i++){v=v.split(map[i][0]).join(map[i][1]);}if(v!==o)n.nodeValue=v;});}
function btnByText(root,re){var a=root?root.querySelectorAll('a'):[];for(var i=0;i<a.length;i++){if(re.test(a[i].textContent))return a[i];}return null;}
function setBtn(a,text,href,blank){if(!a)return;a.textContent=text;a.setAttribute('href',href);if(blank){a.target='_blank';a.rel='noopener';}else{a.removeAttribute('target');}}
function form(o){var f=null;blocks().forEach(function(x){if(!f&&x.querySelector('button.form_send'))f=x;});if(!f||f.getAttribute('data-gpp'))return;var t=f.querySelectorAll('.form_title');var inp=f.querySelectorAll('input:not([type=hidden]):not([type=checkbox]),textarea');
 for(var i=0;i<t.length&&i<o.labels.length;i++){t[i].textContent=o.labels[i];}
 for(var j=0;j<inp.length&&j<o.ph.length;j++){inp[j].placeholder=o.ph[j];}
 var s=f.querySelector('button.form_send');if(s)s.textContent=o.send;
 var d=f.querySelector('.form_info_desc');if(d)d.innerHTML='<p style="font-size:17px;color:#666;line-height:1.6">'+o.desc+'</p>';
 var c=f.querySelector('.module_container');if(c&&!f.querySelector('.gpp-after'))c.appendChild(el('<p class="gpp-after">급하시면 <a class="gpp-kbtn" href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡으로 바로 문의</a></p>'));
 f.setAttribute('data-gpp','1');}
var VID=function(id,t){return '<a class="gpp-v" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener"><span class="gpp-vt"><img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="" loading="lazy"><i>▶</i></span><b>'+t+'</b></a>';};
function intro(){
 if(document.getElementById('gpp-intro'))return true;var b=blocks();if(b.length<5)return false;
 var hero=el('<section id="gpp-intro" class="gpp-hero"><div class="gpp-wrap"><span class="gpp-eye">CATS · 가설 설계 프로그램</span>'
 +'<h1 class="gpp-h1">시스템 비계·서포트 배치,<br><span class="gpp-mark">CAD에서 자동으로</span></h1>'
 +'<p class="gpp-sub">도면 하나로 배치부터 3D 확인, 수량 엑셀까지.<br>반복하던 가설 설계 작업을 프로그램으로 줄여 보세요.</p>'
 +'<div class="gpp-btns"><a class="gpp-btn gpp-y" href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">⬇ 체험판 받기 · 20일 무료</a><a class="gpp-btn gpp-w" href="/pages/sale01">가격·라이선스 보기</a></div>'
 +'<a class="gpp-pro" href="https://www.autocats.co.kr/pro" target="_blank" rel="noopener"><b>무료</b>CATS Pro · CAD 애드인도 함께 받기<small>다중 출력 · 레이어·폰트 정리</small><i>→</i></a>'
 +'<div class="gpp-steps"><span><b>1</b>CAD별 설치 파일 받기</span><span><b>2</b>첫 사용부터 20일 무료</span><span><b>3</b>구매 후 코드 입력 · 1코드 2PC</span></div><p class="gpp-stn">설치·코드 입력이 막히면 <a href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡 문의</a> · <a href="https://www.autocats.co.kr/seouldream/manual" target="_blank" rel="noopener">매뉴얼 보기</a> · <a href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">업데이트 내역</a> · <a href="https://youtube.com/shorts/WAHK4hAjn0E" target="_blank" rel="noopener">▶ 설치 영상 (57초)</a></p><div class="gpp-trust"><span><b>13개 업체</b>정기 구독 중</span><span><b>상위 5개사 중 3곳</b>업계 대형사 사용</span><span><b>평균 5대 이상</b>업체당 사용 PC</span></div><div class="gpp-cad">지원 CAD<br><span>AutoCAD 2013~</span><span>ZWCAD 2019~</span><span>BricsCAD V16~</span><span>GstarCAD 2021~</span><span>CADian 2020~</span></div></div></section>');
 var feat=el('<section class="gpp-sec"><div class="gpp-wrap"><h2 class="gpp-h2">도면 하나로, 배치부터 엑셀 수량까지</h2><p class="gpp-h2s">설계자가 손으로 반복하던 작업을 CATS가 처리합니다</p><div class="gpp-feat">'
 +'<div class="gpp-f"><span class="gpp-n">1</span><h3>평면 자동 배치</h3><p>시스템 비계·서포트를 평면에 규칙대로 자동 배치</p></div>'
 +'<div class="gpp-f"><span class="gpp-n">2</span><h3>입면·단면 정리</h3><p>입면도·단면도를 명령어 하나로 빠르게 완성</p></div>'
 +'<div class="gpp-f"><span class="gpp-n">3</span><h3>3D 확인</h3><p>배치 결과를 입체로 바로 검토</p></div>'
 +'<div class="gpp-f"><span class="gpp-n">4</span><h3>수량 → 엑셀</h3><p>자재 수량을 집계해 엑셀 출하의뢰서까지</p></div>'
 +'</div></div></section>');
 var price=el('<section class="gpp-sec" style="padding-top:0"><div class="gpp-wrap"><div class="gpp-price"><div><small>라이선스 가격 (VAT 별도)</small><div class="gpp-p">200,000원<em>/ 월</em></div><div class="gpp-p2">연간 2,160,000원 (10% 할인) · 1인 2대 PC 설치 (동시 접속 불가)<br>CAD 종류 상관없이 사용</div></div>'
 +'<div class="gpp-btns"><a class="gpp-btn gpp-y" href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">⬇ 체험판 받기 · 20일 무료</a><a class="gpp-btn gpp-w" href="/pages/purchase">구매 요청</a></div></div></div></section>');
 var vids=el('<section class="gpp-sec gpp-g"><div class="gpp-wrap"><h2 class="gpp-h2">영상으로 먼저 보기</h2><p class="gpp-h2s">처음 시작하는 분은 연습 #1부터 보시면 됩니다</p><div class="gpp-vids">'
 +VID('ncQcwocUdTE','연습 #1 · 도면 하나로 배치부터 엑셀 수량까지')+VID('4ANirXYCPxU','연습 #2 · 지붕부터 그리는 입면도 완성하기')+VID('BrMTPD0Lt9U','CATS 1.5.7 실전 흐름 · 샘플 도면 한 장으로 동바리부터 비계 입면까지 2분')
 +'</div><div class="gpp-btns" style="margin-top:26px"><a class="gpp-btn gpp-w" href="'+CH+'/videos" target="_blank" rel="noopener">유튜브에서 전체 영상 보기 →</a></div></div></section>');
 var end=el('<section class="gpp-end"><div class="gpp-wrap"><h2>직접 써 보고 결정하세요</h2><p>체험판은 바로 받아 첫 사용부터 20일 동안 무료로 써 볼 수 있습니다</p><div class="gpp-btns"><a class="gpp-btn gpp-d" href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">⬇ 체험판 받기 · 20일 무료</a><a class="gpp-btn gpp-w" href="/pages/purchase">구매 요청</a></div></div></section>');
 b[1].classList.add('gpp-hide');b[2].classList.add('gpp-hide');b[3].classList.add('gpp-hide');[].forEach.call(b[2].querySelectorAll('iframe'),function(f){f.src='about:blank';});[].forEach.call(b[3].querySelectorAll('iframe'),function(f){f.src='about:blank';});
 var cmp=el('<section class="gpp-cmp"><div class="gpp-wrap"><div class="gpp-cmpbox"><div class="gpp-cmpg"><div><span class="gpp-eye">자체 비교 영상 기준 · 시스템 비계 입면도</span><h2>수작업은 5분 48초가 지나도 미완성,<br><b>CATS는 1분 40초</b>에 발판까지 완성</h2>'
  +'<div class="gpp-row"><b>CATS</b><div class="gpp-track"><i class="gpp-fill y" style="--w:29%"></i></div><em><strong>1분 40초</strong> · 입면 전체 완성</em></div>'
  +'<div class="gpp-row"><b>수작업</b><div class="gpp-track more"><i class="gpp-fill g" style="--w:100%"></i></div><em><strong>5분 48초</strong> · 발판은 시작 전</em></div>'
  +'<div class="gpp-cmpf"><span>같은 도면을 동시에 시작한 영상 기록입니다</span><a href="https://youtu.be/xKOEumR3I7k" target="_blank" rel="noopener">▶ 비교 영상 보기 →</a></div></div>'
  +'<div class="gpp-cmpv"><iframe src="https://www.youtube.com/embed/kNiFC3et0LM?autoplay=1&mute=1&loop=1&playlist=kNiFC3et0LM&controls=0&rel=0&playsinline=1" title="손으로 3분 16초 vs CATS 2분, 엑셀까지" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe><a href="https://youtube.com/shorts/kNiFC3et0LM" target="_blank" rel="noopener">▶ 평면 → 3D → 수량 → 엑셀까지 2분<span>같은 도면 · 손으로는 평면만 3분 16초</span></a><a href="https://youtube.com/shorts/KmQafKFlWN4" target="_blank" rel="noopener">▶ 층고가 바뀌면? 다시 그리기 15초<span>손으로는 2분 25초</span></a></div></div></div></div></section>');
 var latest=el('<section class="gpp-sec gpp-latest"><div class="gpp-wrap"><h2 class="gpp-h2"><span class="gpp-live">최신 업데이트 영상</span></h2><p class="gpp-h2s">CATS는 매주 새 기능이 추가되고 있어요. 유튜브에 올라온 가장 최근 영상이 자동으로 나옵니다</p><div class="gpp-vbox"><iframe src="https://www.youtube.com/embed/videoseries?list=UULFS4Ph5UJvlcdS5n-dLCJLYQ&rel=0" title="CATS 최신 업데이트 영상" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div><div class="gpp-btns" style="margin-top:24px"><a class="gpp-btn gpp-w" href="'+CH+'/videos" target="_blank" rel="noopener">업데이트 영상 모두 보기 →</a></div></div></section>');
 b[1].parentNode.insertBefore(hero,b[1]);b[1].parentNode.insertBefore(cmp,b[1]);b[1].parentNode.insertBefore(feat,b[1]);b[1].parentNode.insertBefore(price,b[1]);
 if('IntersectionObserver' in window){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cmp.classList.add('on');co.disconnect();}});},{threshold:.4});co.observe(cmp);}else{cmp.classList.add('on');}
 b[3].parentNode.insertBefore(latest,b[3]);b[3].parentNode.insertBefore(vids,b[3]);
 b[4].parentNode.insertBefore(end,b[4].nextSibling);
 return true;}
function common(){
 var m=document.getElementById('skinMainSection')||document.body;
 [].forEach.call(document.querySelectorAll('#skinMainSection a'),function(a){
  if(/체험판\s*신청/.test(a.textContent)&&/developmentform/.test(a.getAttribute('href')||'')){a.setAttribute('href',KAKAO);a.target='_blank';a.rel='noopener';}
  if(/^\s*https:\/\/pf\.kakao\.com/.test(a.textContent)){a.textContent='💬 카톡 상담 바로가기';a.className+=' gpp-kbtn';a.target='_blank';a.rel='noopener';}
 });
 txt(m,[['시스템 써포트','시스템 서포트'],['시스템써포트','시스템 서포트'],['시스템 써포트','시스템 서포트'],['라이센스','라이선스'],['STSYTEM','SYSTEM'],['← 클릭시 자동으로 화면이 넘어 갑니다.','← 그림을 누르면 시뮬레이터가 열립니다.']]);
}
function page(){
 var b=blocks();if(!b.length)return false;
 if(P==='/pages/purchase'){
  setBtn(btnByText(b[0],/매뉴얼/),'매뉴얼·다운로드 보기','/pages/support2',false);
  txt(b[1],[['사용 견적서 및 요청서에 맞춰 작성 하여 보내주십시오','견적서를 작성해 보내 드립니다'],['결제가 완료 후 설치 파일 및 라이선스, 계산서등 납품 받게 됩니다','결제가 끝나면 설치 파일·라이선스·계산서를 보내 드립니다']]);
  form({match:/구매 요청서/,labels:['성함 (회사명)','이메일','연락처','요청 내용'],ph:['예) 홍길동 / ○○건설','답변 받으실 이메일','010-0000-0000','사용할 CAD 종류, 사용 기간(월/년), 인원 수를 적어 주세요'],send:'구매 요청 보내기',desc:'작성해 주시면 확인 후 견적서와 함께 연락드립니다.'});
 }
 if(P==='/pages/structure'){
  var a=btnByText(b[0],/필수/);if(a&&!a.getAttribute('data-gpp')){a.textContent='의뢰 방법 보기 ↓';a.setAttribute('href','#');a.removeAttribute('target');a.setAttribute('data-gpp','1');a.addEventListener('click',function(e){e.preventDefault();var t=blocks()[1];if(t)t.scrollIntoView({behavior:'smooth',block:'start'});});}
  form({match:/구조 의뢰 요청서/,labels:['성함 (회사명)','이메일','연락처','의뢰 내용'],ph:['예) 홍길동 / ○○건설','답변 받으실 이메일','010-0000-0000','현장명, 검토 대상(비계·동바리 등), 희망 일정을 적어 주세요. 도면은 카톡이나 메일로 보내 주세요'],send:'구조검토 의뢰 보내기',desc:'비용은 내용 확인 후 협의해 안내해 드립니다.'});
 }
 if(P==='/pages/temporarysoftware3d'){var ba=b[0].querySelector('a[href*="labor-management"]');if(ba){ba.removeAttribute('href');ba.style.cursor='default';}}
 if(P==='/pages/structureatuntroduction'&&b[2]){[].forEach.call(b[2].querySelectorAll('a[href="#none"]'),function(a){a.setAttribute('href','/pages/structure');});}
 if(P==='/pages/developmentform'&&!document.getElementById('gpp-trial')){var n=el('<div id="gpp-trial" class="gpp-note"><div><div><b>체험판·구매 문의는 카톡이 가장 빨라요</b><span>게시판에 남겨 주셔도 확인 후 답변드립니다</span></div><div class="gpp-btns"><a class="gpp-btn gpp-y" href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">⬇ 체험판 받기 · 20일 무료</a><a class="gpp-btn gpp-w" href="/pages/sale01">가격 보기</a></div></div></div>');b[0].parentNode.insertBefore(n,b[0]);}
 if(P==='/pages/support2'){var fb=findBlock(/자유 게시판/);if(fb)fb.classList.add('gpp-hide');}
 if(P==='/pages/about'){var ob=findBlock(/건설 가설의 모든것/);if(ob)ob.classList.add('gpp-hide');b.forEach(function(x){if(x.offsetHeight>0&&x.offsetHeight<60&&!x.textContent.trim()&&!x.querySelector('img,iframe'))x.classList.add('gpp-hide');});txt(document.getElementById('skinMainSection'),[['Welcome to Gaseol Partner','가설파트너를 소개합니다'],['Welcome to','가설파트너를'],['Gaseol Partner','소개합니다']]);}
 if(P==='/pages/precio'){var pb=findBlock(/건설 가설의 모든것/);if(pb)pb.classList.add('gpp-hide');}
 if(P==='/pages/temporarysoftware3d'){[].forEach.call(document.querySelectorAll('#skinMainSection a[href*="IgCR-NbH"]'),function(a){a.setAttribute('href','https://1drv.ms/f/c/d6d0d71ce4b0694f/IgDyxfI7V8wNSrC4fhiXs6elAZ8Pd5Ngb30xcW6mN8QitbE?e=TAWuae');});}
 if(P==='/pages/sale01'){txt(document.getElementById('skinMainSection'),[['Down Load','다운로드']]);var tb=document.querySelector('#skinMainSection table');var tw=tb&&tb.closest('.table_module_wrap');if(tw&&!document.getElementById('gpp-mprice')){var mc=el('<div id="gpp-mprice" class="gpp-mcard"><h3>가격 한눈에 보기</h3><div class="gpp-p">200,000원<em> / 월</em></div><dl><dt>연간</dt><dd>2,160,000원 (10% 할인) · VAT 별도</dd><dt>지원 CAD (가격 동일)</dt><dd>AutoCAD 2013~ · ZWCAD 2019~ · BricsCAD V16~ · GstarCAD 2021~ · CADian 2020~</dd><dt>판매 방식</dt><dd>월 또는 연 단위 라이선스 (라이선스 코드 발급)</dd><dt>사용 방식</dt><dd>1인 2대 PC 설치 · 동시 접속 불가 · CAD 종류를 바꿔도 사용 가능</dd><dt>환불</dt><dd>월 구매 7일 이내 · 연 구매 15일 이내 100% 환불, 이후 환불 불가</dd></dl><div class="gpp-btns"><a class="gpp-btn gpp-y" href="https://www.autocats.co.kr/seouldream#download" target="_blank" rel="noopener">⬇ 체험판 받기 · 20일 무료</a><a class="gpp-btn gpp-w" href="/pages/purchase">구매 요청</a></div></div>');tw.parentNode.insertBefore(mc,tw);tw.parentNode.insertBefore(el('<p class="gpp-hint">아래 표는 옆으로 밀어서 볼 수 있어요 →</p>'),tw);}}
 if(P==='/pages/hj-str'){txt(document.getElementById('skinMainSection'),[['Carry out','프로그램 실행'],['Manual','사용 방법'],['실행 하기','바로 실행하기']]);}
 if(P==='/pages/about'&&!document.getElementById('gpp-about')&&b[1]){var ab=el('<section id="gpp-about" class="gpp-sec"><div class="gpp-wrap"><h2 class="gpp-h2">가설파트너가 하는 일</h2><p class="gpp-h2s">가설 설계부터 구조검토, 자재 견적까지 한 곳에서 돕습니다</p><div class="gpp-grid4">'
  +'<a class="gpp-f" href="/pages/introduction"><span class="gpp-n">1</span><h3>가설 설계 프로그램 CATS</h3><p>CAD에서 시스템 비계·서포트 자동 배치, 3D 확인, 수량 엑셀</p><span class="gpp-go">프로그램 보기 →</span></a>'
  +'<a class="gpp-f" href="/pages/structureatuntroduction"><span class="gpp-n">2</span><h3>HJ구조 구조검토</h3><p>비계·동바리 구조검토를 구조 사무실에서 직접 진행 · 비용 협의</p><span class="gpp-go">구조검토 보기 →</span></a>'
  +'<a class="gpp-f" href="/pages/precio"><span class="gpp-n">3</span><h3>가설재 견적 비교</h3><p>여러 가설재 업체의 견적을 한 번에 받아 비교</p><span class="gpp-go">견적 비교 보기 →</span></a>'
  +'<a class="gpp-f" href="/pages/calculators"><span class="gpp-n">4</span><h3>무료 도구</h3><p>외부 비계·안전망 계산기 · 가수량·견적서 작성 · 중량·차량 대수 · 가설재 견적 시세 · 작업 전 점검표 · 시스템 설치 작업계획서(비계·동바리) · 강풍·폭우 알림 · 안전교육 3D 시뮬레이터 · 노무 관리 프로그램</p><span class="gpp-go">무료로 쓰기 →</span></a>'
  +'</div><div class="gpp-btns" style="margin-top:30px"><a class="gpp-btn gpp-y" href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡 문의</a><a class="gpp-btn gpp-w" href="/pages/support">연락처·운영 시간</a></div></div></section>');b[1].parentNode.insertBefore(ab,b[1].nextSibling);}
 if(P==='/pages/structureatuntroduction'&&!document.getElementById('gpp-str')&&b[2]){var sb=el('<section id="gpp-str" class="gpp-sec gpp-g"><div class="gpp-wrap"><h2 class="gpp-h2">구조검토 의뢰는 이렇게 진행됩니다</h2><p class="gpp-h2s">외부 업체가 아니라 구조 사무실(HJ구조)에서 직접 진행합니다</p><div class="gpp-grid3">'
  +'<div class="gpp-f"><span class="gpp-n">1</span><h3>내용 보내기</h3><p>현장명, 검토 대상(비계·동바리 등), 도면이나 스케치를 의뢰서·메일·카톡으로 보내 주세요</p></div>'
  +'<div class="gpp-f"><span class="gpp-n">2</span><h3>일정·비용 안내</h3><p>내용을 확인한 뒤 일정과 견적을 답변드립니다 (비용은 협의)</p></div>'
  +'<div class="gpp-f"><span class="gpp-n">3</span><h3>검토 진행</h3><p>개인은 선납 후 진행, 회사는 협의 후 진행합니다</p></div>'
  +'</div><div class="gpp-btns" style="margin-top:30px"><a class="gpp-btn gpp-d" href="/pages/structure">구조검토 의뢰서 쓰기</a><a class="gpp-btn gpp-y" href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡으로 상담</a></div></div></section>');b[2].parentNode.insertBefore(sb,b[2].nextSibling);}
 if(P==='/pages/introduction'){if(!intro())return false;}
 common();
 return true;}
function board(){
 if(P.indexOf('/boards/board_2')!==0)return true;
 txt(document.body,[['DEVELOPMENT REQUEST FORM','프로그램 문의 · 체험판 신청'],['STSYTEM','SYSTEM']]);
 return true;}
var n=0,iv=setInterval(function(){addStyle();var ok=false;try{ok=(P.indexOf('/boards/')===0)?board():page();}catch(e){}if(ok||++n>120)clearInterval(iv);},120);
window.addEventListener('load',function(){setTimeout(function(){try{if(P.indexOf('/boards/')===0)board();else page();}catch(e){}},1500);setTimeout(function(){try{if(P.indexOf('/boards/')!==0)page();}catch(e){}},4000);});
})();