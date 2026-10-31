/* 구조검토 의뢰서 '사이트에서 바로 접수' (덧붙이기만 — 기존 이메일·카카오톡·파일 저장 방법은 그대로)
 * 제출 방법 고르는 창에 4번째 버튼을 추가한다. 누르면 의뢰서 내용이 운영자 메일로 바로 전달된다.
 */
(function () {
  'use strict';
  var API = 'https://gaseolpartner.vercel.app/api/review-request';
  if (typeof window.showSubmitModal !== 'function' || typeof window.generateEmailBody !== 'function') return;
  var orig = window.showSubmitModal;

  function track(name) { try { if (typeof window.gtag === 'function') window.gtag('event', name, { event_category: '구조검토' }); } catch (e) {} }

  function send(fd, btn) {
    var phone = (fd && fd.발신정보 && fd.발신정보.연락처) || '';
    if (!String(phone).trim()) { alert('H.P(연락처)를 입력해 주세요. 접수 후 이 번호로 연락드립니다.'); return; }
    track('구조검토바로접수');
    btn.disabled = true; var old = btn.innerHTML;
    btn.innerHTML = '<div style="font-size:30px;margin-bottom:10px">⏳</div>보내는 중…';
    fetch(API, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: window.generateEmailBody(fd),
        company: (fd.프로젝트정보 && fd.프로젝트정보.업체명) || (fd.발신정보 && fd.발신정보.회사) || '',
        site: (fd.프로젝트정보 && fd.프로젝트정보.현장명) || '',
        phone: phone, website: ''
      })
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok && j.ok, j: j, status: r.status }; }); })
      .then(function (res) {
        if (res.status === 429) {
          btn.disabled = false; btn.innerHTML = old;
          alert('짧은 시간에 여러 번 보내셨어요.\n10분쯤 뒤에 다시 시도하시거나, 다른 방법(이메일·카카오톡·파일 저장)으로 보내 주세요.');
          return;
        }
        if (res.ok) {
          track('구조검토바로접수완료');
          var m = document.querySelector('div[style*="position: fixed"]'); if (m) m.remove();
          done(res.j.receipt || '', phone);
        } else { throw new Error((res.j && res.j.error) || '접수 실패'); }
      })
      .catch(function () {
        btn.disabled = false; btn.innerHTML = old;
        alert('지금은 바로 접수가 되지 않았어요.\n다른 방법(이메일·카카오톡·파일 저장)으로 보내 주세요.');
      });
  }

  // 접수 완료 창: 접수번호 + 진행 상황 조회 링크 (접수번호가 없으면 예전처럼 안내만)
  var STATUS = 'https://gaseolpartner.github.io/calculators/review-status.html';
  function done(receipt, phone) {
    var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var w = document.createElement('div');
    w.className = 'gprs-done';
    w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '구조검토 의뢰 접수 완료');
    w.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:100000;padding:16px';
    var link = receipt ? STATUS + '?r=' + encodeURIComponent(receipt) : STATUS;
    w.innerHTML = '<div style="background:#fff;border-radius:16px;max-width:420px;width:100%;padding:28px 24px;text-align:center;font-family:Pretendard,-apple-system,sans-serif;color:#1B1B1B;box-shadow:0 20px 50px rgba(0,0,0,.3)">' +
      '<div style="width:56px;height:56px;border-radius:50%;background:#F2B705;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900">✓</div>' +
      '<div style="font-size:21px;font-weight:800">의뢰서가 접수됐어요</div>' +
      '<div style="margin-top:8px;font-size:15px;color:#555;line-height:1.55">영업일 기준 <b style="color:#1B1B1B">하루 안에</b> 견적을 안내해 드려요.<br>연락처 ' + esc(phone) + ' 로 연락드립니다.</div>' +
      (receipt ? '<div style="margin:18px 0 6px;font-size:13px;color:#777">접수번호</div>' +
        '<div style="display:flex;gap:8px;justify-content:center;align-items:center"><span class="gprs-no" style="font-size:24px;font-weight:900;letter-spacing:.5px">' + esc(receipt) + '</span>' +
        '<button type="button" class="gprs-copy" style="border:1px solid #ccc;background:#fff;border-radius:8px;padding:6px 10px;font-size:13px;font-weight:700;cursor:pointer">복사</button></div>' +
        '<div style="font-size:12.5px;color:#777;margin-top:6px">접수번호와 연락처 끝 4자리로 진행 상황을 볼 수 있어요</div>' : '') +
      '<a href="' + esc(link) + '" target="_blank" rel="noopener" style="display:block;margin-top:18px;background:#F2B705;color:#1B1B1B;font-weight:800;padding:13px;border-radius:10px;text-decoration:none">진행 상황 보기</a>' +
      '<button type="button" class="gprs-close" style="display:block;width:100%;margin-top:8px;background:none;border:none;color:#555;font-size:15px;padding:10px;cursor:pointer">닫기</button></div>';
    document.body.appendChild(w);
    var close = function () { w.remove(); };
    w.querySelector('.gprs-close').onclick = close;
    w.addEventListener('click', function (e) { if (e.target === w) close(); });
    var c = w.querySelector('.gprs-copy');
    if (c) c.onclick = function () { try { navigator.clipboard.writeText(receipt); c.textContent = '복사됨'; } catch (e) {} };
    try { localStorage.setItem('gp_review_last', JSON.stringify({ r: receipt, t: Date.now() })); } catch (e) {}
    setTimeout(function () { try { w.querySelector('a').focus(); } catch (e) {} }, 50);
  }

  window.showSubmitModal = function (formData) {
    orig.apply(this, arguments);
    try {
      var modals = document.querySelectorAll('div[style*="position: fixed"]');
      var modal = modals[modals.length - 1];
      var row = modal && modal.querySelector('div[style*="display: flex"]');
      if (!row || row.querySelector('.gprs-btn')) return;
      var b = document.createElement('button');
      b.className = 'gprs-btn'; b.type = 'button';
      b.style.cssText = 'background:#1B1B1B;color:#fff;border:none;padding:30px 40px;border-radius:10px;cursor:pointer;font-size:18px;transition:all .3s';
      b.innerHTML = '<div style="font-size:30px;margin-bottom:10px">📨</div>바로 접수<div style="font-size:14px;margin-top:10px;color:#F2B705">영업일 하루 안에 견적 회신</div>';
      b.onclick = function () { send(formData, b); };
      row.insertBefore(b, row.firstChild);
    } catch (e) { /* 추가 버튼이 실패해도 기존 방법은 그대로 */ }
  };
})();
