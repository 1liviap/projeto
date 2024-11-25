document.addEventListener('DOMContentLoaded', function () {
  // Selecionando os elementos do formulário
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');
  const dateField = document.getElementById('date');
  const timeField = document.getElementById('time');
  const locationField = document.getElementById('location');
  const loginButton = document.getElementById('login-button');
  const helpLink = document.getElementById('help-link');

  // Função para validar se todos os campos estão preenchidos
  function validateForm() {
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    const date = dateField.value.trim();
    const time = timeField.value.trim();
    const location = locationField.value;

    // Verificando se todos os campos estão preenchidos
    if (!username || !password || !date || !time || !location) {
      alert('Por favor, preencha todos os campos!');
      return false;
    }

    return true;
  }

  // Evento de clique no botão de login
  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Se todos os campos forem validados corretamente, mostra a mensagem de sucesso
    if (validateForm()) {
      alert('Formulário preenchido corretamente! Você pode prosseguir.');
    }
  });

  // Evento para exibir mensagem de ajuda
  helpLink.addEventListener('click', function () {
    alert('Caso precise de ajuda, entre em contato com o suporte.');
  });
});
