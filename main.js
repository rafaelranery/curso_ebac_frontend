class Aluno {
    //Função construtora da classe
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Rafael', 6.5);
const aluno2 = new Aluno('Carla', 3.5);
const aluno3 = new Aluno('João', 10);
const aluno4 = new Aluno('Christian', 0.0);
const aluno5 = new Aluno('Heloisa', 4.0);
const aluno6 = new Aluno('Carol', 6.0);

// Função com parametro rest para adição de instâncias no array;
construtorArrayAlunos = (...aluno) => {
        let alunosArray = []

        aluno.forEach(aluno => {
            alunosArray.push(aluno)
        })

        return alunosArray;
}

//Adição dos termos ao array
let turma = construtorArrayAlunos(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6);
console.log(turma); //teste

//Função para encontrar alunos apenas com nota >= 6 ;
    // e criar um array destes;

function filtraAlunosAprovados (aluno) {
    return aluno.nota >= 6;
}
const alunosAprovados = turma.filter(filtraAlunosAprovados);
console.log(alunosAprovados);
