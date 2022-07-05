document.addEventListener('DOMContentLoaded', () => {
  const inpEmail = document.querySelector('input#email');
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  document.querySelector('form').addEventListener('submit', event => {
    if (!(regex.test(inpEmail.value))) {
      inpEmail.closest('.form-group').classList.add('err');
      event.preventDefault();
    }
  });

  inpEmail.addEventListener('input', () => inpEmail.closest('.form-group').classList.remove('err'));
});