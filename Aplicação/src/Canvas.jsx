import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';

var arrayX = [];
var arrayY = [];
var arrayCopiaX = [];
var arrayCopiaY = [];
var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
export default class Canvas extends Ponto{
    constructor(props){
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
        }
    }
    componentWillMount(){
        this.setState({
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })
    }


    componentDidMount(){
        ctx = this.canvasAnim.getContext("2d");
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        this.canvasAnim.width = canvasWidth;
        this.canvasAnim.height = canvasHeight;

        ctx.font = "10px Arial";
        ctx.fillText("BubbleSort",2,10);
    }

    comeca(){
        arrayX = [];//zerando o vetor caso clique novamente no botão iniciar;
        arrayY = [];//zerando o vetor caso clique novamente no botão iniciar;
        arrayCopiaX = [];//zerando o vetor de cópia caso clique novamente no botão iniciar;
        arrayCopiaY = [];//zerando o vetor de cópia caso clique novamente no botão iniciar;
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        this.bubbleSort();
        refreshIntervalId = setInterval(this.bubbleSort,150);
    }

    continua(){
        this.bubbleSort();
        refreshIntervalId = setInterval(this.bubbleSort,150);
    }

    inicializa(){
        for(var j = 0; j < 50; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            arrayX.push(x);
            arrayY.push(y);
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
        for(var i = 0; i < arrayX.length; i++){
            arrayCopiaX.push(arrayX[i]);
            arrayCopiaY.push(arrayY[i]);
            contUm++;
        }
        arrayCopiaX.sort(function(a, b){return a-b});//ordenando e transformando em int para realizar a checagem
        arrayCopiaY.sort(function(a, b){return a-b});//ordenando e transformando em int para realizar a checagem
    }

    bubbleSort(){
        ctx.clearRect(0, 0, 200, 200);
        for (let j = 0; j < arrayX.length; j++) {
            if (arrayX[j] > arrayX[j + 1]) {
                let tmpX = arrayX[j];
                arrayX[j] = arrayX[j + 1];
                arrayX[j + 1] = tmpX; 
            }
            if (arrayY[j] > arrayY[j + 1]) {
                let tmpY = arrayY[j];
                arrayY[j] = arrayY[j + 1];
                arrayY[j + 1] = tmpY; 
            }
        }
        for(var m = 0; m < arrayX.length; m++){
            ctx.beginPath();
            ctx.moveTo(arrayX[m],arrayY[m]);
            ctx.lineTo(arrayX[m],200);
            ctx.stroke();  
        }
        var contDois = 0;
        for(var i = 0; i < arrayCopiaX.length; i++){
            if(arrayX[i] == arrayCopiaX[i] && arrayY[i] == arrayCopiaY[i]){
                contDois++;
            }
        }
        if(contUm == contDois){
            clearInterval(refreshIntervalId);
        }
    }

    render(){
        return(
            <div>
                <button id='buttonInicia' onClick = {start}>Iniciar</button>
                <button id='buttonPara' onClick = {para}>Parar</button>
                <button id='buttonCont' onClick = {keep}>Continuar</button>
                <canvas id='Canvas' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>
        )
    }
}
var cd = new Canvas();
function start() {
    clearInterval(refreshIntervalId);
    cd.comeca();
    flag = true;
}
function para() {
    clearInterval(refreshIntervalId);
    flag = false;
}
function keep(){
    if(flag == false){
       cd.continua();
       flag = true;
    }
}

