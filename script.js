
//Guardando as duas saidas responsáveis por exibir os calculos
const output = document.getElementById("output");
const output2 = document.getElementById("output2");

let arr = [];
let store = 0;
let sinal;
let result = 0;
let aux = []
let isShown = false;

output.innerHTML = store;

//função pra guardar o numero  
function getNumber(x){
    aux.push(x);                        //Uso esse array pra poder deletar o ultimo numero digitado 
    store = Number(aux.join(''));       //Concatena os numeros no array e transforma em um unico numero 
    output.innerHTML = store;           //Mostra um numero no div#output
}
 
//Função que armazena o sinal após a inserção de um número
function operation (operator) { 
    aux = [];

    //condicional que verifica se um número e um sinal ja foram inseridos no array 
    if(arr.length >= 2){
        if(store === 0) {
            console.log(`store: ${store}`);
            return
        }
        result = calcula(result, sinal, store)    
        output.innerHTML = result
    
        arr.push(store);
        arr.push(operator);
        copy(operator);       
        return    
    }

    //Condição em que o botão de "=" é clicado, pequena gambiarra 
    if(isShown){
       arr.push(result, operator);
       copy(operator)
       isShown = false;
       return
    }

    //as próximas 4 linhas de código só serão executadas quando o primeiro número e o primeiro sinal forem inseridos
    arr.push(store); 
    arr.push(operator);
    result = store; 
    copy(operator);       
}

//Função que copia alguns valores para a próxima inserção de número ou sinal
function copy(operator) {  
    sinal = operator;
    store = 0;
    output2.innerHTML = arr.join('');               //Mostra o array todo em modo string
}

//Função que reinicia os valores. Acontece quando o botao C for clicado
function restart() {
    store = 0;
    result = 0;
    isShown = false;
    arr = [];
    aux = [];
    output.innerHTML = store;
    output2.innerHTML = '';
}

/*
  Função que calcula operações passando:
  1° parametro: valor1                          (passei a variavel result por parametro)
  2° parametro: sinal + - * / ()                (passei a variavel sinal por parametro)
  3° parametro: valor2                          (passei a variável store por parametro)

  O retorno da função é o resultado da operacao
 */
function calcula(a, s, b) {
    if (s === '+'){
        return  a + b; 
    }else if(s === '-'){
        return  a - b;
    }else if(s === '*'){
        return  a * b;
    }else if(s === '/'){
        return  a / b;
    }else{
        return;
    }
}

//Função executada ao clicar no botão "="
function showResult () {
    //condição que verifica se apenas um número e um sinal foram inseridos
    if(arr.length < 2){
        return;
    }

    result = calcula(result, sinal, store)      //armazena o resultado em result

    output.innerHTML = result;                  //exibe o resultado na div#output
    output2.innerHTML = '';                     //Apaga o array escrito na di#output2
    arr = [];                                   //reinicia o array, deixando ele vazio
    isShown = true                          
};

//Funçao que apaga um número do arr aux quando o botao "x" é clicado 
function erase () {
    if(aux.length === 0){
        return
    }
    aux.pop();
    store = Number(aux.join(''));    
    output.innerHTML = store;
}