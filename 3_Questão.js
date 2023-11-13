// QUESTÃO 3

// Classe abstrata Quadrilatero
class Quadrilatero {
    // Métodos abstratos a serem implementados nas subclasses
    calcularArea() {
        throw new Error(
            "Método calcularArea() deve ser implementado nas subclasses."
        );
    }

    calcularPerimetro() {
        throw new Error(
            "Método calcularPerimetro() deve ser implementado nas subclasses."
        );
    }
}

// Subclasse de Quadrilatero: Retangulo
class Retangulo extends Quadrilatero {
    // Construtor
    constructor(lado, altura) {
        super();
        this.lado = lado;
        this.altura = altura;
    }

    // Implementação dos métodos abstratos
    calcularArea() {
        return this.lado * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.lado + this.altura);
    }
}

// Subclasse de Quadrilatero: Circulo
class Circulo extends Quadrilatero {
    // Construtor
    constructor(raio) {
        super();
        this.raio = raio;
    }

    // Implementação dos métodos abstratos
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}

// Subclasse de Retangulo: Quadrado
class Quadrado extends Retangulo {
    // Construtor
    constructor(lado) {
        super(lado, lado);
    }
}

// Programa de teste
const quadrilateros = [];

// Preencher o array com instâncias aleatórias de Retangulo, Circulo e Quadrado
for (let i = 0; i < 5; i++) {
    const escolha = Math.floor(Math.random() * 3);

    switch (escolha) {
        case 0:
            quadrilateros[i] = new Retangulo(
                Math.random() * 10,
                Math.random() * 10
            );
            break;
        case 1:
            quadrilateros[i] = new Circulo(Math.random() * 10);
            break;
        case 2:
            quadrilateros[i] = new Quadrado(Math.random() * 10);
            break;
    }
}

// Calcular e exibir área e perímetro para cada quadrilátero no array
for (const q of quadrilateros) {
    console.log(`Área: ${q.calcularArea()}`);
    console.log(`Perímetro: ${q.calcularPerimetro()}`);
    console.log();
}
