const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Engenharia de Software",
    notas: [8.5, 7.0, 9.2, 6.8]
};

console.log("OBJETO:");
console.log(aluno);

console.log("\nPROPRIEDADES:");
for (let chave in aluno) {
    console.log(chave, ":", aluno[chave]);
}

console.log("\nNOTAS:");
for (let nota of aluno.notas) {
    console.log(nota);
}

console.log("\nCOMPARAÇÃO:");
const aluno2 = aluno;
console.log(aluno === aluno2);

const aluno3 = {
    nome: "Carlos",
    idade: 22,
    curso: "Engenharia de Software",
    notas: [8.5, 7.0, 9.2, 6.8]
};
console.log(aluno === aluno3);

console.log("\nREFERÊNCIA:");
const ref = aluno;
ref.nome = "João";
console.log(aluno);

console.log("\nSPREAD:");
const copia = { ...aluno };
copia.nome = "Maria";
console.log(copia);
console.log(aluno);

console.log("\nJSON:");
console.log(JSON.stringify(aluno));