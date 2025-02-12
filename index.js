const { Conta, Banco } = require('./banco')
// Criando um novo banco
const meuBanco = new Banco();
// Criando contas e realizando operações
const conta1 = meuBanco.criarConta(12345, 1000);
const conta2 = meuBanco.criarConta(54321, 500);
conta1.depositar(500);
conta2.sacar(200);
console.log(conta1.saldo); // Saída esperada: 1500
console.log(conta2.saldo); // Saída esperada: 300