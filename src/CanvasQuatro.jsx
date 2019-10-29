import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
var indice = 0;
var v = [];
export default class canvasQuatro extends React.Component{
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
        ctx.fillText("HeapSort",2,10);
    }

    comeca(){
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        this.heapSort();
        refreshIntervalId = setInterval(this.heapSort,150);
    }

    continua(){
        this.heapSort();
        refreshIntervalId = setInterval(this.heapSort,150);
    }

    inicializa(){
        var cntd = localStorage.getItem('Cntd');
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            v.push(x);
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.stroke();

        }
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();

    }

    heapSort(){
        ctx.clearRect(0, 0, 200, 200);            
        for(let i = Math.floor(ponto.getArrayXTam()/2) ; i >= 0; i--)
            sift(ponto.getArrayX(), ponto.getArrayXTam(), i);
        
        for(let i = ponto.getArrayXTam() - 1; ponto.getArrayX(i) >= 0; i--){
            ponto.alteraValorX(ponto.getArrayX(0), i)
            sift(ponto.getArrayX(), i, 0);
        }
        
        for(let i = Math.floor(ponto.getArrayYTam()/2) ; i >= 0; i--)
            sift(ponto.getArrayY(), ponto.getArrayYTam(), i);
    
        for(let i = ponto.getArrayYTam() - 1; ponto.getArrayY(i) >= 0; i--){
            ponto.alteraValorY(ponto.getArrayY(0), i)
            sift(ponto.getArrayY(), i, 0);

        }
        console.log(v);

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
                <button id = 'iniciaQuatro' onClick = {start}>Iniciar</button>
                <button id = 'paraQuatro' onClick = {para}>Parar</button>
                <button id = 'continuaQuatro' onClick = {keep}>Continuar</button>
                <canvas id = 'canvasQuatro' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>
        )
    }
}

function sift(v, tam, i){
    var maior = i;
    var esq = 2*i + 1;
    var dir = 2*i + 2;
  
    if(esq < tam && v[esq] > v[maior]){
        maior = esq;
    }
    
    if(dir < tam && v[dir] > v[maior]){
        maior = dir;
    }
  
    if(maior != i){
        [v[i], v[maior]] = [v[maior], v[i]];
        this.sift(v, tam, maior);
    }
  
  }

var cd = new canvasQuatro();
function start() {
    clearInterval(refreshIntervalId);
    cd.comeca();
    flag = true;
    console.log(v)
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

