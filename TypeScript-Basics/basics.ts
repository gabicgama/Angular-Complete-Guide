//TIPOS PRIMITIVOS

let numero: number
let texto: string
let booleano: boolean

//TIPOS COMPLEXOS

let vetor: string[]

vetor = ['aa', 'bb']

//Graças as typescript ele definiu que esse vetor só recebe strings.
vetor = ['aa', 12323]


//OBJETOS

//Declarando tipos de objetos bem como suas propriedades.

let produto: {
    nome: string
    preço: number
}

produto = {
    nome: 'copo',
    preço: 10
}

//Não aceita esse objeto, pois há uma propriedade não definida.
produto = {
    nome: 'copo',
    preço: 10,
    descriçao: 'blabla'
}


//INFERENCIA DE TIPO

//Não é necessario declarar explicitamente o tipo da varivel se vc ja atribuiu um valor direto a ela.
//O Typescript já reconhece que a varivel só aceita string, conforme foi atribuido primeiramente.

let variavel = 'palavra'
let variavel2: string = 'palavara'

variavel = 234


//UNION TYPE

//Permite que uma variavel possa ser atribuida com diferentes tipos.

let tipoUnido: string | number = 'texto'
tipoUnido = 123

// TYPE ALIAS

//Basicamente vc define um tipo que pode ser usado para definir variaveis, objetos, etc.

type Pessoa = {
    nome: string
    idade: number
}

let pessoa: Pessoa;
pessoa = { nome: 'maria', idade: 21 }

let pessoa2: Pessoa = { nome: 'joao', idade: 23 }

let pessoas: Pessoa[]

pessoas = [{ nome: 'lucas', idade: 20 }, { nome: 'ana', idade: 33 }]

//RETORNO DE FUNÇÕES

//Ao passar o mouse por cima da função vemos que o tipo de retorno number já esta definido implicitamente por causa da ação 'a + b' que está sendo retornada.
function soma(a: number, b: number) {
    return a + b
}

//Nesta segunda função o retorno é void.
function imprimir(value: any) {
    console.log(value)
}

//GENERICS

//Suponha que eu queira usar uma função que adiciona um novo elemento no inicio da função, mas queira que seja utilizado para arrays de numerose strings.
//Veja que a função retorna um tipo any[] por causa dos paramatros que foram definidos com o tipo any.
function insertAtBegining(array: any[], value: any) {
    const newArray = [value, ...array]
    return newArray
}

//Ao usar a função, veja que o typescript não reconhece o array como tipo number, em vez disso, reconhece como tipo any por causa da definicao anterior.
//Isso é impede, por exemplo, que recursos do tipo de dado sejam utilizados corretamente, como no caso abaixo, um split que só é possivel executar
//em um array de tipo string não está apontando o erro. Esse erro só será pego em tempo de execução, e não em tempo de compilação.

const demoArray = [1, 2, 3]

const updatedArray = insertAtBegining(demoArray, -1)// Veja que o typescript não reconheceu o tipo number do demoArray.

updatedArray[0].split('') //Vai dar errado com números, porém o typescript aqui não reconheceu o array como tipo number, e sim como tipo any.

//O tipo Generic <T> do typescript é um recurso que soluciona esse problema.

function insertAtBeginingGeneric<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray2 = [1, 2, 3]

const updatedArray2 = insertAtBeginingGeneric(demoArray, -1) //Veja que aqui o typescript entendeu que a função retorna um array do tipo number.

updatedArray2[0].split('') //Agora o erro é apontado pq o tipo do array está definido como number e não mais any. Dessa forma o método split não se aplica.

//CLASSES

class Student {
    /*
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    */

    //Alternativa para definir as propriedades e já atribuir os no construtor

    constructor(
        public first: string,
        public last: string,
        public age: number,
        private courses: string[]) {
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Gabi', 'Gama', 26, ['Angular']);

student.enrol('React'); // student.courses => ['Angular', 'React']

//INTERFACES

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() { console.log('hello') }
}