// PEGAR DADOS DOS FORMULÁRIOS

var form = document.getElementById("formulario");
const nomeSite = document.getElementById("nome");
const emailSite = document.getElementById("email");
const senhaSite = document.getElementById("senha");
const confirmarSenhaSite = document.getElementById("confirmar-senha");
const dataDeNascimentoSite = document.getElementById("data");
const enderecoSite = document.getElementById("endereco");

//CLASSE DOS OBJS
class Pessoa {
  constructor(nome, email, senha, dataDeNascimento, endereco) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataDeNascimento = dataDeNascimento;
    this.endereco = endereco;
  }
}

//FUNÇÕES

function registrar(e) {
  const nome = nomeSite.value;
  const email = emailSite.value;
  const senha = senhaSite.value;
  const confirmarSenha = confirmarSenhaSite.value;
  const dataDeNascimento = dataDeNascimentoSite.value;
  const endereco = enderecoSite.value;

  if (confirmarSenha != senha) {
    alert("Você digitou senhas diferentes");
    throw new senhaInvalida("As senhas não coincidem");
  }

  const p1 = new Pessoa(nome, email, senha, dataDeNascimento, endereco);
  alert("Você cadastrou o usuário com sucesso");
  e.preventDefault();
}

//EVENTOS
form.addEventListener("submit", registrar);
