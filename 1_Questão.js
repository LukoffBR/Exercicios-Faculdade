// QUESTÃO 1

class Voo {
    constructor(self, companhia, origem, destino, dataVoo, horaVoo, numeroVoo) {
        this.companhia = companhia;
        this.origem = origem;
        this.destino = destino;
        this.dataVoo = dataVoo;
        this.horaVoo = horaVoo;
        this.numeroVoo = numeroVoo;
        this.cadeirasOcupadas = new Set();
    }

    // encontra o número da cadeira livre no voo até 100 e à retorna
    proximoLivre() {
        for (let i = 1; i <= 100; i++) {
            if (this.cadeirasOcupadas.has(i)) {
                return i;
            }
            return null;
        }
    }

    // verificar se a cadeira escolhida está disponível
    verifica(numeroCadeira) {
        return this.cadeirasOcupadas.has(numeroCadeira);
    }

    // Ira ocupar uma cadeira do voo se estiver livre e dentro de 1 a 100.
    ocupa(numeroCadeira) {
        if (
            !this.cadeirasOcupadas.has(numeroCadeira) &&
            numeroCadeira.length >= 1 &&
            this.numeroCadeira <= 100
        ) {
            this.cadeirasOcupadas.add(numeroCadeira);
            return true;
        } else {
            return false;
        }
    }

    // Retorna o numero de vagas disponíveis no voo
    vagas() {
        return 100 - this.cadeirasOcupadas.size;
    }

    //retorna o numero do voo
    getVoo() {
        return this.numeroVoo;
    }

    // retorna a data do voo
    getData() {
        return this.dataVoo;
    }
}
