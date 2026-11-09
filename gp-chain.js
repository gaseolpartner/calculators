/* 가설파트너 무료 도구 이어 쓰기 (2026-11-09, 덧붙이기만 — 기존 계산 코드는 그대로)
 * 1) 시스템 비계 물량산출: 외부 비계 면적 계산기에서 ?from=area&area=1944 로 오면 면적을 넣고 바로 계산
 * 2) 시스템 비계·시스템 동바리·단관비계 물량산출 결과 아래에 [상차 계획 만들기] 상자
 *    → 산출 수량을 중량·차량 대수(truck-load-calculator.html) 품목에 그대로 넣어서 연다
 *    → 자재중량표에 없는 품목은 따로 알려 줌(무게를 지어내지 않음)
 * 사용: <script src="gp-chain.js"></script>  (페이지 이름으로 알아서 동작)
 */
(function () {
  'use strict';
  var PAGE = (location.pathname.split('/').pop() || '').toLowerCase();
  var TRUCK = 'truck-load-calculator.html';
  function pad4(n) { n = String(parseInt(n, 10)); while (n.length < 4) n = '0' + n; return n; }
  function intOf(s) { var n = parseInt(String(s == null ? '' : s).replace(/[^0-9.-]/g, ''), 10); return isFinite(n) && n > 0 ? n : 0; }

  // ---------- 1) 면적 받기 (시스템 비계) ----------
  function takeArea() {
    if (PAGE !== 'system-scaffold-calculator.html') return;
    try {
      var q = new URLSearchParams(location.search), a = parseFloat(q.get('area'));
      if (q.get('from') !== 'area' || !(a > 0 && a < 10000000)) return;
      var el = document.getElementById('area'); if (!el) return;
      el.value = a;
      if (typeof window.calculateQuantity === 'function') window.calculateQuantity();
      history.replaceState(null, '', location.pathname);   // 새로고침해도 다시 계산하지 않게
      var note = document.createElement('div');
      note.className = 'gpc-note';
      note.innerHTML = '외부 비계 면적 계산기에서 <b>' + a.toLocaleString('ko-KR') + '㎡</b>를 가져와 계산했어요. 건물 용도·발판 조건은 맞게 바꿔 다시 계산하세요.';
      el.parentNode.appendChild(note);
    } catch (e) {}
  }

  // ---------- 2) 산출 수량 → 상차 계산기 품목 이름 ----------
  // 반환: [[분류, 상차 계산기 품명, 수량], ...], miss: [[이름, 수량], ...]
  function fromScaffold() {
    var M = (typeof calculatedMaterials !== 'undefined') ? calculatedMaterials : null, out = [], miss = []; // eslint-disable-line no-undef
    if (!M) return null;
    Object.keys(M).forEach(function (k) {
      var m = M[k], q = intOf(m.finalQty), n = m.name, s = String(m.spec || ''), t = null;
      if (!q) return;
      if (n === '수직재' && /^SP-\d+/.test(s)) t = s === 'SP-3800' ? 'SP-3800(삼진)' : 'SP-' + pad4(s.slice(3));
      else if (n === '수평재' && /^SH-\d+/.test(s)) t = 'SH-' + pad4(s.slice(3));
      else if (n === '하부자키') t = '쟈키베이스(고,경)';
      else if (n === '안전발판' && /^\d+\*\d+$/.test(s)) { var p = s.split('*'); t = '안전발판(' + p[0] + '*' + pad4(p[1]) + ')'; }
      else if (n === '계단발판' && /^\d+\*\d+$/.test(s)) t = '계단발판(' + s + ')';
      else if (n === '비계버팀대' && /^HK-\d+/.test(s)) t = '버팀대(' + s.slice(3) + ')';
      if (t) out.push(['ext', t, q]); else miss.push([n + ' ' + s, q]);
    });
    return { items: out, miss: miss };
  }
  function fromSupport() {
    var M = (typeof calculatedMaterials !== 'undefined') ? calculatedMaterials : null, out = [], miss = []; // eslint-disable-line no-undef
    if (!M) return null;
    var FIX = { H: '유헤드', J: '쟈키베이스(고,경)', S: '소켓', T: '트러스' };
    var NM = (typeof materialNames !== 'undefined') ? materialNames : {}; // eslint-disable-line no-undef
    Object.keys(M).forEach(function (k) {
      var q = intOf(M[k] && M[k].quantity), t = null;
      if (!q) return;
      if (/^[PH]\d\d$/.test(k)) t = k.charAt(0) + '-' + k.slice(1);
      else if (FIX[k]) t = FIX[k];
      else if (/^M[\d.]+$/.test(k)) t = '멍애재(' + k.slice(1) + 'm)';
      if (t) out.push(['sys', t, q]); else miss.push([NM[k] || k, q]);
    });
    return { items: out, miss: miss };
  }
  function fromPipe() {
    var P = [['pipe-6m', '단관파이프(6m)'], ['pipe-4m', '단관파이프(4m)'], ['pipe-2m', '단관파이프(2m)'], ['clamp-right', '클램프(고정)'], ['clamp-swivel', '클램프(자동)'], ['connection-pin', '단관핀']], out = [];
    P.forEach(function (p) { var e = document.getElementById(p[0]), q = e ? intOf(e.textContent) : 0; if (q) out.push(['etc', p[1], q]); });
    return { items: out, miss: [] };
  }
  var SRC = {
    'system-scaffold-calculator.html': { title: '시스템 비계 물량산출', sec: '#resultSection', get: fromScaffold },
    'system-support-calculator.html': { title: '시스템 동바리 물량산출', sec: '#resultSection', get: fromSupport },
    'pipe-scaffold-calculator.html': { title: '단관비계 물량산출', sec: '#result-section', get: fromPipe }
  };

  function truckBox() {
    var cfg = SRC[PAGE]; if (!cfg) return;
    var sec = document.querySelector(cfg.sec);
    if (!sec || sec.querySelector('.gpc-box')) return;
    var box = document.createElement('div');
    box.className = 'gpc-box';
    box.innerHTML = '<div><b>🚚 이 수량으로 상차 계획 만들기</b><span>자재 수량이 상차 계산기에 그대로 들어가요. 몇 톤 차 몇 대인지, 차수별로 무엇을 싣는지까지 바로 나와요.</span></div>' +
      '<a href="' + TRUCK + '">상차 계획 만들기 →</a>';
    box.querySelector('a').addEventListener('click', function (e) {
      var r = null; try { r = cfg.get(); } catch (err) {}
      if (!r || !r.items.length) { e.preventDefault(); alert('먼저 계산 버튼을 눌러 수량을 산출해 주세요.'); return; }
      try { if (typeof window.gtag === 'function') window.gtag('event', 'chain_truck', { page_title: cfg.title, items: r.items.length }); } catch (err) {}
      this.href = TRUCK + '?from=calc&src=' + encodeURIComponent(cfg.title) + '&q=' + encodeURIComponent(JSON.stringify(r.items)) + (r.miss.length ? '&miss=' + encodeURIComponent(JSON.stringify(r.miss)) : '');
    });
    var q = sec.querySelector('.gpq-box');
    if (q && q.parentNode === sec) sec.insertBefore(box, q.nextSibling); else sec.appendChild(box);
  }

  function style() {
    if (document.getElementById('gpc-style')) return;
    var st = document.createElement('style'); st.id = 'gpc-style';
    st.textContent = '.gpc-box{margin:12px 0 6px;background:#fff;color:#1B1B1B;border:2px solid #1B1B1B;border-radius:14px;padding:18px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:Pretendard,"Malgun Gothic",sans-serif}' +
      '.gpc-box b{display:block;font-size:17px;font-weight:800}.gpc-box span{display:block;color:#555;font-size:14px;margin-top:4px;line-height:1.5}' +
      '.gpc-box a{display:inline-block;background:#1B1B1B;color:#F2B705!important;font-weight:800;padding:12px 20px;border-radius:10px;text-decoration:none;white-space:nowrap}.gpc-box a:hover{background:#000}' +
      '.gpc-note{margin-top:8px;background:#FFF6D6;border-radius:8px;padding:9px 12px;font-size:13.5px;line-height:1.5;color:#1B1B1B}' +
      '@media print{.gpc-box,.gpc-note{display:none!important}}';
    document.head.appendChild(st);
  }

  // 시스템 비계 페이지는 window.onload 에서 면적을 1000으로 되돌리므로, 면적 받기는 load 다음에
  function areaLater() { if (document.readyState === 'complete') setTimeout(takeArea, 0); else window.addEventListener('load', function () { setTimeout(takeArea, 0); }); }
  function run() { style(); truckBox(); areaLater(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.GPChain = { _scaffold: fromScaffold, _support: fromSupport, _pipe: fromPipe };
})();
