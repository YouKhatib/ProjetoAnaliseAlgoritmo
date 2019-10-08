import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';
import Canvas from './Canvas.jsx';
import cntd from './Canvas.jsx';

var arrayX = [];
var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var gap;
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
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
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
        
        gap = ponto.getArrayXTam(); 
    }
    combSort(){ 
            ctx.clearRect(0, 0, 200, 200); 
            if(gap <= 1){
                gap = 1;
            }
            for (let i=0; i < ponto.getArrayXTam() - gap; i++){ 
                if (ponto.getArrayX(i)> ponto.getArrayX(gap + i)){ 
                    let temp =ponto.getArrayX(i);
                    ponto.alteraValorX(ponto.getArrayX(gap + i), i);
                    ponto.alteraValorX(temp, gap + i)
                } 
                if (ponto.getArrayY(i) > ponto.getArrayY(gap + i)){ 
                    let temp =ponto.getArrayY(i);
                    ponto.alteraValorY(ponto.getArrayY(gap + i), i); //arrayX[i] = arrayX[i+gapX];
                    ponto.alteraValorY(temp, gap + i) //arrayX[i+gapX] = temp;   
                } 
            }
            gap = Math.floor(gap/1.3); 
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                ctx.lineTo(ponto.getArrayX(m),200);
                ctx.stroke();  
            }
            var contDois = 0;
            for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
                if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
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