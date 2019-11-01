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
var s = [];
var metXUm;
var metXDois;
var metYUm;
var metYDois;
var intervalo;
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
        //this.heapSort();
        //refreshIntervalId = setInterval(this.heapSort,150);
    }

    continua(){
        this.heapSort();
        refreshIntervalId = setInterval(this.heapSort,150);
    }

    inicializa(){
        var cntd = localStorage.getItem('Cntd');
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            v.push(x);
            s.push(y)
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.stroke();

        }
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();

    }

    ordena(){
        for(let i = Math.floor(v.length/2) - 1; i >= 0; i--)
        sift(v, v.length, i);

        for(let i = Math.floor(s.length/2) - 1; i >= 0; i--)
        sift(s, s.length, i);
    }

    heapSort(){
        ctx.clearRect(0, 0, 200, 200);
        // sift(v, v.length, metXUm);
        // metXUm--;
      
        [v[0], v[metXDois]] = [v[metXDois], v[0]];
        sift(v, metXDois, 0);
        metXDois--;
        
        // sift(s, s.length, metYUm);
        // metYUm--;

        [s[0], s[metYDois]] = [s[metYDois], s[0]];
        sift(s, metYDois, 0);
        metYDois--;
        

        for(var m = 0; m < ponto.getArrayXTam(); m++){ //for para a animação
            ctx.beginPath();
            ctx.moveTo(v[m],s[m]);
            ctx.lineTo(v[m],200);
            ctx.strokeStyle = "black";
            ctx.stroke();  
        }

        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(v[i] == ponto.getValCopiaX(i) && s[i] == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }

        if(contUm == contDois){//caso ordenado, para de chamar a função
            ctx.clearRect(0, 0, 200, 200);
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(v[m],s[m]);
                ctx.lineTo(v[m],200);
                ctx.strokeStyle = "red";
                ctx.stroke();  
            }
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

//Fazer um sift p/x e p/y - Hipótese
//Tranformar as variaveis em variaveis globais - Hipótese
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



var cd = new canvasQuatro();
function start() {
    clearInterval(refreshIntervalId);
    v = [];
    s = [];
    cd.comeca();
    flag = true;
    //cd.heapSort();
    // console.log(v);
    // console.log(s);
    metXUm = Math.floor(v.length/2) - 2;
    metXDois = Math.floor(v.length - 1);
    metYDois = Math.floor(s.length/2) - 2;
    metYDois = Math.floor(v.length - 1);
    cd.ordena();
    refreshIntervalId = setInterval(cd.heapSort,intervalo);

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

