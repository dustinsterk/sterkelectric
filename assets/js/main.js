// Mobile menu and dropdown toggles
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var hdr = document.querySelector('.site-header').getBoundingClientRect();
      nav.style.top = hdr.bottom + 'px';
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.classList.toggle('nav-open', open);
    });
  }
  document.querySelectorAll('.dd-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      document.querySelectorAll('.has-dd.open').forEach(function (other) {
        if (other !== li) { other.classList.remove('open'); other.querySelector('.dd-toggle').setAttribute('aria-expanded', 'false'); }
      });
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dd')) {
      document.querySelectorAll('.has-dd.open').forEach(function (li) { li.classList.remove('open'); });
    }
  });
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
