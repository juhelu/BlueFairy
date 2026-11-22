/*! © 2026 Blue Fairy Coffee Shop — Todos os direitos reservados. */
(function () {
  'use strict';
  var caixa = document.querySelector('.brilhos');
  if (!caixa) return;
  var total = window.innerWidth < 700 ? 18 : 34;
  for (var i = 0; i < total; i++) {
    var s = document.createElement('span');
    s.className = 'brilho';
    s.textContent = i % 3 === 0 ? '✧' : '✦';
    s.style.left = (Math.random() * 100) + '%';
    s.style.top = (Math.random() * 100) + '%';
    s.style.fontSize = (8 + Math.random() * 18) + 'px';
    s.style.animationDuration = (3 + Math.random() * 4) + 's';
    s.style.animationDelay = (-Math.random() * 6) + 's';
    caixa.appendChild(s);
  }
})();
