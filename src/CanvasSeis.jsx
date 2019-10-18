import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var final;
var ds;
var arrAuxXum = [];
var arrAuxXdois = [];
var maxX = 0;
var maxY;
export default class CanvasSeis extends Ponto{
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
        ctx = this.canvasSeis.getContext("2d");
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        this.canvasSeis.width = canvasWidth;
        this.canvasSeis.height = canvasHeight;

        ctx.font = "10px Arial";
        ctx.fillText("CountingSort",2,10);
    }

    comeca(){
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);
        this.inicializa();
        this.radixSort();
        //refreshIntervalId = setInterval(this.animacao,5);
    }
    continua(){
        refreshIntervalId = setInterval(this.countingSort(),1000);
    }
    inicializa(){
        var cntd = localStorage.getItem('Cntd');
        ds = 200;
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        final = ponto.getArrayXTam() - 1;
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();
    }


    getPosition(num, place){
        return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
    }

    getDigit(num,nth){
        var ret = 0;
        while(nth--){
            ret = num % 10
            num = Math.floor((num - ret) / 10)
        }
        return ret
    }
    
    // radixSort
    radixSort(){
       
    }

    animacao(){
        if(ds <= 0){
            ctx.clearRect(0, 0, 200, 200);
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                ctx.lineTo(ponto.getArrayX(m),200);
                ctx.stroke();
                //clearInterval(refreshIntervalId);  
            }
        }else{
            ctx.beginPath();
            ctx.moveTo(ds,0);
            ctx.lineTo(ds,200);
            ctx.strokeStyle = "red";
            ctx.stroke();  
            ds--;
        }
    }

    render(){
        return(
            <div>
                <button id = 'iniciaSeis' onClick={start}>Iniciar</button>
                <button id = 'paraSeis' onClick={para} >Parar</button>
                <button id = 'continuaSeis' onClick={keep}>Continuar</button>
                <canvas id='canvasSeis' ref={ canvasSeis => this.canvasSeis = canvasSeis}> </canvas>
            </div>
        )
    }
}
var cd = new CanvasSeis();
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