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
export default class CanvasTres extends React.Component{
    constructor(props){//Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {//Função para input
        this.setState({value: event.target.value});

      }
    
    handleSubmit(event) {//Função para input
        cntd = parseInt(this.state.value); //Transformando o valor entrado pelo usuário para int
        event.preventDefault();

    }

    componentWillMount(){//Função executada automaticamente pelo react
        this.setState({//Declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })

    }

    componentDidMount(){//Função executada automaticamente pelo react
        ctx = this.canvasAnim.getContext("2d");//Declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//Declaração do canvas
        this.canvasAnim.width = canvasWidth;//Setando a largura do canvas
        this.canvasAnim.height = canvasHeight;//Setando a altura do canvas

        ctx.font = "10px Arial";//Fonte do texto
        ctx.fillText("SelectionSort",138,10);//Texto a ser escrito dentro do canvas

    }

    comeca(){//Função de inicio (chamada pelo botão iniciar)
        intervalo = localStorage.getItem('Intervalo');//Pego o valor salvo no navegador
        ponto.zeraArrays();//Zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//Zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//Zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//Realizando a limpeza do canvas;
        this.inicializa();//Função de inicializar os elementos
        this.selectionSort();//Chamando o SelectionSort
        refreshIntervalId = setInterval(this.selectionSort,intervalo);//Chamo o bubblesort indefinidamente com um intervalo pre-setado

    }

    continua(){//Função chamada pelo botão de continuar(caso haja alguma pausa)
        this.selectionSort();
        refreshIntervalId = setInterval(this.selectionSort,intervalo);

    }

    inicializa(){//Função que inicializa os elementos
        comeco = 1;
        aux = 0;
        var cntd = localStorage.getItem('Cntd');
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);//Passando o valor para o arrayX
            ponto.setArrayY(y);//Passando o valor para o arrayY
            ctx.beginPath();//Começando o desenho no canvas
            ctx.moveTo(x,y);//Inicio da linha no canvas
            ctx.lineTo(x,200);//Final da linha no canvas
            ctx.stroke();//Finalizando o desenho no canvas

        }
        ponto.setArrayCopiaOrdenado();//Ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//Obtendo o tamanho do contador um

    }

    //SelectionSort
    selectionSort(){//Implementação do SelectionSort
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
        comeco++;
        
        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 

            }

        }
        
        if(contUm == contDois){//Caso ordenado, para de chamar a função
            clearInterval(refreshIntervalId);
        }
        ctx.font = "10px Arial";
        ctx.fillText("SelectionSort",138,10); 

    }

    render(){//Função render do React, obtendo o que será renderizado na tela pelo classe.
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

var cd = new CanvasTres();//Declaração do objeto de tipo Canvas
function start() {//Função de iniciar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    cd.comeca();
    flag = true;

}
function para() {//Função de parar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    flag = false;

}
function keep(){//Função de continuar(chamada pelo botão)
    if(flag == false){
       cd.continua();
       flag = true;

    }
    
}