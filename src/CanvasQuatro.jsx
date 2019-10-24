import React from 'react';
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

    heapSort(){
        ctx.clearRect(0, 0, 200, 200);
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
                sift(v, tam, maior);
            }
          
          }
          
          function heapSort(v, tam){
            for(let i = Math.floor(tam/2) ; i >= 0; i--)
                sift(v, tam, i);
          
            for(let i = tam - 1; v[i] >= 0; i--){
                [v[0], v[i]] = [v[i], v[0]];
                sift(v, i, 0);
            }
          
          }
          
          var a = [4, 2, 3, 1, 5]
          heapSort(a, a.length);

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
                <canvas  id = 'canvasQuatro' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
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