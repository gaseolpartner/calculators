/* 구조검토 의뢰서 '사이트에서 바로 접수' (덧붙이기만 — 기존 이메일·카카오톡·파일 저장 방법은 그대로)
 * 제출 방법 고르는 창에 4번째 버튼을 추가한다. 누르면 의뢰서 내용이 운영자 메일로 바로 전달된다.
 */
(function () {
  'use strict';
  var API = 'https://gaseolpartner.vercel.app/api/review-request';
  if (typeof window.showSubmitModal !== 'function' || typeof window.generateEmailBody !== 'function') return;
  var orig = window.showSubmitModal;

  function send(fd, btn) {
    var phone = (fd && fd.발신정보 && fd.발신정보.연락처) || '';
    if (!String(phone).trim()) { alert('H.P(연락처)를 입력해 주세요. 접수 후 이 번호로 연락드립니다.'); return; }
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
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok && j.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok) {
          var m = document.querySelector('div[style*="position: fixed"]'); if (m) m.remove();
          alert('의뢰서가 접수되었습니다.\n확인 후 입력하신 연락처(' + phone + ')로 연락드리겠습니다.');
        } else { throw new Error((res.j && res.j.error) || '접수 실패'); }
      })
      .catch(function () {
        btn.disabled = false; btn.innerHTML = old;
        alert('지금은 바로 접수가 되지 않았어요.\n다른 방법(이메일·카카오톡·파일 저장)으로 보내 주세요.');
      });
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
      b.innerHTML = '<div style="font-size:30px;margin-bottom:10px">📨</div>바로 접수<div style="font-size:14px;margin-top:10px;color:#F2B705">버튼 한 번으로 전달</div>';
      b.onclick = function () { send(formData, b); };
      row.insertBefore(b, row.firstChild);
    } catch (e) { /* 추가 버튼이 실패해도 기존 방법은 그대로 */ }
  };
})();
