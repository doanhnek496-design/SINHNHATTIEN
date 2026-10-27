(() => {
  const correctPassword = '000000';
  let password = '';
  let checking = false;
  const dots = document.getElementById('passwordDots');
  const count = document.getElementById('passCount');
  const feedback = document.getElementById('feedback');
  const display = document.getElementById('passDisplay');
  const unlockBtn = document.getElementById('unlockBtn');

  function render() {
    dots.textContent = Array.from({ length: 6 }, (_, i) => password[i] ? '●' : '○').join(' ');
    count.textContent = `${password.length}/6`;
    unlockBtn.disabled = password.length !== 6 || checking;
    unlockBtn.style.opacity = unlockBtn.disabled ? '.6' : '1';
  }

  function clear() {
    password = '';
    render();
  }

  function check() {
    if (checking || password.length !== 6) {
      if (password.length !== 6) {
        feedback.textContent = `Vui lòng nhập đủ 6 chữ số (${password.length}/6) nhé 💗`;
        feedback.className = 'feedback error';
      }
      return;
    }
    if (password === correctPassword) {
      checking = true;
      render();
      feedback.textContent = 'Đúng rồi! Đang mở lá thư dành cho Tiền… ✨';
      feedback.className = 'feedback success';
      sessionStorage.setItem('birthdayUnlocked', 'yes');
      setTimeout(() => { location.href = 'sinhnhat.html'; }, 350);
      return;
    }
    feedback.textContent = 'Mật khẩu chưa đúng, thử lại nha 💗';
    feedback.className = 'feedback error';
    display.classList.remove('shake');
    void display.offsetWidth;
    display.classList.add('shake');
    setTimeout(clear, 650);
  }

  function add(n) {
    if (checking || password.length >= 6) return;
    password += n;
    render();
    feedback.textContent = '';
    feedback.className = 'feedback';
    if (password.length === 6) setTimeout(check, 120);
  }

  document.querySelectorAll('[data-num]').forEach(button => {
    button.addEventListener('click', () => add(button.dataset.num));
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    if (!checking) { clear(); feedback.textContent = ''; feedback.className = 'feedback'; }
  });
  document.getElementById('backBtn').addEventListener('click', () => {
    if (!checking) { password = password.slice(0, -1); render(); }
  });
  unlockBtn.addEventListener('click', check);
  document.addEventListener('keydown', event => {
    if (/^\d$/.test(event.key)) add(event.key);
    if (event.key === 'Backspace' && !checking) { password = password.slice(0, -1); render(); }
    if (event.key === 'Enter') check();
  });
  render();
})();
