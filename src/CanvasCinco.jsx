import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var ds;//Declaração de variáveis globais
export default class CanvasCinco extends Ponto{
    constructor(props){//Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
        }
    }
    componentWillMount(){//função executada automaticamente pelo react
        this.setState({//declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })
    }
    componentDidMount(){//função executada automaticamente pelo react
        ctx = this.canvasCinco.getContext("2d");//declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasCinco.width = canvasWidth;//setando a largura do canvas
        this.canvasCinco.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial";//fonte do texto
        ctx.fillText("CountingSort",2,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        this.countingSort();//chamo o countingSort
        refreshIntervalId = setInterval(this.animacao,5);//chamo a função de animacao indefinidamente com um intervalo pre-setado
    }
    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.animacao,5);
    }
    inicializa(){//função que inicializa os elementos
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        ds = 200; //declaração do valor utilizado para a animação do countingSort
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x);//passando o valor para o arrayX
            ponto.setArrayY(y);//passando o valor para o arrayY
            ctx.beginPath();//começando o desenho no canvas
            ctx.moveTo(x,y);//inicio da linha no canvas
            ctx.lineTo(x,200);//final da linha no canvas
            ctx.strokeStyle = "black";//cor das linhas
            ctx.stroke();//finalizando o desenho no canvas
        }
        ponto.setArrayCopiaOrdenado();//ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//obtendo o tamanho do contador um
    }
    countingSort (){//Implementação do CountingSort
        var tamanhoX = ponto.getArrayXTam();
        var tamanhoY = ponto.getArrayXTam();
        var maiorX = 0;
        var maiorY = 0;
        var countX = [];
        var countY = [];
        var j = 0;
        var x = 0;
        for(var i = 0; i < tamanhoX; i++){
            if(ponto.getArrayX(i) > maiorX)
                maiorX = ponto.getArrayX(i);
        }
        for(var i = 0; i < tamanhoY; i++){
            if(ponto.getArrayY(i) > maiorY)
                maiorY = ponto.getArrayY(i);
        }
        for (var i = 0; i <= maiorX; i++) {
            countX[i] = 0;
        }
        for (var i = 0; i <= maiorY; i++) {
            countY[i] = 0;
        }
        for (var i = 0; i < tamanhoX; i++) {
            countX[ponto.getArrayX(i)] += 1;
            countY[ponto.getArrayY(i)] += 1;
        }
         for (var i = 0; i <= maiorX; i++) {
            while (countX[i] > 0) {
                ponto.alteraValorX(i, j);
                j++;
                countX[i]--;        
            }
        }
        for (var i = 0; i <= maiorY; i++) {
            while (countY[i] > 0) {
                ponto.alteraValorY(i, x);
                x++;
                countY[i]--;
            }              
        }
    }

    animacao(){//função para animação de checagem da array
        if(ds <= 0){
            ctx.clearRect(0, 0, 200, 200);
            for(var m = 0; m < ponto.getArrayXTam(); m++){
                ctx.beginPath();
                ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
                ctx.lineTo(ponto.getArrayX(m),200);
                ctx.stroke();
                if(m == 200){
                    console.log(ponto.getArrayTodaX());
                    clearInterval(refreshIntervalId); 
                } 
            }
        }else{
            ctx.beginPath();
            ctx.moveTo(ds,0);
            ctx.lineTo(ds,200);
            ctx.strokeStyle = "red";
            ctx.stroke();  
            ds--;
        }
    }

    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <button id='iniciaCinco' onClick={start}>Iniciar</button>
                <button id='paraCinco' onClick={para} >Parar</button>
                <button id='continuaCinco' onClick={keep}>Continuar</button>
                <canvas id='canvasCinco' ref={ canvasCinco => this.canvasCinco = canvasCinco}> </canvas>
            </div>
        )
    }
}
var cd = new CanvasCinco();//declaração do objeto de tipo Canvas
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