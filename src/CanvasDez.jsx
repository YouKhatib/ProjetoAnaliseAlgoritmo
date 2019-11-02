import React from 'react';
import './App.css';
import Ponto from './Pontos.js';


//Declaração de variáveis globais
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
var x = 1;

export default class CanvasDez extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arrayX: [],
            arrayY: []
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) { //Função para input
        this.setState({value: event.target.value});

      }
    
    handleSubmit(event) { //Função para input
        cntd = parseInt(this.state.value); //Transformando o valor entrado pelo usuário para int
        event.preventDefault();

    }

    componentWillMount(){ //Função executada automaticamente pelo react
        this.setState({ //Declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })

    }

    componentDidMount(){//Função executada automaticamente pelo react
        ctx = this.canvasAnim.getContext("2d"); //Declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize; //Declaração do canvas
        this.canvasAnim.width = canvasWidth; //Setando a largura do canvas
        this.canvasAnim.height = canvasHeight; //Setando a altura do canvas

        ctx.font = "10px Arial"; //Fonte do texto
        ctx.fillText("InsertionSort",2,10); //Texto a ser escrito dentro do canvas

    }

    comeca(){ //Função de inicio (chamada pelo botão iniciar)
        intervalo = localStorage.getItem('Intervalo');//Pego o valor salvo no navegador
        ponto.zeraArrays();//Zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia(); //Zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();
        //refreshIntervalId = setInterval(this.selectionSort,intervalo);

    }

    continua(){ //Função chamada pelo botão de continuar(caso haja alguma pausa)
        this.insertionSort();
        refreshIntervalId = setInterval(this.insertionSort,intervalo);

    }

    inicializa(){
        x = 1;
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

    //InsertionSort
    insertionSort() {
        ctx.clearRect(0, 0, 200, 200);
        var d, t, e, u;
            d = x;
            while (d >0 && a[d] < a[d-1]){
                t = a[d];
                a[d] = a[d-1];
                a[d-1] = t;
                d--;
            }
            e = x;
            while (e >0 && b[e] < b[e-1]){
                u = b[e];
                b[e] = b[e-1];
                b[e-1] = u;
                e--;
            }
            x++;
             
            for(var m = 0; m < ponto.getArrayXTam(); m++){//for para animação
                ctx.beginPath();
                ctx.moveTo(a[m],b[m]);
                ctx.lineTo(a[m],200);
                ctx.stroke();  
            }
            var contDois = 0;
        for(var i = 0; i < a.length; i++){//checagem para ver se o vetor está ordenado
            if(a[i] == ponto.getValCopiaX(i) && b[i] == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }

        if(contUm == contDois){//caso o vetor esteja ordenado, pinta ele de vermelho e para de executar a função
            ctx.clearRect(0, 0, 200, 200);
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(a[m],b[m]);
                ctx.lineTo(a[m],200);
                ctx.strokeStyle = "red";
                ctx.stroke();  
            }
            clearInterval(refreshIntervalId);
        }
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

var cd = new CanvasDez(); //Declaração do objeto de tipo Canvas
function start() {//Função de iniciar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    cd.comeca();
    refreshIntervalId = setInterval(cd.insertionSort,intervalo);
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