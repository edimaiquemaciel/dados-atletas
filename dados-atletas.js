class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        }else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else {
            return "Sem categoria"
        }
    }
    calculaIMC(){
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }
    calculaMediaValida(){
        const notasComutadas = this.notas.sort((a,b) => b - a).slice(1,4);
        const somaNotas = this.notas.sort((a,b) => b - a).slice(1,4).reduce((total, atual) => total + atual, 0);
        const mediaValida = somaNotas / notasComutadas.length;
        return mediaValida;
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura;
    }
    obtemNotasAtleta(){
        return this.notas.join(", ");
    }
    obtemCategoria(){
        return this.calculaCategoria();
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])

console.log(`
    Nome: ${atleta.obtemNomeAtleta()}
    Idade: ${atleta.obtemIdadeAtleta()}
    Peso: ${atleta.obtemPesoAtleta()}
    Altura: ${atleta.obtemAlturaAtleta()}
    Notas: ${atleta.obtemNotasAtleta()}
    Categoria: ${atleta.obtemCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média válida: ${atleta.obtemMediaValida()}
    `);
