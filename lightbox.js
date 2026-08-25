(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  var img = document.createElement('img');
  img.alt = '';

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'lightbox-close';
  closeBtn.textContent = 'Close ✕';
  closeBtn.setAttribute('aria-label', 'Close image preview');

  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.media-slot img').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      open(thumb.getAttribute('src'), thumb.getAttribute('alt'));
    });
  });

  img.addEventListener('click', function (e) { e.stopPropagation(); });
  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', function (e) { e.stopPropagation(); close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
