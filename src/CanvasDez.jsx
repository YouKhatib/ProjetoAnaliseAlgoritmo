import React from 'react';
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
var a = [];
var b = [];
var x;
export default class CanvasDez extends React.Component{
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
        ctx.fillText("InsertionSort",2,10);

    }

    comeca(){
        intervalo = localStorage.getItem('Intervalo');
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        //refreshIntervalId = setInterval(this.selectionSort,intervalo);

    }

    continua(){
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,intervalo);

    }

    inicializa(){
        comeco = 1;
        aux = 0;
        a = [];
        b = []
        var cntd = localStorage.getItem('Cntd');
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            a.push(x);
            b.push(y)
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

    
    insertionSort() {
        var x, d, t;
        //for (x = 1; x <= a.length-1; x++){
            d = x;
            while (d >0 && a[d] < a[d-1]){
                t = a[d];
                a[d] = a[d-1];
                a[d-1] = t;
                d--;
            }
            console.log(a);
            x++;
        //}
    }
    render(){
        return(
            <div>
                <button id = 'iniciaDez' onClick = {start}>Iniciar</button>
                <button id = 'paraDez' onClick = {para}>Parar</button>
                <button id = 'continuaDez' onClick = {keep}>Continuar</button>
                <canvas  id = 'canvasDez' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>
        )
    }
}

var cd = new CanvasDez();
function start() {
    clearInterval(refreshIntervalId);
    cd.comeca();
    var refreshIntervalId = setInterval(cd.insertionSort,intervalo);
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