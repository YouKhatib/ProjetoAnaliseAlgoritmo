import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var ds;
var final;
var digito = 0;
var intervalo;
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
        ctx.fillText("RadixSort",2,10);
    }

    comeca(){
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);
        this.inicializa();
        refreshIntervalId = setInterval(this.radixSort,intervalo);
    }
    continua(){
        refreshIntervalId = setInterval(this.radixSort,intervalo);
    }
    inicializa(){
        intervalo = localStorage.getItem('Intervalo');
        var cntd = localStorage.getItem('Cntd');
        digito = 0;
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
    
    // radixSort
    radixSort(){
        ctx.clearRect(0, 0, 200, 200);
        var contX = [];
        var contY = [];
        var copiaX = ponto.getArrayTodaX();
        var copiaY = ponto.getArrayTodaY();
        for(var i = 0; i < 10; i++){
            contX.push(0)
            contY.push(0)
        }
        for(var j = 0; j < ponto.getArrayXTam(); j++){
            var i = ponto.getArrayX(j);
            var b = ponto.getArrayY(j);
            var idx = Math.floor((i/Math.pow(10,digito))%10);
            var idy = Math.floor((b/Math.pow(10,digito))%10);
            contX[idx]++;
            contY[idy]++;
        }
        for(var i = 1; i < contX.length; i++){
            contX[i] = contX[i] + contX[i-1];
        }
        for(var i = 1; i < contY.length; i++){
            contY[i] = contY[i] + contY[i-1];
        }
        var arrayNX = [];
        var arrayNY = [];
        for(var i = copiaX.length - 1; i>=0; i--){
          var idx = Math.floor((copiaX[i]/Math.pow(10,digito))%10);
          arrayNX[contX[idx]-1] = copiaX[i];
          contX[idx]--;
        }
        for(var i = copiaY.length - 1; i>=0; i--){
            var idx = Math.floor((copiaY[i]/Math.pow(10,digito))%10);
            arrayNY[contY[idx]-1] = copiaY[i];
            contY[idx]--;
        }
        ponto.alteraArrayTodaX(arrayNX);
        ponto.alteraArrayTodaY(arrayNY);

        for(var m = 0; m < ponto.getArrayXTam(); m++){
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
            ctx.stroke();  
        }
        console.log(ponto.getArrayTodaY());
        digito++;

        //console.log(5);

        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }
        if(contUm == contDois){
            ctx.clearRect(0, 0, 200, 200);
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                ctx.lineTo(ponto.getArrayX(m),200);
                ctx.strokeStyle = "red";
                ctx.stroke();  
            }
            clearInterval(refreshIntervalId);
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