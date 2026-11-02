/* 가설파트너 홈페이지 head 의 <script id="gp-main-js"> 내용 그대로 (11-02 이동). 고치면 github에 올리면 10분 안에 반영. 원본 백업: 08 폴더 gp-head-footer-backup.json */
(function(){
if(location.pathname!=='/'&&location.pathname!=='')return;
var KAKAO='https://pf.kakao.com/_xovuVG/chat';
var CSS=''
+'.gp-wrap{max-width:1180px;margin:0 auto;padding:0 24px;box-sizing:border-box}'
+'.gp-hero{position:relative;overflow:hidden;background:linear-gradient(180deg,#fff 0%,#f5f5f2 100%);padding:76px 0 64px;text-align:center}'
+'.gp-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#e6e6e2 1px,transparent 1px),linear-gradient(90deg,#e6e6e2 1px,transparent 1px);background-size:34px 34px;opacity:.6;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 30%,#000 0%,transparent 70%)}'
+'.gp-hero .gp-wrap{position:relative}.gp-hero,.gp-c,.gp-end{word-break:keep-all}.gp-m{display:none}'
+'.gp-eye{display:inline-block;font-size:15px;font-weight:700;color:#8a6a00;background:#fff4cc;border:1px solid #f2d36b;padding:6px 14px;border-radius:999px}'
+'.gp-h1{font-size:52px;line-height:1.25;font-weight:800;color:#1b1b1b;letter-spacing:-1.8px;margin:22px 0 18px}'
+'.gp-mark{position:relative;white-space:nowrap;z-index:0}'
+'.gp-mark:after{content:"";position:absolute;left:-6px;right:-6px;bottom:6px;height:20px;background:#F2B705;opacity:.55;z-index:-1;transform:scaleX(0);transform-origin:left;animation:gpMark .9s .6s cubic-bezier(.2,.8,.2,1) forwards}'
+'@keyframes gpMark{to{transform:scaleX(1)}}'
+'.gp-sub{font-size:19px;line-height:1.65;color:#555;margin:0 auto 30px;max-width:640px}'
+'.gp-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}'
+'.gp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:15px 26px;border-radius:10px;font-size:17px;font-weight:800;text-decoration:none!important;transition:transform .15s,box-shadow .15s;box-sizing:border-box}'
+'.gp-btn:hover{transform:translateY(-2px)}'
+'.gp-btn-y{background:#F2B705;color:#1b1b1b!important;box-shadow:0 8px 20px rgba(242,183,5,.35)}'
+'.gp-btn-d{background:#1b1b1b;color:#fff!important}'
+'.gp-btn-w{background:#fff;color:#222!important;border:1.5px solid #cfcfcf}'
+'.gp-svc{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:56px;text-align:left}'
+'.gp-c{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #e8e8e8;border-radius:18px;padding:28px 24px 24px;text-decoration:none!important;color:inherit;transition:transform .2s,box-shadow .2s,border-color .2s}'
+'.gp-c:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(0,0,0,.09);border-color:#F2B705}'
+'.gp-c .gp-ic{width:52px;height:52px;border-radius:14px;background:#1b1b1b;display:flex;align-items:center;justify-content:center}'
+'.gp-c .gp-ic svg{width:28px;height:28px;stroke:#F2B705;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
+'.gp-tag{position:absolute;top:26px;right:22px;font-size:13px;font-weight:700;padding:4px 10px;border-radius:999px;background:#f1f1ee;color:#666}'
+'.gp-tag.free{background:#e7f6ec;color:#1b8a4a}'
+'.gp-c h3{font-size:21px;font-weight:800;color:#1b1b1b;margin:20px 0 8px;letter-spacing:-.5px;line-height:1.35}'
+'.gp-c p{font-size:15.5px;line-height:1.6;color:#666;margin:0 0 14px}'
+'.gp-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 16px}'
+'.gp-chips span{font-size:13px;font-weight:600;color:#555;background:#f5f5f2;border-radius:6px;padding:4px 8px}'
+'.gp-go{margin-top:auto;font-size:16px;font-weight:800;color:#1b1b1b;display:flex;align-items:center;gap:6px}'
+'.gp-go i{font-style:normal;transition:transform .2s}.gp-c:hover .gp-go i{transform:translateX(4px)}'
+'.gp-end{text-align:center;background:#F2B705;padding:60px 0}'
+'.gp-end h2{font-size:32px;font-weight:800;color:#1b1b1b;margin:0 0 10px;letter-spacing:-1px}.gp-end p{font-size:17px;color:#3a3a3a;margin:0 0 26px}'
+'.gp-end .gp-btn-w{border-color:#1b1b1b;background:transparent}'
+'.gp-card-desc{display:block;font-size:14px!important;font-weight:500!important;color:#777!important;margin-top:6px;line-height:1.45}'
+'.gp-up{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}.gp-up.gp-in{opacity:1;transform:none}'
+'.gp-svc .gp-up:nth-child(2){transition-delay:.08s}.gp-svc .gp-up:nth-child(3){transition-delay:.16s}.gp-svc .gp-up:nth-child(4){transition-delay:.24s}'
+'#skinMainSection>.skin_block.gp-hide,#skinMainSection>div.skin_block:nth-of-type(1),#skinMainSection>div.skin_block:nth-of-type(3){display:none!important}'
+'.gp-hero .gp-up{opacity:1;transform:none;animation:gpIn .7s ease both}.gp-svc .gp-c.gp-up{animation-delay:.15s}@keyframes gpIn{from{opacity:0;transform:translateY(20px)}}'
+'#skinMainSection>div.skin_block:nth-of-type(2) .module_wrap{max-width:1228px!important;width:100%!important}'
+'#skinMainSection>div.skin_block:nth-of-type(2) ul.profile_introduce_content{max-width:none!important}'
+'#skinMainSection>div.skin_block:nth-of-type(2) ul.profile_info_content{max-width:1180px!important;width:100%!important;gap:16px!important;align-items:stretch!important}'
+'#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link{display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:16px;text-align:left!important;min-height:0!important;padding:22px!important;border-radius:16px!important;word-break:keep-all}'
+'#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link .image{display:none!important}'
+'#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link .subject{flex:1;margin:0!important;font-size:18px!important;font-weight:800!important;color:#1b1b1b!important;text-align:left!important;line-height:1.35}'
+'#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link:after{content:"→";margin-left:auto;font-weight:800;color:#bbb;transition:transform .2s,color .2s}'
+'#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link:hover:after{color:#1b1b1b;transform:translateX(4px)}'
+'.gp-qi{flex:none!important;width:48px!important;height:48px!important;border-radius:13px;background:#1b1b1b;display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important;margin:0!important}'
+'.gp-qi svg{display:block;width:26px!important;height:26px!important;stroke:#F2B705;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
+'.gp-yt-cap{display:block;text-align:center;font-size:15px;font-weight:600;color:#444;margin-top:10px;word-break:keep-all}'
+'.gp-h2{text-align:center;font-size:34px;font-weight:800;color:#1b1b1b;letter-spacing:-1px;margin:16px 0 10px}.gp-h2s{text-align:center;font-size:17px;color:#777;margin:0 0 36px;word-break:keep-all}'
+'.gp-sim2{background:#1b1b1b;padding:72px 0}.gp-sim2 .gp-wrap{display:block;text-align:left}.gp-sim2 .gp-h2{color:#fff!important}.gp-sim2 .gp-h2s{color:#bbb!important}.gp-sim2 .gp-btns{justify-content:flex-start;margin-top:22px}.gp-s2v{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:14px;margin-top:32px}.gp-s2v .gp-shn{color:#fff;font-size:13px}@media (max-width:900px){.gp-s2v{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}.gp-s2v .gp-shc{flex:0 0 42%;scroll-snap-align:start}}'
+'.gp-sh{background:#fff;padding:80px 0;text-align:center}'
+'.gp-shl{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;text-align:left}'
+'.gp-shc{display:block;text-decoration:none!important;color:inherit}'
+'.gp-sht{position:relative;display:block;aspect-ratio:9/16;border-radius:16px;overflow:hidden;background:#222;box-shadow:0 10px 24px rgba(0,0,0,.12)}'
+'.gp-sht img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s}.gp-shc:hover .gp-sht img{transform:scale(1.04)}'
+'.gp-sht i{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;font-style:normal;font-size:20px;display:flex;align-items:center;justify-content:center}'
+'.gp-shc b{display:inline-block;margin-top:12px;font-size:13px;font-weight:800;color:#8a6a00;background:#fff4cc;border-radius:6px;padding:2px 8px}'
+'.gp-shn{display:block;margin-top:6px;font-size:16px;font-weight:700;color:#1b1b1b;line-height:1.4;word-break:keep-all}'
+'@media (max-width:1000px){.gp-svc{grid-template-columns:1fr 1fr}}'
+'@media (max-width:640px){.gp-sh{padding:52px 0}.gp-sim2{padding:52px 0}.gp-sim2 .gp-wrap{grid-template-columns:1fr;gap:26px}.gp-h2{font-size:25px}.gp-shl{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:0 24px;gap:12px;margin:0 -24px;padding:0 24px 6px}.gp-shc{flex:0 0 44%;scroll-snap-align:start}.gp-shn{font-size:14.5px}#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link{padding:16px 18px!important}#skinMainSection>div.skin_block:nth-of-type(2) li.profile_link .subject{font-size:16.5px!important}}'
+'@media (max-width:640px){.gp-m{display:inline}.gp-sub br{display:none}.gp-hero{padding:44px 0 44px}.gp-h1{font-size:31px;letter-spacing:-1px}.gp-mark:after{height:13px;bottom:4px}.gp-sub{font-size:16px}.gp-btn{flex:1;padding:14px 12px;font-size:16px}.gp-svc{grid-template-columns:1fr;gap:12px;margin-top:36px}.gp-c{padding:22px 20px 20px}.gp-c h3{font-size:19px;margin-top:14px}.gp-tag{top:22px}.gp-end{padding:46px 0}.gp-end h2{font-size:24px}}'
+'@media (prefers-reduced-motion:reduce){.gp-up{opacity:1;transform:none;transition:none}.gp-mark:after{animation:none;transform:none}}';
var IC={
cad:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 12V8M11 12V8M15 12V8M6 8h12"/></svg>',
str:'<svg viewBox="0 0 24 24"><path d="M3 6h18M3 18h18M6 6v12M18 6v12M6 6l12 12M18 6L6 18"/></svg>',
quo:'<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
sup:'<svg viewBox="0 0 24 24"><path d="M4 11h16v9H4zM2 7h20v4H2zM12 7v13M12 7c-2-4-6-4-6-1.5S10 7 12 7zM12 7c2-4 6-4 6-1.5S14 7 12 7z"/></svg>'};
function card(href,ic,tag,free,title,desc,chips,go){
 return '<a class="gp-c gp-up" href="'+href+'"><span class="gp-ic">'+IC[ic]+'</span><span class="gp-tag'+(free?' free':'')+'">'+tag+'</span><h3>'+title+'</h3><p>'+desc+'</p>'
 +(chips?'<div class="gp-chips">'+chips.map(function(c){return '<span>'+c+'</span>';}).join('')+'</div>':'')
 +'<span class="gp-go">'+go+' <i>→</i></span></a>';}
var CH='https://www.youtube.com/@%EA%B0%80%EC%84%A4%ED%8C%8C%ED%8A%B8%EB%84%88';
var SHORTS=[['HKBu94u6MBk','#64','널빤지 끝을 밟았을 뿐인데 솟구쳤다?'],['3SnY_29XoE4','#63','옥상 위 아찔한 계단, 몇 개나 설치해야 할까?'],['1xxtvCpzXZY','#62','통로가 너무 넓어지면 벌어지는 아찔한 일?'],['spOnQBDIp34','#61','발판에 적어 붙이는 숫자의 비밀']];
var SIMS=[['Ra-hVrZeflw','#01','태풍이 오면 비계는 몇 m/s에서 넘어갈까?'],['M4kqpxK1Ts4','#02','동바리 하나 빠지면 어떻게 될까?'],['n6T27Nxbudk','#03','깔목 하나 안 깔면 비계가 넘어진다?'],['YXc45cpLtHU','#04','벽이음부터 떼면 비계가 어떻게 될까?'],['QfZeAQIvPAY','#05','이동식 비계, 19kg 힘에 넘어진다?'],['aZPiIAzsTwM','#06','콘크리트를 한 곳에 몰아 부으면?'],['tWwOpNq-pKs','#07','빨리 부으면 거푸집이 터진다?'],['z84b4Q-qzOw','#08','와이어를 벌리면 왜 끊어질까?']];
var NXT=[['sDR1dm130ds','#65','비계 밑동은 바닥에 묶여있지 않다?','2026-11-01'],['cpMkqqEbS84','#66','튼튼해 보이는 파이프가 한순간에 꺾이는 이유?','2026-11-02'],['Mu22V982_To','#67','비계 사이에 난 좁은 틈새, 무시하면 안 되는 이유?','2026-11-03'],['c2jaabxIhF0','#68','비계 기둥을 빼고 출입구를 만들 때 벌어지는 아찔한 일?','2026-11-04'],['FR7uA2QiSiY','#69','거꾸로 꽂힌 쇠기둥 하나가 불러올 대형 참사?','2026-11-05'],['TCq0xubi5jk','#70','콘크리트를 붓기도 전에 기름부터 바르는 이유?','2026-11-06'],['3mDfr7AS8AE','#71','거대한 거푸집을 모서리에 걸어 들어 올리면 벌어지는 일?','2026-11-07'],['_V96p7HxMbU','#72','도면과 100% 똑같은 건물은 없다?','2026-11-08'],['K8_OrELid3M','#73','거푸집을 다 뜯어냈는데 바닥이 무너진다?','2026-11-09'],['7OuLrdWgWLg','#74','기둥 하나 없이 허공을 가로지르는 보 형식 동바리, 무너지지 않는 비결은?','2026-11-10'],['CVwoGVbIAnU','#75','위쪽에만 사선을 걸면 벌어지는 아찔한 일?','2026-11-11'],['h5bg5a8Vdrg','#76','절대 빼면 안 된다던 가새, 유일하게 생략할 수 있는 조건은?','2026-11-12'],['C7qNEn7pq-E','#77','거푸집을 떼어낸 벽 구멍에서 물이 콸콸 쏟아지는 이유?','2026-11-13'],['Jy57H1cIxuU','#78','비계 발판 아래 삐죽 튀어나온 파이프, 깔끔하게 잘라내면 안 되는 이유!','2026-11-14'],['56k8Z-cbu5U','#79','비계 가새가 어떤 칸엔 있고 옆 칸엔 없는 이유?','2026-11-15']];
function gpShUp(){var L=document.querySelector('.gp-shl');if(!L)return;var td=new Date(Date.now()+324e5).toISOString().slice(0,10);var c=NXT.filter(function(s){return s[3]<=td}).reverse().slice(0,6),n=c.length,ok=[];if(!n)return;function fin(){if(--n)return;var A=ok.filter(Boolean).concat(SHORTS).slice(0,4);[].forEach.call(L.querySelectorAll('.gp-shc'),function(a,j){var s=A[j];if(!s)return;a.href='https://www.youtube.com/shorts/'+s[0];a.querySelector('img').src='https://i.ytimg.com/vi/'+s[0]+'/oar2.jpg';a.querySelector('b').textContent=s[1];a.querySelector('.gp-shn').textContent=s[2];});}c.forEach(function(s,k){var i=new Image();i.onload=function(){ok[k]=i.naturalWidth>200?s:0;fin();};i.onerror=function(){ok[k]=0;fin();};i.src='https://i.ytimg.com/vi/'+s[0]+'/oar2.jpg';});}
(function w(t){if(document.querySelector('.gp-shl'))gpShUp();else if(t<60)setTimeout(function(){w(t+1)},250);})(0);
if(location.pathname==='/')document.title='가설파트너 | 가설 설계 프로그램 CATS · HJ구조 구조검토 · 가설재 견적 비교';
function shortsHTML(){
 return '<section class="gp-sh"><div class="gp-wrap"><div class="gp-up"><span class="gp-eye">YouTube 쇼츠 · 가설파트너 이야기</span><h2 class="gp-h2">가설재, 궁금했던 이야기</h2><p class="gp-h2s">쉬는 시간에 하나씩, 1분이면 끝나는 비계·동바리 이야기</p></div>'
 +'<div class="gp-shl">'+SHORTS.map(function(s){return '<a class="gp-shc gp-up" href="https://www.youtube.com/shorts/'+s[0]+'" target="_blank" rel="noopener"><span class="gp-sht"><img src="https://i.ytimg.com/vi/'+s[0]+'/oar2.jpg" alt="" loading="lazy"><i>▶</i></span><b>'+s[1]+'</b><span class="gp-shn">'+s[2]+'</span></a>';}).join('')+'</div>'
 +'<div class="gp-btns" style="margin-top:28px"><a class="gp-btn gp-btn-w" href="'+CH+'/shorts" target="_blank" rel="noopener">쇼츠 전체 보기 →</a></div></div></section>'
 +'<section class="gp-sim2"><div class="gp-wrap"><div><span class="gp-eye">NEW · 가설안전이야기 8편</span><h2 class="gp-h2">기준을 넘으면 어떻게 무너질까?</h2><p class="gp-h2s">바람·지반·해체 순서·타설·줄걸이까지, 기준을 넘으면 무너지는 과정을 3D로 직접 확인하는 무료 안전교육 3D 시뮬레이터입니다.</p><div class="gp-btns"><a class="gp-btn gp-btn-y" href="/pages/simulater">시뮬레이터 보기 →</a></div></div>'
 +'<div class="gp-s2v">'+SIMS.map(function(s){return '<a class="gp-shc" href="https://www.youtube.com/shorts/'+s[0]+'" target="_blank" rel="noopener"><span class="gp-sht"><img src="https://i.ytimg.com/vi/'+s[0]+'/oar2.jpg" alt="" loading="lazy"><i>▶</i></span><b>'+s[1]+'</b><span class="gp-shn">'+s[2]+'</span></a>';}).join('')+'</div></div></section>';}
var QI={cad:IC.cad,quo:IC.quo,str:IC.str,
calc:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M8 15h2M12 15h2M8 18h2M12 18h2M16 15v3"/></svg>',
sim:'<svg viewBox="0 0 24 24"><path d="M4 13a8 8 0 0 1 16 0v2H4z"/><path d="M12 5v3M2 15h20"/><path d="M10 18l4 2-4 2z"/></svg>',
lab:'<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><circle cx="10" cy="10" r="2"/><path d="M7.5 15c.7-2 4.3-2 5 0M14 9h3M14 12h3M8 18h9"/></svg>'};
var QL=[['가설 설계 프로그램','cad','CAD 자동 배치 · 3D · 수량 엑셀'],['견적 비교','quo','여러 업체 견적을 한 번에 비교'],['HJ구조','str','비계·동바리 구조계산 (구조검토 참고용)'],['물량','calc','가설재 물량·견적 자동 계산 · 무료'],['안전','sim','설치 교육 · 위험 체험 · 무료'],['노무','lab','현장 노무 관리 · 무료']];
var CAPS={'65qOgpIZTio':'가설재 견적 비교 플랫폼 소개','9re6RpVrG50':'수작업 vs CATS, 시스템 비계 평면·입면 그리기 속도 비교','xKOEumR3I7k':'수작업 vs CATS, 같은 비계 도면 5분 48초 vs 1분 40초'};
var SWAP={'9re6RpVrG50':'xKOEumR3I7k','PyCjDDJdzeo':'시스템 비계·동바리 자동 툴 (입면 유틸·샘플)'};
function deco(){
 var b=document.querySelectorAll('#skinMainSection>div.skin_block')[1];if(!b)return false;
 var lis=b.querySelectorAll('li.profile_link');if(lis.length<5)return false;
 var subj=b.querySelector('li.profile_subject');if(subj){(subj.querySelector('p,span,div')||subj).textContent='바로가기 · 영상';}
 var pd=b.querySelector('li.profile_description');if(pd){pd.style.display='none';}
 if(!b.querySelector('.gp-labor')){var last=lis[lis.length-1];var nw=last.cloneNode(true);nw.classList.add('gp-labor');var s0=nw.querySelector('.subject');if(s0)s0.textContent='노무 관리 프로그램';nw.addEventListener('click',function(){location.href='/pages/labor-management';});last.parentNode.insertBefore(nw,last.nextSibling);}
 [].forEach.call(b.querySelectorAll('li.profile_link'),function(li){if(li.querySelector('.gp-qi'))return;var s=li.querySelector('.subject');if(!s)return;for(var i=0;i<QL.length;i++){if(s.textContent.indexOf(QL[i][0])>-1){var sp=document.createElement('span');sp.className='gp-card-desc';sp.textContent=QL[i][2];s.appendChild(sp);li.insertAdjacentHTML('afterbegin','<span class="gp-qi">'+QI[QL[i][1]]+'</span>');break;}}});
 [].forEach.call(b.querySelectorAll('li.profile_youtube'),function(li){var f=li.querySelector('iframe');if(!f||li.querySelector('.gp-yt-cap'))return;var m=f.src.match(/embed\/([\w-]+)/);if(m&&SWAP[m[1]]){var nid=SWAP[m[1]];f.src=f.src.replace(m[1],nid);m=[0,nid];}var c=m&&CAPS[m[1]];if(c){var e=document.createElement('span');e.className='gp-yt-cap';e.textContent=c;li.appendChild(e);}});
 return true;}
function addStyle(){if(document.getElementById('gp-main-style'))return;var st=document.createElement('style');st.id='gp-main-style';st.appendChild(document.createTextNode(CSS));(document.head||document.documentElement).appendChild(st);}
addStyle();
function el(h){var d=document.createElement('div');d.innerHTML=h;return d.firstChild;}
function run(){
 if(document.getElementById('gp-hero'))return;
 var main=document.getElementById('skinMainSection');if(!main)return;
 var blocks=main.querySelectorAll(':scope>.skin_block');if(blocks.length<3)return;
 var hero=el('<section id="gp-hero" class="gp-hero"><div class="gp-wrap"><div class="gp-up">'
 +'<span class="gp-eye">시스템 비계 · 동바리 · 가설재</span>'
 +'<h1 class="gp-h1">가설 설계부터<br class="gp-m"> 구조검토, 자재 견적까지<br><span class="gp-mark">가설파트너 한 곳에서</span></h1>'
 +'<p class="gp-sub">가설 현장에 필요한 프로그램과 서비스를 모았습니다. <br>필요한 것을 골라 바로 시작하세요.</p>'
 +'<div class="gp-btns"><a class="gp-btn gp-btn-d" href="#gp-svc">서비스 보기 ↓</a><a class="gp-btn gp-btn-y" href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡 문의</a></div>'
 +'</div><div id="gp-svc" class="gp-svc">'
 +card('/pages/introduction','cad','프로그램',0,'가설 설계 프로그램<br>CATS','CAD에서 시스템 비계·서포트를 자동 배치하고 수량까지 뽑아 줍니다.',['3D 확인','수량 엑셀','CAD 5종','체험판'],'프로그램 보기')
 +card('/pages/structureatuntroduction','str','비용 협의',0,'HJ구조<br>구조검토','비계·동바리 구조검토를 구조 사무실에서 직접 맡아 드립니다.',['구조검토 의뢰','진행 조회','간편 구조계산'],'검토 의뢰하기')
 +card('/pages/precio','quo','견적 요청',0,'가설재<br>견적 비교','여러 가설재 업체의 견적을 한 번에 받아 비교할 수 있습니다.',['업체별 견적','한 번에 비교'],'견적 비교하기')
 +card('/pages/calculators','sup','무료',1,'현장 지원<br>무료 도구','현장 업무를 돕는 도구를 무료로 쓸 수 있습니다.',['물량·견적 계산기','안전망 계산기','작업 전 점검표','강풍·폭우 알림','3D 안전교육','노무 관리','CATS Pro'],'무료로 쓰기')
 +'</div></div></section>');
 var end=el('<section class="gp-end"><div class="gp-wrap gp-up"><h2>어떤 서비스가 맞는지 모르겠다면</h2><p>카톡으로 물어보세요. 현장에 맞는 방법을 바로 안내해 드립니다.</p><div class="gp-btns"><a class="gp-btn gp-btn-d" href="'+KAKAO+'" target="_blank" rel="noopener">💬 카톡으로 문의하기</a><a class="gp-btn gp-btn-w" href="/pages/support">게시판에 남기기</a></div></div></section>');
 blocks[0].classList.add('gp-hide');blocks[2].classList.add('gp-hide');
 main.insertBefore(hero,blocks[0]);
 main.appendChild(end);
 var _sh=document.createElement('div');_sh.innerHTML=shortsHTML();var _r=hero.nextSibling;while(_sh.firstChild)main.insertBefore(_sh.firstChild,_r);
 var ups=document.querySelectorAll('.gp-up');
 if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('gp-in');io.unobserve(e.target);}});},{threshold:.12});[].forEach.call(ups,function(x){io.observe(x);});setTimeout(function(){[].forEach.call(ups,function(x){x.classList.add('gp-in');});},1500);}
 else{[].forEach.call(ups,function(x){x.classList.add('gp-in');});}
 var sl=document.querySelector('a[href="#gp-svc"]');if(sl){sl.addEventListener('click',function(e){e.preventDefault();document.getElementById('gp-svc').scrollIntoView({behavior:'smooth',block:'start'});});}
}
var n=0,iv=setInterval(function(){addStyle();run();if(document.getElementById('gp-hero')||++n>150)clearInterval(iv);},80);
var n2=0,iv2=setInterval(function(){var ok=false;try{ok=deco();}catch(e){}if(ok||++n2>200)clearInterval(iv2);},100);
window.addEventListener('load',function(){run();setTimeout(run,1000);setTimeout(run,2500);setTimeout(deco,1500);setTimeout(deco,4000);});
})();