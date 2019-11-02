import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

//Declaração de variáveis globais
var ctx;
var contUm = 0;
var flag = true;
var intervalo;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
var final; 
export default class Canvas extends React.Component{
    constructor(props){ //Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
            
        }
        this.handleChange = this.handleChange.bind(this);//Funções provenientes do input do usuário
        this.handleSubmit = this.handleSubmit.bind(this);//
    }
    handleChange(event) { //função para input
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {//função para input
        cntd = parseInt(this.state.value); //transformando o valor entrado pelo usuário para int
        localStorage.removeItem('Cntd'); //removendo qualquer valor previamente salvo
        localStorage.setItem('Cntd', cntd); //salvando o valor entrado pelo usuário para utilização em diferentes classes
        event.preventDefault();
      }
    

    componentWillMount(){ //função executada automaticamente pelo react
        this.setState({ //declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })
    }

    componentDidMount(){ //função executada automaticamente pelo react
        ctx = this.canvasAnim.getContext("2d"); //declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize; //declaração do canvas
        this.canvasAnim.width = canvasWidth; //setando a largura do canvas
        this.canvasAnim.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial"; //fonte do texto
        ctx.fillText("BubbleSort",148,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        intervalo = localStorage.getItem('Intervalo'); //pego o valor salvo no navegador
        ponto.zeraArrays(); //zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa(); //função de inicializar os elementos
        this.bubbleSort();//chamo o bubblesort
        refreshIntervalId = setInterval(this.bubbleSort,intervalo);//chamo o bubblesort indefinidamente com um intervalo pre-setado
    }

    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        this.bubbleSort();
        refreshIntervalId = setInterval(this.bubbleSort,intervalo);
    }

    inicializa(){//função que inicializa os elementos
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x); //passando o valor para o arrayX
            ponto.setArrayY(y);//passando o valor para o arrayY
            ctx.beginPath();//começando o desenho no canvas
            ctx.moveTo(x,y);//inicio da linha no canvas
            ctx.lineTo(x,200);//final da linha no canvas
            ctx.stroke();//finalizando o desenho no canvas
        }
        final = ponto.getArrayXTam() - 1; //obtendo o valor da variavel final, utilizando para finalização da animação
        ponto.setArrayCopiaOrdenado(); //ordenando a array auxiliar
        contUm = ponto.getArrayXTam(); //obtendo o tamanho do contador um
    }

    bubbleSort(){
        ctx.clearRect(0, 0, 200, 200);//limpando o canvas
        for (let j = 0; j < ponto.getArrayXTam(); j++) { //aplicando o bubbleSort para a arrayX e arrayY
            if (ponto.getArrayX(j) > ponto.getArrayX(j+1)) {
                let tmpX = ponto.getArrayX(j);
                ponto.alteraValorX(ponto.getArrayX(j+1), j);
                ponto.alteraValorX(tmpX, j+1); 
            }
            if (ponto.getArrayY(j) > ponto.getArrayY(j+1)) {
                let tmpY = ponto.getArrayY(j);
                ponto.alteraValorY(ponto.getArrayY(j+1), j);
                ponto.alteraValorY(tmpY, j+1);
            }
        }
        for(var m = 0; m < ponto.getArrayXTam(); m++){//for de alteração das imagens no canvas
            ctx.beginPath();
            if(m == final){//caso o valor de m seja igual ao final, a linha será mostrada em vermelho, para melhor observação
                ctx.moveTo(ponto.getArrayX(m), 0);
                ctx.lineTo(ponto.getArrayX(m), 200);
                ctx.strokeStyle = "red";
                final--;
                ctx.stroke();
            }
            else{
                if(m > final){//imprime o que ja foi ordenado em vermelho
                    ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m),200);
                    ctx.strokeStyle = "red";
                    ctx.stroke();  
                }else{//o que ainda não foi é impresso em preto
                    ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m),200);
                    ctx.strokeStyle = "black";
                    ctx.stroke();  
                }
            }
        }
        ctx.font = "10px Arial"; 
        ctx.fillText("BubbleSort",148,10);

        var contDois = 0;//zero o contador dois para cada loop começar de 0
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){//for que checa se as arrays ja estão ordenadas
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }
        if(contUm == contDois && final == -1){//caso elas estejam ordenadas, o programa para.
           clearInterval(refreshIntervalId);
        }
    }

    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <form id='input' onSubmit={this.handleSubmit}> 
                <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <button id='buttonInicia' onClick = {start}>Iniciar</button>
                <button id='buttonPara' onClick = {para}>Parar</button>
                <button id='buttonCont' onClick = {keep}>Continuar</button>
                <canvas id='Canvas' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>
        )
    }
}

var cd = new Canvas();//declaração do objeto de tipo Canvas
function start() {//função de iniciar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    cd.comeca();
    flag = true;
}
function para() {//função de parar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    flag = false;
}
function keep(){//função de continuar(chamada pelo botão)
    if(flag == false){
       cd.continua();
       flag = true;
    }
}