/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function myFunction2(arg) {
  return arg[1];
}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction3(arg1, arg2) {
  return arg[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresDiferentes = [
  "Moesio", 
  1, 
  1.8,
  function teste() {
    return true;
  },
  aprenderMais: true
}

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(valoresDiferentes);

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

function book(nomeLivro){
    var obj = {
      um: {
        nome: "Harry Potter",
        quantidadePaginas: 100,
        autor: "JK Rolim",
        editora: "Nobel"
      },
      dois: {
        nome: "Askhaban",
        quantidadePaginas: 500,
        autor: "JK Rolim",
        editora: "Nobel"     
      },
      tres: {
        nome: "calice",
        quantidadePaginas: 400,
        autor: "JK Rolim",
        editora: "Nobel"     
      }
    }
    
    if(nomeLivro === 1) return obj.um;
    else if(nomeLivro === 2) return obj.dois;
    else if(nomeLivro === 3) return obj.tres;
    else return obj;
  }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro " + book(1).nome + " tem " + book(1).quantidadePaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro " + book(1).nome + " é " + book(1).autor + "."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

"O livro " + book(1).nome + " foi publicado pela editora " + book(1).editora + "."
