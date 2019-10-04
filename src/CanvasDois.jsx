import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';
import Canvas from './Canvas.jsx';
import cntd from './Canvas.jsx';

var arrayX = [];
var arrayY = [];
var arrayCopiaX = [];
var arrayCopiaY = [];
var contUm = 0;
var ctx;
var refreshIntervalId;
var flag;
var gapX, gapY;
export default class CanvasDois extends Ponto{
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
        ctx = this.canvasDois.getContext("2d");
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        this.canvasDois.width = canvasWidth;
        this.canvasDois.height = canvasHeight;

        ctx.font = "10px Arial";
        ctx.fillText("CombSort",2,10);
    }

    comeca(){
        arrayX = [];//zerando o vetor caso clique novamente no botão iniciar;
        arrayY = [];//zerando o vetor caso clique novamente no botão iniciar;
        arrayCopiaX = [];//zerando o vetor de cópia caso clique novamente no botão iniciar;
        arrayCopiaY = [];//zerando o vetor de cópia caso clique novamente no botão iniciar;
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);
        this.inicializa();
        this.combSort();
        refreshIntervalId = setInterval(this.combSort,150);
    }
    continua(){
        this.combSort();
        refreshIntervalId = setInterval(this.combSort,150);
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
        
        gapX = arrayX.length; 
        gapY = arrayY.length; 
    }
    combSort(){ 
            ctx.clearRect(0, 0, 200, 200); 
            if(gapX <= 1){
                gapX = 1;
            }
            if(gapY <= 1){
                gapY = 1;
            }
            for (let i=0; i < arrayX.length-gapX; i++){ 
                if (arrayX[i] > arrayX[i+gapX]){ 
                    let temp = arrayX[i];
                    arrayX[i] = arrayX[i+gapX];
                    arrayX[i+gapX] = temp; 
                } 
                if (arrayY[i] > arrayY[i+gapY]){ 
                    let temp = arrayY[i];
                    arrayY[i] = arrayY[i+gapY];
                    arrayY[i+gapY] = temp;  
                } 
            }
            gapX = gapX/1.3; 
            gapY = gapY/1.3;
            for(let m = 0; m < arrayX.length; m++){
                console.log("a")
                ctx.beginPath();
                ctx.moveTo(arrayX[m],arrayY[m]);
                ctx.lineTo(arrayX[m],200);
                ctx.stroke();  
            }
            var contDois = 0;
            for(let i = 0; i < arrayCopiaX.length; i++){
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
                <button id='buttonIniciaDois' onClick={start}>Iniciar</button>
                <button id='buttonParaDois' onClick={para} >Parar</button>
                <button id='buttonContDois' onClick={keep}>Continuar</button>
                <canvas id='CanvasDois' ref={ canvasDois => this.canvasDois = canvasDois}> </canvas>
            </div>
        )
    }
}
var cd = new CanvasDois();
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