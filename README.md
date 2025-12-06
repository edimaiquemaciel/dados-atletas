# 🏆 Sistema de Gerenciamento de Dados de Atletas

## 📋 Descrição do Projeto

Este projeto é uma evolução do Sistema de Cálculo de Notas de Atletas, desenvolvido para os organizadores de uma competição de ginástica artística. A aplicação utiliza Programação Orientada a Objetos (POO) em JavaScript para gerenciar informações completas dos atletas, incluindo cálculo de categoria, IMC e média válida de notas.

## 🎯 Objetivo

Criar uma classe `Atleta` capaz de armazenar dados de atletas e realizar cálculos automáticos de:
- Categoria por faixa etária
- Índice de Massa Corporal (IMC)
- Média válida das notas (desconsiderando maior e menor nota)

## 🏅 Categorias por Idade

| Categoria | Faixa Etária |
|-----------|--------------|
| Infantil | 9 a 11 anos |
| Juvenil | 12 e 13 anos |
| Intermediário | 14 e 15 anos |
| Adulto | 16 a 30 anos |
| Sem categoria | Demais idades |

## 📐 Cálculos Realizados

### IMC (Índice de Massa Corporal)
```
IMC = peso / (altura × altura)
```

### Média Válida
1. Ordena as notas em ordem decrescente
2. Remove a maior e a menor nota
3. Calcula a média das três notas restantes

## 🔧 Estrutura da Classe

### Atributos
- `nome`: Nome do atleta
- `idade`: Idade do atleta
- `peso`: Peso em kg
- `altura`: Altura em metros
- `notas`: Array com 5 notas

### Métodos Calculadores
- `calculaCategoria()`: Determina a categoria do atleta
- `calculaIMC()`: Calcula o IMC
- `calculaMediaValida()`: Calcula a média das notas válidas

### Métodos Getters
- `obtemNomeAtleta()`: Retorna o nome
- `obtemIdadeAtleta()`: Retorna a idade
- `obtemPesoAtleta()`: Retorna o peso
- `obtemAlturaAtleta()`: Retorna a altura
- `obtemNotasAtleta()`: Retorna as notas formatadas
- `obtemCategoria()`: Retorna a categoria
- `obtemIMC()`: Retorna o IMC
- `obtemMediaValida()`: Retorna a média válida

## 💻 Como Executar

### Pré-requisitos

- Node.js instalado (opcional)
- Navegador web com console JavaScript

### Opção 1: Executar no Node.js

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dados-atletas.git

# Entre no diretório
cd dados-atletas

# Execute o arquivo
node dados-atletas.js
```

### Opção 2: Executar no Navegador

1. Abra o Console do Desenvolvedor (F12)
2. Copie e cole o código do arquivo `dados-atletas.js`
3. Pressione Enter para ver os resultados

### Opção 3: Testar no DEVstart

1. Abra qualquer atividade do DEVstart
2. Limpe o campo de digitação
3. Cole o código completo do projeto
4. Verifique a saída no console

## 📊 Exemplo de Uso

```javascript
const atleta = new Atleta("Cesar Abascal", 
    30, 80, 1.70, 
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
```

## 📈 Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10, 9.34, 8.42, 10, 7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Programação Orientada a Objetos (POO)

## 📚 Conceitos Aplicados

- **Classes e Objetos**: Estrutura de dados orientada a objetos
- **Encapsulamento**: Métodos privados de cálculo
- **Métodos Getters**: Acesso controlado aos atributos
- **Constructor**: Inicialização de objetos
- **Manipulação de Arrays**: sort(), slice(), reduce()
- **Operadores Lógicos**: Condicionais if/else
- **Template Strings**: Formatação de saída

## 🧮 Detalhamento Técnico

### Cálculo de Categoria
```javascript
calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11) return "Infantil"
    if(this.idade >= 12 && this.idade <= 13) return "Juvenil"
    if(this.idade >= 14 && this.idade <= 15) return "Intermediário"
    if(this.idade >= 16 && this.idade <= 30) return "Adulto"
    return "Sem categoria"
}
```

### Cálculo de IMC
```javascript
calculaIMC(){
    return this.peso / (this.altura * this.altura);
}
```

### Cálculo de Média Válida
```javascript
calculaMediaValida(){
    const notasOrdenadas = this.notas.sort((a,b) => b - a);
    const notasValidas = notasOrdenadas.slice(1, 4);
    const soma = notasValidas.reduce((total, nota) => total + nota, 0);
    return soma / notasValidas.length;
}
```

## 👨‍💻 Autor

Desenvolvido como parte do programa DEVstart - Projeto de Certificação 2
