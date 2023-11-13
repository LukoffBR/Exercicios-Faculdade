// QUESTÃO 2

// Class ContaBancaria
class ContaBancaria {
    constructor(cliente, num_conta, saldo) {
        this.cliente = cliente;
        this.num_conta = num_conta;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor;
        } else {
            throw new Error("Saldo insuficiente.");
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

// Class ContaPoupanca
class ContaPoupanca extends ContaBancaria {
    constructor(cliente, num_conta, saldo, dia_rendimento) {
        super(cliente, num_conta, saldo);
        this.dia_rendimento = dia_rendimento;
    }

    calcularNovoSaldo(taxa_rendimento) {
        this.saldo = this.saldo * (1 + taxa_rendimento);
    }
}

// Class ContaEspecial
class ContaEspecial extends ContaBancaria {
    constructor(cliente, num_conta, saldo, limite) {
        super(cliente, num_conta, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        if (this.saldo + this.limite - valor >= 0) {
            this.saldo -= valor;
        } else {
            throw new Error("Saldo insuficiente.");
        }
    }
}

// Class ContasJava
class ContasJava {
    static main() {
        // Cria uma conta poupança
        const contaPoupanca = new ContaPoupanca("João", 123456, 1000, 10);

        // Saca um valor da conta poupança
        contaPoupanca.sacar(500);

        // Depositar um valor na conta poupança
        contaPoupanca.depositar(200);

        // Mostra o novo saldo da conta poupança
        console.log(contaPoupanca.saldo); //  esperado 700

        // Criar uma conta especial
        const contaEspecial = new ContaEspecial("Maria", 654321, 500, 1000);

        // Sacar um valor da conta especial
        contaEspecial.sacar(700);

        // Mostra o novo saldo da conta especial
        console.log(contaEspecial.saldo); // esperado -200
    }
}

// Executar o ContasJava
ContasJava.main();
