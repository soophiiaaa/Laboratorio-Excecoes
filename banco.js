// Modelo simplificado de Conta
class Conta {
    constructor(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor < 0) {
            throw new Error()
        } else {
            this.saldo += valor
        }
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error()
        }
        /*if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }*/ //primeira versão do método saque
    }

    verificaValorInvalido() {
        if (typeof this.numero !== "number" || typeof this.saldo !== "number") {
            throw new Error('Valores Inválidos Inseridos!')
        }
    }
}
// Modelo simplificado de Banco
class Banco {
    constructor() {
        this.contas = [];
    }

    criarConta(numero, saldoInicial) {
        const novaConta = new Conta(numero, saldoInicial);
        const contaIgual = this.contas.find((i) => i.numero === novaConta.numero);

        if (contaIgual === undefined) {
            this.contas.push(novaConta);
            return novaConta;
        }
        throw new Error('Conta já Existente!')
    }

    //versão do método com programação funcional
    encontrarConta(numero) {
        const numeroEncontrado = this.contas.find(conta => conta.numero === numero);

        if (!numeroEncontrado) {
            throw new Error()
        }
    }

    //versão do método sem programação funcional
    encontrarConta_v2(numero) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return this.contas[i];
            }
        }
        return null; // Retorna null se a conta não for encontrada
    }
    //encontraConta(n) e encontraConta_v2(n) fazem a mesma coisa
}

module.exports = { Conta, Banco }
