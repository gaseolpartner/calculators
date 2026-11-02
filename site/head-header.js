/* 가설파트너 홈페이지 head 의 <script id="gp-header-js"> 내용 그대로 (11-02 이동). 고치면 github에 올리면 10분 안에 반영. 원본 백업: 08 폴더 gp-head-footer-backup.json */
(function(){
var SRC='/storage/upload_images/nmifMZo9uxaKHd2Wp36g3Sd6Ji1m27rzCWLnsyuk.png';
var YT_CH='https://www.youtube.com/@%EA%B0%80%EC%84%A4%ED%8C%8C%ED%8A%B8%EB%84%88';
var APP='https://gaseolpartner.vercel.app/welcome';
var NEWS={key:'gpbar-cats156',tag:'NEW',text:'CATS 1.5.6 업데이트 · 일람표만 붙여 넣으면 배치부터 3D 검토까지',short:'CATS 1.5.6 업데이트',go:'영상 보기',href:'https://www.youtube.com/watch?v=KA75C-TFlFY'};
var CSS='.front_header_section .header_module{padding-top:12px!important;padding-bottom:12px!important}'
+'.front_header_section .module_container{padding-top:0!important;padding-bottom:0!important;align-items:center}'
+'.front_header_section .logo_area,.front_header_section .logo_area p,.front_header_section .logo_area a{height:auto!important;line-height:normal}'
+'.front_header_section .logo_area a.gp-logo img{display:none!important}'
+'.gp-logo{display:inline-flex!important;align-items:center;gap:12px;text-decoration:none!important}'
+'.gp-logo .gp-li{width:118px;height:49px;background:url('+SRC+') no-repeat 0 0/118px auto;flex:none}'
+'.gp-logo .gp-lt{display:flex;flex-direction:column;line-height:1}'
+'.gp-logo .gp-lt b{font-size:25px;font-weight:800;color:#2b2b2b;letter-spacing:-.5px}'
+'.gp-logo .gp-lt small{font-size:10.5px;font-weight:700;color:#8a8a8a;letter-spacing:3.2px;margin-top:6px}'
+'.front_header_section ul.gnb>li>a{font-size:17px!important;font-weight:700!important;position:relative;padding-bottom:6px}'
+'.front_header_section ul.gnb>li>a:after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:#F2B705;transform:scaleX(0);transition:transform .2s}'
+'.front_header_section ul.gnb>li>a:hover:after{transform:scaleX(1)}'
+'#gp-bar{position:relative;z-index:50;background:#1b1b1b;color:#fff;font-size:14.5px;line-height:1.4;word-break:keep-all}'
+'#gp-bar a.gpb{display:flex;align-items:center;justify-content:center;gap:10px;padding:10px 48px;color:#fff!important;text-decoration:none!important}'
+'#gp-bar i{font-style:normal;background:#F2B705;color:#1b1b1b;font-weight:800;font-size:12px;border-radius:999px;padding:2px 8px}'
+'#gp-bar u{text-decoration:none;color:#F2B705;font-weight:800;white-space:nowrap}'
+'#gp-bar .gps{display:none}'
+'#gp-bar button{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:0;color:#aaa;font-size:20px;line-height:1;cursor:pointer;padding:6px 8px}'
+'a.gp-nolink{cursor:default!important}'
+'@media (max-width:640px){.gp-logo{gap:8px}.gp-logo .gp-li{width:84px;height:35px;background-size:84px auto}.gp-logo .gp-lt b{font-size:19px}.gp-logo .gp-lt small{font-size:8.5px;letter-spacing:2.2px;margin-top:4px}#gp-bar{font-size:13.5px}#gp-bar a.gpb{padding:9px 40px 9px 14px;justify-content:flex-start}#gp-bar .gpl{display:none}#gp-bar .gps{display:inline}}';
function bar(){
 if(document.getElementById('gp-bar'))return;
 try{if(localStorage.getItem(NEWS.key))return;}catch(e){}
 var w=document.getElementById('skinLayoutWrap');if(!w)return;
 var d=document.createElement('div');d.id='gp-bar';
 d.innerHTML='<a class="gpb" href="'+NEWS.href+'" target="_blank" rel="noopener"><i>'+NEWS.tag+'</i><span class="gpl">'+NEWS.text+'</span><span class="gps">'+NEWS.short+'</span><u>'+NEWS.go+' →</u></a><button type="button" aria-label="닫기">×</button>';
 d.querySelector('button').addEventListener('click',function(){d.remove();try{localStorage.setItem(NEWS.key,'1');}catch(e){}});
 w.insertBefore(d,w.firstChild);
}
function links(){
 [].forEach.call(document.querySelectorAll('a[href]'),function(a){
  var h=a.getAttribute('href');
  if(/youtube\.com\/@user-mu1dp3pz7m/.test(h)){a.setAttribute('href',YT_CH);}
  if(/gaseolpartner\.tistory\.com/.test(h)){var li=a.closest('li');(li||a).style.display='none';}
  if(/^https?:\/\/gaseolpartner\.vercel\.app\/?(login)?\/?$/.test(h)){a.setAttribute('href',APP);a.target='_blank';a.rel='noopener';}
  if(/^https?:\/\/www\.gaseolpartner\.com\//.test(h)){a.setAttribute('href',h.replace(/^https?:\/\/www\.gaseolpartner\.com/,''));}
 });
 [].forEach.call(document.querySelectorAll('#skinMainSection a'),function(a){
  var h=a.getAttribute('href');
  if((h===''||h==='#none')&&!a.textContent.trim()&&a.querySelector('img')){a.removeAttribute('href');a.classList.add('gp-nolink');}
 });
}
function run(){
 if(!document.getElementById('gp-hdr-style')){var s=document.createElement('style');s.id='gp-hdr-style';s.appendChild(document.createTextNode(CSS));document.head.appendChild(s);}
 var as=document.querySelectorAll('.front_header_section .logo_area a');
 for(var i=0;i<as.length;i++){var a=as[i];if(a.querySelector('.gp-li'))continue;a.classList.add('gp-logo');a.setAttribute('aria-label','가설파트너 홈');a.insertAdjacentHTML('beforeend','<span class="gp-li"></span><span class="gp-lt"><b>가설파트너</b><small>GASEOL PARTNER</small></span>');}
 bar();links();
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
window.addEventListener('load',function(){run();setTimeout(run,1000);setTimeout(run,2500);setTimeout(links,5000);});
})();