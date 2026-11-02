/* 가설파트너 계산 결과 공유 (덧붙이기만 — 계산 코드는 건드리지 않고, 화면에 보이는 결과만 읽는다)
 * 휴대폰: 공유 창(카카오톡 등) / PC: 결과 글을 복사 → 카톡 대화창에 붙여넣기
 * 사용: <script src="gp-share.js"></script>
 *       <script>GPShare.init({title:'시스템 비계 물량산출', after:'button[onclick="window.print()"]', mode:'calc', quote:{item:'비계',title:'시스템 비계 물량산출',section:'#resultSection'}})</script>
 *  mode 'calc'  : 물량 계산기 — GPQuote 요약(있으면) 사용
 *  mode 'struct': 간편 구조계산 — .result-table 의 [구분 | 설계값 | 허용값 | 상태] 행을 읽음
 * 같은 파일이 calculators / structure-calc 두 저장소에 있다. 고칠 때 둘 다 같이 고칠 것.
 */
(function () {
  'use strict';
  function txt(e) { return e ? (e.innerText || e.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function vis(e) { return !!(e && e.offsetParent !== null); }

  function structRows() {
    var out = [];
    document.querySelectorAll('.result-table tbody tr').forEach(function (tr) {
      if (!vis(tr)) return;
      var td = tr.querySelectorAll('td');
      if (td.length < 3) return;
      var c0 = td[0].cloneNode(true);
      c0.querySelectorAll('.auto-adjust').forEach(function (x) { x.remove(); }); // "자동" 표시 빼기
      var name = txt(c0);
      if (td.length >= 4) { // 비계: 구분 | 설계값 | 허용값 | 상태
        var val = txt(td[1]), allow = txt(td[2]), st = txt(td[3]);
        if (name && val && st) out.push('- ' + name + ': ' + val + ' / 허용 ' + allow + ' → ' + st);
      } else { // 동바리: 구분 | 구조최대값 | 상태
        var mx = txt(td[1]), st3 = txt(td[2]);
        if (name && mx && st3) out.push('- ' + name + ': 최대 ' + mx + ' → ' + st3);
      }
    });
    return out;
  }

  function build(cfg) {
    var head = '[' + cfg.title + ' 결과]', body = '';
    if (cfg.mode === 'calc') {
      try { if (window.GPQuote && cfg.quote) body = window.GPQuote._summary(cfg.quote).replace(/^\[[^\]]*\]\n?/, ''); } catch (e) {}
      if (!body) {
        var sec = document.querySelector(cfg.quote ? cfg.quote.section : '.result-section');
        var rows = [];
        if (sec) sec.querySelectorAll('table tbody tr').forEach(function (tr) {
          if (!vis(tr)) return; var td = tr.querySelectorAll('td'); if (td.length < 2) return;
          rows.push('- ' + txt(td[0]) + ': ' + txt(td[td.length - 1]));
        });
        body = rows.slice(0, 25).join('\n');
      }
    } else {
      var r = structRows();
      var ng = r.filter(function (x) { return /NG/.test(x); }).length;
      body = (r.length ? (ng ? '⚠ NG ' + ng + '건\n' : '모든 항목 OK\n') : '') + r.join('\n') +
        '\n(참고용 계산 · 정식 구조검토서는 HJ구조기술사사무소)';
    }
    return (head + '\n' + body + '\n' + location.href.split('#')[0]).slice(0, 1800);
  }

  function toast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#1B1B1B;color:#fff;padding:12px 18px;border-radius:10px;font:600 14px Pretendard,"Malgun Gothic",sans-serif;z-index:99999;box-shadow:0 6px 20px rgba(0,0,0,.25);max-width:90vw;text-align:center';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, bad) {
      var a = document.createElement('textarea'); a.value = text; a.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(a); a.select();
      try { document.execCommand('copy') ? ok() : bad(); } catch (e) { bad(e); }
      a.remove();
    });
  }

  function share(cfg) {
    var text = build(cfg);
    try { if (typeof window.gtag === 'function') window.gtag('event', 'share_result', { page_title: cfg.title }); } catch (e) {}
    var mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile && navigator.share) {
      navigator.share({ title: cfg.title, text: text }).catch(function () {});
      return;
    }
    copy(text).then(function () { toast('결과를 복사했어요. 카톡 대화창에 붙여넣기(Ctrl+V) 하세요.'); },
      function () { window.prompt('아래 글을 복사해서 보내세요', text); });
  }

  function add(cfg) {
    var ref = document.querySelector(cfg.after);
    if (!ref || document.querySelector('.gp-share-btn')) return;
    var ps = document.createElement('style'); ps.textContent = '@media print{.gp-share-btn{display:none!important}}'; document.head.appendChild(ps);
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = cfg.label || '📤 결과 공유';
    b.title = '휴대폰: 카톡 등으로 보내기 · PC: 결과 복사';
    b.addEventListener('click', function () { share(cfg); });
    if (cfg.own) { // 표 아래에 따로 놓는 버튼 (도구 막대가 꽉 찬 화면용)
      b.className = 'gp-share-btn no-print';
      b.style.cssText = 'display:inline-block;margin:10px 0 4px;background:#F2B705;color:#1B1B1B;border:0;border-radius:8px;padding:9px 14px;font:700 14px Pretendard,"Malgun Gothic",sans-serif;cursor:pointer';
      var w = document.createElement('div'); w.className = 'no-print'; w.style.textAlign = 'right'; w.appendChild(b);
      ref.parentNode.insertBefore(w, ref.nextSibling);
    } else {
      b.className = ref.className + ' gp-share-btn';
      ref.parentNode.insertBefore(b, ref.nextSibling);
    }
  }

  window.GPShare = {
    init: function (cfg) {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { add(cfg); });
      else add(cfg);
    },
    _build: build
  };
})();
