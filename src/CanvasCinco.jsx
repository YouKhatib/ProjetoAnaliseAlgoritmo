import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;


// var xI = 0;
// var yI = 0;
// var x = 0;
// var po = 0;
export default class CanvasCinco extends Ponto{
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
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);
        this.inicializa();
        this.countingSort();
        //refreshIntervalId = setInterval(this.animacao(),150);
    }
    continua(){
        //this.countingSort();
        refreshIntervalId = setInterval(this.animacao(),150);
    }
    inicializa(){
        var cntd = localStorage.getItem('Cntd');
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.stroke();
        }
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();
    }
    countingSort (){
        ctx.clearRect(0, 0, 200, 200);
        var tamanhoX = ponto.getArrayXTam();
        var tamanhoY = ponto.getArrayXTam();
        var maiorX = 0;
        var maiorY = 0;
        var countX = [];
        var countY = [];
        var j = 0;
        var x = 0;
        for(var i = 0; i < tamanhoX; i++){
            if(ponto.getArrayX(i) > maiorX)
                maiorX = ponto.getArrayX(i);
        }
        for(var i = 0; i < tamanhoY; i++){
            if(ponto.getArrayY(i) > maiorY)
                maiorY = ponto.getArrayY(i);
        }
        for (var i = 0; i <= maiorX; i++) {
            countX[i] = 0;
        }
        for (var i = 0; i <= maiorY; i++) {
            countY[i] = 0;
        }
        for (var i = 0; i < tamanhoX; i++) {
            countX[ponto.getArrayX(i)] += 1;
            countY[ponto.getArrayY(i)] += 1;
        }
         for (var i = 0; i <= maiorX; i++) {
            while (countX[i] > 0) {
                ponto.alteraValorX(i, j);
                j++;
                countX[i]--;        
            }
        }
        for (var i = 0; i <= maiorY; i++) {
            while (countY[i] > 0) {
                ponto.alteraValorY(i, x);
                x++;
                countY[i]--;
            }              
        }
        for(var m = 0; m < ponto.getArrayXTam(); m++){
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
            ctx.stroke();  
        }          
    }
    render(){
        return(
            <div>
                <button id='iniciaCinco' onClick={start}>Iniciar</button>
                <button id='paraCinco' onClick={para} >Parar</button>
                <button id='continuaCinco' onClick={keep}>Continuar</button>
                <canvas id='canvasCinco' ref={ canvasDois => this.canvasDois = canvasDois}> </canvas>
            </div>
        )
    }
}
var cd = new CanvasCinco();
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