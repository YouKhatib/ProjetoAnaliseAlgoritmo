import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ponto from './Pontos.js';

var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
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
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,150);
    }

    continua(){
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,150);
    }

    inicializa(){
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();
    }

    selectionSort(){
        ctx.clearRect(0, 0, 200, 200);
        for (var i = 0; i < ponto.getArrayXTam(); i++){
            let menor = i;

            for(var j = i + 1; j < ponto.getArrayXTam; j ++){
                if(ponto.getArrayX(menor) >  ponto.getArrayX(j)){
                    ponto.alteraValorX(ponto.getArrayX(menor), j);
                }
            }

            if(ponto.getArrayX(i) !== ponto.getArrayX(menor)){
                let tmpX = ponto.getArrayX(i);
                ponto.alteraValorX(ponto.getArrayX(menor), i);
                ponto.alteraValorX(tmpX, menor);

                console.log("Passou");
                
            }   

        }

        for (var i = 0; i < ponto.getArrayYTam(); i++){
            let menor = i;

            for(var j = i + 1; j < ponto.getArrayYTam(); j ++){ 
                if(ponto.getArrayY(menor) >  ponto.getArrayY(j)){
                    ponto.alteraValorY(ponto.getArrayY(menor), j);
                }
            }

            if(ponto.getArrayY(i) !== ponto.getArrayY(menor)){
                let tmpX = ponto.getArrayY(i);
                ponto.alteraValorY(ponto.getArrayY(menor), i);
                ponto.alteraValorY(tmpX, menor);
                
            }

        }

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