/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr=[1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function test(arr) {
    console.log(arr);
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// test(arr[1]) //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function test2(arr,x) {
    console.log(arr[x]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [1, 'oi', true, null, {nome: "Moesio"}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// test2(arr2,0);
// test2(arr2,1);
// test2(arr2,2);
// test2(arr2,3);
// test2(arr2,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook) {
    var library = {
        'Harry Potter': {
            quantidadePaginas: 100,
            autor: "JK Roling",
            editora: "Tanto faz"
        },
        'A culpa é das Estrelas': {
            quantidadePaginas: 200,
            autor: "Alguem ai",
            editora: "Tanto faz 2"
        },
        'Rei Leão': {
            quantidadePaginas: 300,
            autor: "Disney",
            editora: "Disney"
        }
    }

    return !nameBook ? library : library[nameBook];
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book("Harry Potter"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Harry Potter tem " + book("Harry Potter").quantidadePaginas + " páginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Harry Potter é " + book("Harry Potter").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Harry Potter foi publicado pela editora " + book("Harry Potter").editora + ".");
// ?
