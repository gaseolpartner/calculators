/* 가설파트너 무료 도구 사용량 기록 (덧붙이기만, 기존 코드는 그대로)
 * 사용: <script src="gp-track.js" data-tool="safety-net" defer></script>
 *  - 화면이 열리면 '열람' 1번 (같은 탭에서 새로고침해도 1번)
 *  - 견적 요청 링크(비교견적 new-request) 클릭 → quote / 카카오톡 링크 → kakao / 인쇄·PDF → pdf / '바로 접수' → submit
 *  - 이름·연락처·IP는 보내지 않음. 브라우저마다 임의 번호(sid)만
 *  - 기록 서버: gaseolpartner.vercel.app/api/track (도구 이름은 비교견적 src/lib/toolNames.js 와 같아야 함)
 */
(function () {
  'use strict';
  var me = document.currentScript;
  var tool = me && me.getAttribute('data-tool');
  if (!tool) return;
  var API = 'https://gaseolpartner.vercel.app/api/track';
  function sid() {
    try {
      var s = localStorage.getItem('gp_sid');
      if (!s) { s = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); localStorage.setItem('gp_sid', s); }
      return s;
    } catch (e) { return ''; }
  }
  function send(ev) {
    try {
      var body = JSON.stringify({ tool: tool, event: ev, page: location.pathname, sid: sid() });
      if (navigator.sendBeacon && navigator.sendBeacon(API, body)) return;
      fetch(API, { method: 'POST', body: body, keepalive: true, mode: 'no-cors' }).catch(function () {});
    } catch (e) {}
  }
  var once = {};
  function sendOnce(ev, ms) { var n = Date.now(); if (once[ev] && n - once[ev] < (ms || 3000)) return; once[ev] = n; send(ev); }

  try {
    var k = 'gp_tv_' + tool;
    if (!sessionStorage.getItem(k)) { sessionStorage.setItem(k, '1'); send('view'); }
  } catch (e) { send('view'); }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a,button') : null;
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var txt = (el.textContent || '').replace(/\s+/g, ' ');
    if (/gaseolpartner\.vercel\.app\/new-request/.test(href) || /견적 요청하기|견적 받아/.test(txt) && el.tagName === 'A') sendOnce('quote');
    else if (/pf\.kakao\.com/.test(href)) sendOnce('kakao');
    else if (/바로 접수/.test(txt)) sendOnce('submit', 10000);
  }, true);
  window.addEventListener('beforeprint', function () { sendOnce('pdf', 5000); });
})();
