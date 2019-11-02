import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var digito = 0;
var intervalo;//Declaração de variáveis globais
export default class CanvasSeis extends Ponto{
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
        ctx = this.canvasSeis.getContext("2d");//declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasSeis.width = canvasWidth;//setando a largura do canvas
        this.canvasSeis.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial";//fonte do texto
        ctx.fillText("RadixSort",153,10);//texto a ser escrito dentro do canvas

    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        refreshIntervalId = setInterval(this.radixSort,intervalo);//chamo o radixSort indefinidamente com um intervalo pre-setado
   
    }

    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.radixSort,intervalo);

    }

    inicializa(){//função que inicializa os elementos
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        digito = 0;//declaração do valor digito, utilizado no radixSort
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
    
    // radixSort
    radixSort(){//implementação do RadixSort
        ctx.clearRect(0, 0, 200, 200);
        var contX = [];
        var contY = [];
        var copiaX = ponto.getArrayTodaX();
        var copiaY = ponto.getArrayTodaY();
        for(var i = 0; i < 10; i++){
            contX.push(0)
            contY.push(0)

        }

        for(var j = 0; j < ponto.getArrayXTam(); j++){
            var i = ponto.getArrayX(j);
            var b = ponto.getArrayY(j);
            var idx = Math.floor((i/Math.pow(10,digito))%10);
            var idy = Math.floor((b/Math.pow(10,digito))%10);
            contX[idx]++;
            contY[idy]++;

        }

        for(var i = 1; i < contX.length; i++){
            contX[i] = contX[i] + contX[i-1];

        }

        for(var i = 1; i < contY.length; i++){
            contY[i] = contY[i] + contY[i-1];

        }

        var arrayNX = [];
        var arrayNY = [];
        for(var i = copiaX.length - 1; i>=0; i--){
          var idx = Math.floor((copiaX[i]/Math.pow(10,digito))%10);
          arrayNX[contX[idx]-1] = copiaX[i];
          contX[idx]--;

        }

        for(var i = copiaY.length - 1; i>=0; i--){
            var idx = Math.floor((copiaY[i]/Math.pow(10,digito))%10);
            arrayNY[contY[idx]-1] = copiaY[i];
            contY[idx]--;

        }
        ponto.alteraArrayTodaX(arrayNX);
        ponto.alteraArrayTodaY(arrayNY);

        for(var m = 0; m < ponto.getArrayXTam(); m++){ //for para a animação
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
            ctx.stroke();  

        }
        digito++;//incremento o digito;

        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 

            }

        }

        if(contUm == contDois){//caso ordenado, para de chamar a função
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
        ctx.font = "10px Arial";
        ctx.fillText("RadixSort",153,10);

    }

    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <button id = 'iniciaSeis' onClick={start}>Iniciar</button>
                <button id = 'paraSeis' onClick={para} >Parar</button>
                <button id = 'continuaSeis' onClick={keep}>Continuar</button>
                <canvas id='canvasSeis' ref={ canvasSeis => this.canvasSeis = canvasSeis}> </canvas>
            </div>

        )

    }

}

var cd = new CanvasSeis();//declaração do objeto de tipo Canvas
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