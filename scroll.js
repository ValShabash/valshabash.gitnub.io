// scroll.js — кнопка "Наверх"
(function() {
  const btn = document.createElement('div');
  btn.innerHTML = '↑';
  btn.className = 'scroll-top';
  document.body.appendChild(btn);
  const style = document.createElement('style');
  style.textContent = 
    .scroll-top {
      position: fixed;
      bottom: 90px;
      right: 20px;
      background-color: #8b0000;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
      z-index: 999;
      font-size: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    .scroll-top.show {
      opacity: 1;
      visibility: visible;
    }
    .scroll-top:hover {
      background-color: #b22222;
      transform: scale(1.05);
    }
  ;
  document.head.appendChild(style);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
