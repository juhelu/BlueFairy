/*! © 2026 Blue Fairy Coffee Shop — Todos os direitos reservados.
 * Medidas de DISSUASÃO (não são segurança absoluta: qualquer conteúdo exibido no
 * navegador pode ser capturado por quem for determinado). Servem para desencorajar
 * cópia casual e deixar clara a intenção de proteção autoral. */
(function () {
  'use strict';

  // Opcional: escurecer a página quando a aba perde o foco (atrapalha alguns usuários).
  var ESCURECER_AO_PERDER_FOCO = false;

  // 1) Impede que o site seja carregado dentro de outro site (iframe / clonagem).
  if (window.top !== window.self) {
    try { window.top.location = window.self.location; }
    catch (e) { document.documentElement.innerHTML = ''; }
  }

  var bloquear = function (e) { e.preventDefault(); };

  // 2) Sem menu de contexto (botão direito) e sem arrastar imagens.
  document.addEventListener('contextmenu', bloquear);
  document.addEventListener('dragstart', bloquear);

  // 3) Atalhos comuns de "ver código-fonte", salvar, imprimir e ferramentas de desenvolvedor.
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    var ctrl = e.ctrlKey || e.metaKey;
    var alvo =
      e.key === 'F12' ||
      (ctrl && ['u', 's', 'p'].indexOf(k) > -1) ||
      (ctrl && e.shiftKey && ['i', 'j', 'c', 'k'].indexOf(k) > -1) ||
      (e.metaKey && e.altKey && ['i', 'j', 'c', 'u'].indexOf(k) > -1);
    if (alvo) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  // 4) Tentativa de atrapalhar "Print Screen" (melhor esforço; não funciona em celulares,
  //    nem em ferramentas de captura do sistema). A marca d'água do CSS é a defesa real.
  var cobertura = document.createElement('div');
  cobertura.style.cssText = 'position:fixed;inset:0;background:#fefefd;z-index:100000;display:none;' +
    'align-items:center;justify-content:center;font:14px Georgia,serif;color:#a98a4b';
  cobertura.textContent = '© Blue Fairy Coffee Shop — conteúdo protegido';
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(cobertura); });

  function esconder(ms) {
    cobertura.style.display = 'flex';
    setTimeout(function () { cobertura.style.display = 'none'; }, ms);
  }
  document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
      try { navigator.clipboard.writeText('© Blue Fairy Coffee Shop'); } catch (err) {}
      esconder(1500);
    }
  });

  if (ESCURECER_AO_PERDER_FOCO) {
    window.addEventListener('blur', function () { cobertura.style.display = 'flex'; });
    window.addEventListener('focus', function () { cobertura.style.display = 'none'; });
  }

  // 5) Assinatura de autoria no console.
  try {
    console.log('%c© 2026 Blue Fairy Coffee Shop — Todos os direitos reservados.',
      'color:#a98a4b;font:600 13px Georgia,serif');
    console.log('Reprodução, cópia ou uso deste código e das imagens sem autorização é proibido.');
  } catch (e) {}
})();
