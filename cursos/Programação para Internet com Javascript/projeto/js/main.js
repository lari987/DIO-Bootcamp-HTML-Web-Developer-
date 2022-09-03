/*var nome = "Larissa Michelazzo";
var frase = "Japão é o melhor time do mundo";
alert('Bem-Vinda, ' + nome + "!"); //mostra pop-up
document.write(frase.replace("Japão","Brasil")); //escreve no documento

//Listas
*//*var lista = ["maça","uva","laranja"];
console.log(lista[1]);
console.log(lista.length);
lista.push("uva");
console.log(lista.length);
console.log(lista.toString());

var frutas = [{nome:"maça",cor:"vermelha"},{nome:"laranja",cor:"laranja"}]; //JSON EM JAVASCRIPT
console.log(frutas);
console.log(frutas[1].nome);

//CONDIÇÕES
var idade = prompt("qual sua a idade?");
if (idade => 18){
    alert("voce é de maior");
}else{
    alert("voce é de menor")
}

*///Laços
/*var i;
for (i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " +7*i);
}*/

//DATAS
/*var d = new Date();
console.log(d.getDay())*/

//FUNÇÕES
/*function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));*/

/*function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));*/
/*var i = 0;
function contador(){
    i++;
    alert(i);
}*/
function agradecimento(){
    document.getElementById("agradecimento").innerHTML = "<b>Pagina da Netflix aqui</b>";
}
function redirecionar(){
    window.open('https://www.netflix.com/br/');
    //window.location.href = "https://www.netflix.com/br/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse aqui";
    elemento.innerHTML = "obrigado por passar o mouse aqui";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}

let line = gets().split(" ");

let A = parseInt(line[0]);
let B = parseInt(line[1]);
let X = A + B

let total = X;

console.log("X = " + total);
