document.addEventListener('DOMContentLoaded', function () {
  // Selecionando os elementos do formulário
  const form = document.getElementById('login-form');
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('login-button');
  const helpLink = document.getElementById('help-link');

  // Função de validação de login
  function validateForm() {
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    // Validação simples de campos
    if (username === '' || password === '') {
      alert('Por favor, preencha ambos os campos!');
      return false;
    }

    // Aqui você pode adicionar a lógica de autenticação (exemplo simulado)
    if (username === 'usuario' && password === 'senha123') {
      alert('Login bem-sucedido!');
      return true;
    } else {
      alert('Usuário ou senha incorretos.');
      return false;
    }
  }

  // Evento de clique no botão de login
  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que o formulário seja enviado
    if (validateForm()) {
      // Aqui você pode redirecionar para outra página após um login bem-sucedido
      // window.location.href = 'dashboard.html'; // Exemplo
    }
  });

  // Função para exibir um link de ajuda
  helpLink.addEventListener('click', function () {
    alert('Caso precise de ajuda, entre em contato com o suporte.');
  });
});
