import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';

var aux = 0;
var comeco;
var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
var intervalo;
export default class CanvasTres extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        cntd = parseInt(this.state.value);
        event.preventDefault();
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
        ctx.fillText("SelectionSort",2,10);
    }

    comeca(){
        intervalo = localStorage.getItem('Intervalo');
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,intervalo);
    }

    continua(){
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,intervalo);
    }

    inicializa(){
        comeco = 1;
        aux = 0;
        var cntd = localStorage.getItem('Cntd');
        ctx.strokeStyle = "black";
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

    selectionSort(){
        ctx.clearRect(0, 0, 200, 200);
            let menor = aux;

            for(var j = aux + 1; j < ponto.getArrayXTam(); j ++){
                if(ponto.getArrayX(menor) >  ponto.getArrayX(j)){
                    menor = j; 

                }

            }

            if(ponto.getArrayX(aux) !== ponto.getArrayX(menor)){
                let tmpX = ponto.getArrayX(aux);
                ponto.alteraValorX(ponto.getArrayX(menor), aux);
                ponto.alteraValorX(tmpX, menor);
                
            }   
        
            menor = aux;

            for(var j = aux + 1; j < ponto.getArrayYTam(); j ++){ 
                if(ponto.getArrayY(menor) >  ponto.getArrayY(j)){
                    menor = j;
                }
            }

            if(ponto.getArrayY(aux) !== ponto.getArrayY(menor)){
                let tmpX = ponto.getArrayY(aux);
                ponto.alteraValorY(ponto.getArrayY(menor), aux);
                ponto.alteraValorY(tmpX, menor);
                
            }
            aux++;
        
        for(var m = 0; m < ponto.getArrayXTam(); m++){
            ctx.beginPath();
            ctx.strokeStyle = "black";
            if(m == comeco){
                ctx.moveTo(ponto.getArrayX(m),0);
                ctx.lineTo(ponto.getArrayX(m),200);
                ctx.strokeStyle = "black";
                comeco++;
                ctx.stroke();
            } else {
                if(m < comeco){
                    ctx.moveTo(ponto.getArrayX(m), ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m), 200);
                    ctx.strokeStyle = "red";
                    ctx.stroke();
                } else {
                    ctx.moveTo(ponto.getArrayX(m), ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m), 200);
                    ctx.strokeStyle = "black";
                    ctx.stroke();
                }
            }

        }
        
        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }
        
        if(contUm == contDois){
            //ctx.clearRect(0, 0, 200, 200);
            // for(var m = 0; m < ponto.getArrayXTam(); m++){
            //     ctx.beginPath();
            //     ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            //     ctx.lineTo(ponto.getArrayX(m),200);
            //     ctx.strokeStyle = "red";
            //     ctx.stroke();  
            // }
            clearInterval(refreshIntervalId);
        }

    }

    render(){
        return(
            <div>
                <button id = 'iniciaTres' onClick = {start}>Iniciar</button>
                <button id = 'paraTres' onClick = {para}>Parar</button>
                <button id = 'continuaTres' onClick = {keep}>Continuar</button>
                <canvas  id = 'canvasTres' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>
        )
    }
}

var cd = new CanvasTres();
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