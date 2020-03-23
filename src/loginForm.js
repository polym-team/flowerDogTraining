function onInitLoginPage() {
  if (!document.getElementById('email')) return;

  const addressInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');

  const login = () => {
    if (addressInput.value) {
      if (passwordInput.value) {
        alert(`ID : ${addressInput.value}\nPW : ${passwordInput.value}`);
        addressInput.value = '';
        passwordInput.value = '';
      } else {
        alert('Type your Password');
        passwordInput.focus();
      }
    } else {
      alert('Type your E-mail address');
      addressInput.focus();
    }
  };

  addressInput.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      addressInput.value
        ? passwordInput.focus()
        : alert('Type your E-mail address');
      e.preventDefault();
    }
  });

  passwordInput.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      login();
      e.preventDefault();
    }
  });

  loginBtn.addEventListener('click', e => {
    login();
  });
}
