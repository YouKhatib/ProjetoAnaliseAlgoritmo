import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var intervalo;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var gap;//Declaração de variáveis globais
export default class CanvasDois extends Ponto{
    constructor(props){//Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
        }
        this.handleChange = this.handleChange.bind(this);//Funções provenientes do input do usuário
        this.handleSubmit = this.handleSubmit.bind(this);//
    }
    handleChange(event) {//função para input
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {//função para input
        intervalo = parseInt(this.state.value);//transformando o valor entrado pelo usuário para int
        localStorage.removeItem('Intervalo');//removendo qualquer valor previamente salvo
        localStorage.setItem('Intervalo', intervalo);//salvando o valor entrado pelo usuário para utilização em diferentes classes
        event.preventDefault();
      }
    componentWillMount(){//função executada automaticamente pelo react
        this.setState({//declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })
    }
    componentDidMount(){//função executada automaticamente pelo react
        ctx = this.canvasDois.getContext("2d");//declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasDois.width = canvasWidth;//setando a largura do canvas
        this.canvasDois.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial";//fonte do texto
        ctx.fillText("CombSort",2,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        intervalo = localStorage.getItem('Intervalo'); //pego o valor salvo no navegador
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        this.combSort();//chamo o combSort
        refreshIntervalId = setInterval(this.combSort,intervalo);//chamo o combSort indefinidamente com um intervalo pre-setado
    }
    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        this.combSort();
        refreshIntervalId = setInterval(this.combSort,intervalo);
    }
    inicializa(){//função que inicializa os elementos
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x);//passando o valor para o arrayX
            ponto.setArrayY(y);//passando o valor para o arrayY
            ctx.beginPath();//começando o desenho no canvas
            ctx.moveTo(x,y);//inicio da linha no canvas
            ctx.lineTo(x,200);//final da linha no canvas
            ctx.stroke();//finalizando o desenho no canvas
        }
        ponto.setArrayCopiaOrdenado();//ordenando a array auxiliar
        contUm = ponto.getArrayXTam(); //obtendo o tamanho do contador um
        
        gap = ponto.getArrayXTam(); //setando o valor inicial de gap(utilizado no combSort)
    }
    combSort(){ 
        ctx.clearRect(0, 0, 200, 200); //limpando o canvas
        if(gap <= 1){//caso o gap seja menor que um, seto com um
            gap = 1;
        }
        for (let i=0; i < ponto.getArrayXTam() - gap; i++){ //Implementação do CombSort
            if (ponto.getArrayX(i)> ponto.getArrayX(gap + i)){ 
                let temp =ponto.getArrayX(i);
                ponto.alteraValorX(ponto.getArrayX(gap + i), i);
                ponto.alteraValorX(temp, gap + i)
            } 
            if (ponto.getArrayY(i) > ponto.getArrayY(gap + i)){ 
                let temp =ponto.getArrayY(i);
                ponto.alteraValorY(ponto.getArrayY(gap + i), i);
                ponto.alteraValorY(temp, gap + i)  
            } 
        }
        gap = Math.floor(gap/1.3); //calculo do novo gap
        for(var m = 0; m < ponto.getArrayXTam(); m++){//for para animação
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
            ctx.stroke();  
        }
        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){//checagem para ver se o vetor está ordenado
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 
            }
        }
        if(contUm == contDois){//caso o vetor esteja ordenado, pinta ele de vermelho e para de executar a função
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
    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <form id='inputInt' onSubmit={this.handleSubmit}>
                <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <button id='buttonIniciaDois' onClick={start}>Iniciar</button>
                <button id='buttonParaDois' onClick={para} >Parar</button>
                <button id='buttonContDois' onClick={keep}>Continuar</button>
                <canvas id='CanvasDois' ref={ canvasDois => this.canvasDois = canvasDois}> </canvas>
            </div>
        )
    }
}
var cd = new CanvasDois();//declaração do objeto de tipo Canvas
function start() {//função de iniciar(chamada pelo botão)
     clearInterval(refreshIntervalId);
     cd.comeca();
     flag = true;
}
function para() {//função de parar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    flag = false;
}
function keep(){//função de continuar(chamada pelo botão)
    if(flag == false){
        cd.continua();
        flag = true;
    }
}