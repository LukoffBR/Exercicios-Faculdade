// QUESTÃO 4

// Classe base de ingresso
class ingresso {
    constructor(valor) {
        this.valor = valor;
    }

    // Imprimir o valor do ingresso
    imprimeValor() {
        console.log(`Valor do ingresso: ${this.valor.toFixed(2)}`);
    }
}

// Classe VIP que está herdando ingresso
class VIP extends ingresso {
    constructor(valor, adicional) {
        super(valor);
        this.adicional = adicional;
    }

    // Imprimir o valor do ingresso VIP Com o adicional incluído nele
    valorVIP() {
        return this.valor + this.adicional;
    }
}

// classe normal herdando de ingresso
class normal extends ingresso {
    // imprimi o tipo do ingresso
    imprimeTipo() {
        console.log("Ingresso normal");
    }
}

// classe camaroteInferior que herda do VIP
class camaroteInferior extends VIP {
    constructor(valor, adicional, localizacao) {
        super(valor, adicional);
        this.localizacao = localizacao;
    }

    // Acessa e imprime a localizacao
    getLocalizacao() {
        return this.localizacao;
    }

    imprimeLocalizacao() {
        console.log(`Localização do Camarote Inferior: ${this.localizacao}`);
    }
}

// classe camaroteSuperior que herda do VIP
class camaroteSuperior extends VIP {
    constructor(valor, adicional, beneficios) {
        super(valor, adicional);
        this.beneficios = beneficios;
    }

    // retorna o valor do ingresso VIP do camarote Superior
    valorCamaroteSuperior() {
        return this.valorVIP;
    }
}

// iniciar o Programa de compra de ingresso
const tipoIngresso = prompt(
    "Digite 1 para Ingresso normal e 2 para Ingresso VIP"
);

// logica do ingresso normal
if (tipoIngresso === "1") {
    const ingressoNormal = new normal(50.0);
    ingressoNormal.imprimeTipo();
    ingressoNormal.imprimeValor();
} else if (tipoIngresso === "2") {
    // logica do ingresso VIP
    const tipoCamarote = prompt(
        "Digite 1 para camarote Superior e 2 para camarote Inferior"
    );
    if (tipoCamarote === "1") {
        // logica do camarote Superior
        const camaroteSuperior = new camaroteSuperior(
            80.0,
            20.0,
            "Assentos reclináveis"
        );
        console.log("Ingresso VIP - camarote Superior");
        console.log(`Benefícios: ${camaroteSuperior.beneficios}`);
        console.log(
            `Valor do Ingresso: ${camaroteSuperior
                .valorCamaroteSuperior()
                .toFixed(2)}`
        );
    } else if (tipoCamarote === "2") {
        // logica do camarote Inferior
        const camaroteInferior = new camaroteInferior(
            70.0,
            15.0,
            "Frente do Palco"
        );
        console.log("Ingresso VIP - Camarote Inferior");
        console.log(
            `Valor do Ingresso: ${camaroteInferior.valorVIP().toFixed(2)}`
        );
    } else {
        console.log("Opção invalida.");
    }
} else {
    console.log("Opção invalida.");
}
