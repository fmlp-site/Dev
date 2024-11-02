// Configuração da API do RestDB.io
const apiKey = '9c549e27cfe91b4251c8cfc0fea1fa058a163';
const databaseUrl = 'https://vestibularb-c6f2.restdb.io/rest/admin?max=2';

// Função de cadastro
function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    fetch(databaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': apiKey,
            'cache-control': 'no-cache'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            document.getElementById('cadastroForm').reset();
        } else {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    })
    .catch(error => console.error('Erro:', error));
}

// Função de login
function login() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    fetch(`${databaseUrl}?q={"email":"${email}","senha":"${senha}"}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': apiKey,
            'cache-control': 'no-cache'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Usuário autenticado com sucesso
            alert('Login bem-sucedido!');
            window.location.href = 'paginainicoaladm.html';
        } else {
            alert('Email ou senha incorretos.');
        }
    })
    .catch(error => console.error('Erro:', error));
}
function login() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    fetch(`${databaseUrl}?q={"email":"${email}","senha":"${senha}"}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': apiKey,
            'cache-control': 'no-cache'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Usuário autenticado com sucesso
            alert('Login bem-sucedido!');
            localStorage.setItem('adminLogado', 'true');  // Define que o administrador está logado
            window.location.href = 'paginainicoaladm.html';
        } else {
            alert('Email ou senha incorretos.');
        }
    })
    .catch(error => console.error('Erro:', error));
}

