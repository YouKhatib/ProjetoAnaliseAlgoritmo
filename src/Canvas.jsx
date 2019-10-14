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
var final;
export default class Canvas extends React.Component{
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
        localStorage.clear();
        localStorage.setItem('Cntd', cntd);
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
        ctx.fillText("BubbleSort",2,10);
    }

    comeca(){
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
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
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
        final = ponto.getArrayXTam() - 1;
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();
    }

    bubbleSort(){
        ctx.clearRect(0, 0, 200, 200);
        for (let j = 0; j < ponto.getArrayXTam(); j++) {
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
        for(var m = 0; m < ponto.getArrayXTam(); m++){
            ctx.beginPath();
            if(m == final){
                ctx.moveTo(ponto.getArrayX(m), 0);
                ctx.lineTo(ponto.getArrayX(m), 200);
                ctx.strokeStyle = "red";
                final--;
                ctx.stroke();
            }
            else{
                if(m > final){
                    ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m),200);
                    ctx.strokeStyle = "red";
                    ctx.stroke();  
                }else{
                    ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                    ctx.lineTo(ponto.getArrayX(m),200);
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
        if(contUm == contDois && final == -1){
            console.log("parou");
           clearInterval(refreshIntervalId);
        }
    }

    render(){
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