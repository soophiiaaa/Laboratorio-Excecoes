// Modelo simplificado de Conta
class Conta {
    constructor(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
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
}
// Modelo simplificado de Banco
class Banco {
    constructor() {
        this.contas = [];
    }

    criarConta(numero, saldoInicial) {
        const novaConta = new Conta(numero, saldoInicial);
        this.contas.push(novaConta);
        return novaConta;
    }

    //versão do método com programação funcional
    encontrarConta(numero) {
        return this.contas.find(conta => conta.numero === numero);
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
