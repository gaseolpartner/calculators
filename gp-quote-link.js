/* 가설파트너 물량산출 → 견적 요청 연결 (덧붙이기만, 기존 계산 코드는 그대로)
 * 결과 영역 맨 아래에 "이 물량으로 견적 받기" 상자를 넣는다.
 * 누르면 지금 화면에 보이는 결과(자재·수량)를 요약해서 견적 비교 앱의 간편 요청서에 채워 연다.
 * 사용: <script src="gp-quote-link.js"></script><script>GPQuote.init({item:'비계', title:'시스템 비계 물량산출', section:'#resultSection'})</script>
 */
(function () {
  'use strict';
  var APP = 'https://gaseolpartner.vercel.app/new-request';
  function txt(e) { return e ? (e.innerText || e.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function vis(e) { return !!(e && e.offsetParent !== null); }

  function summary(cfg, sec) {
    var lines = [];
    // 1) 카드형 결과 (라벨 + 값 + 단위)
    sec.querySelectorAll('.result-item').forEach(function (it) {
      if (!vis(it)) return;
      var l = txt(it.querySelector('.result-label')), v = txt(it.querySelector('.result-value')), u = txt(it.querySelector('.result-unit'));
      if (l && v && v !== '0' && v !== '-') lines.push('- ' + l + ': ' + v + (u ? ' ' + u : ''));
    });
    // 2) 표형 결과 (자재명 | 단위 | 수량)
    if (!lines.length) {
      sec.querySelectorAll('table tbody tr').forEach(function (tr) {
        if (!vis(tr)) return;
        var td = tr.querySelectorAll('td'); if (td.length < 2) return;
        var name = txt(td[0]), qty = txt(td[td.length - 1]), unit = td.length >= 3 ? txt(td[1]) : '';
        if (name && qty && qty !== '0' && qty !== '-') lines.push('- ' + name + ': ' + qty + (unit ? ' ' + unit : ''));
      });
    }
    var info = txt(sec.querySelector('#resultInfo'));
    var head = '[' + cfg.title + ' 결과]' + (info ? '\n' + info : '');
    var area = document.querySelector('#area');
    if (area && area.value) head += '\n설치 면적: ' + area.value + '㎡';
    var body = lines.slice(0, 25).join('\n');
    return (head + (body ? '\n' + body : '') + '\n(가설파트너 물량산출 계산기 참고 수량)').slice(0, 1400);
  }

  function addBox(cfg) {
    var sec = document.querySelector(cfg.section);
    if (!sec || sec.querySelector('.gpq-box')) return;
    var st = document.createElement('style');
    st.textContent = '.gpq-box{margin:22px 0 6px;background:#1B1B1B;color:#fff;border-radius:14px;padding:20px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:Pretendard,"Malgun Gothic",sans-serif;border-left:6px solid #F2B705}' +
      '.gpq-box b{display:block;font-size:18px;font-weight:800}.gpq-box span{display:block;color:#cfcfcf;font-size:14px;margin-top:4px;line-height:1.5}' +
      '.gpq-box a{display:inline-block;background:#F2B705;color:#1B1B1B;font-weight:800;padding:12px 20px;border-radius:10px;text-decoration:none;white-space:nowrap}.gpq-box a:hover{background:#D9A300}' +
      '@media print{.gpq-box{display:none!important}}';
    document.head.appendChild(st);
    var box = document.createElement('div');
    box.className = 'gpq-box';
    box.innerHTML = '<div><b>이 물량으로 견적 받아 보기</b><span>계산 결과가 견적 요청서에 자동으로 들어가요. 여러 업체 견적을 무료로 비교하세요.</span></div>' +
      '<a href="' + APP + '" target="_blank" rel="noopener">견적 요청하기 →</a>';
    box.querySelector('a').addEventListener('click', function (e) {
      // 클릭 수 기록 (구글 애널리틱스가 있는 페이지에서만)
      try { if (typeof window.gtag === 'function') window.gtag('event', '견적요청클릭', { event_category: '견적연결', item: cfg.item, page_title: cfg.title }); } catch (err) {}
      try {
        var url = APP + '?from=calculators&item=' + encodeURIComponent(cfg.item) + '&memo=' + encodeURIComponent(summary(cfg, sec));
        this.href = url;
      } catch (err) { /* 실패하면 빈 요청서로 */ }
    });
    sec.appendChild(box);
  }

  window.GPQuote = {
    init: function (cfg) {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { addBox(cfg); });
      else addBox(cfg);
    },
    _summary: function (cfg) { var s = document.querySelector(cfg.section); return s ? summary(cfg, s) : ''; }
  };
})();
