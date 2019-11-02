import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

//Declaração de variáveis globais
var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var anim;
var intervalo;
export default class CanvasOito extends Ponto{
    constructor(props){//Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],

        }

    }

    componentWillMount(){//Função executada automaticamente pelo react
        this.setState({//Declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}

        })

    }

    componentDidMount(){//Função executada automaticamente pelo react
        ctx = this.canvasOito.getContext("2d");//Declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//Declaração do canvas
        this.canvasOito.width = canvasWidth;//Setando a largura do canvas
        this.canvasOito.height = canvasHeight;//Setando a altura do canvas

        ctx.font = "10px Arial";//Fonte do texto
        ctx.fillText("PancakeSort",140,10);//Texto a ser escrito dentro do canvas]

    }

    comeca(){//Função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//Zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//Zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//Zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//Realizando a limpeza do canvas;
        this.inicializa();//Função de inicializar os elementos
        refreshIntervalId = setInterval(this.pancakeSort,intervalo);//chamo o pancakeSort indefinidamente com um intervalo pre-setado

    }

    continua(){//Função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.pancakeSort,intervalo);

    }

    inicializa(){//Função que inicializa os elementos
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        var cntd = localStorage.getItem('Cntd');//Obtenção do valor guardado no navegador
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x);//Passando o valor para o arrayX
            ponto.setArrayY(y);//Passando o valor para o arrayY

        }
        ponto.setArrayCopiaOrdenado();//Ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//Obtendo o tamanho do contador um
        anim = ponto.getArrayXTam() - 1;
        console.log(ponto.getArrayXTam());

    }
    
    //PancakeSort
    pancakeSort(){//Implementação do pancakeSort
        ctx.clearRect(0, 0, 200, 200);
        //Encontra o maior indice do maior elemento que ainda não foi ordenado
        var maiorIndice = 0;
        var maior = ponto.getArrayX(0);
        for (var j = 1; j <= anim; j++) {
            if (ponto.getArrayX(j) > maior) {
                maior = ponto.getArrayX(j);
                maiorIndice = j;

            }

        }
    
        var nova_fatia = [];
        //Realiza o flip do maior elemento do vetor para o indice 0
        if (maiorIndice > 0) {
            nova_fatia = ponto.getArrayTodaX().slice(0, maiorIndice+1).reverse();
            for ( j = 0; j <= maiorIndice; j++) 
                ponto.alteraValorX(nova_fatia[j], j)
                
        }
    
        //Então realiza o flip do maior elemento para o lugar certo
        nova_fatia = ponto.getArrayTodaX().slice(0, anim+1).reverse();
        for ( j = 0; j <= anim; j++) 
            ponto.alteraValorX(nova_fatia[j], j)
        
        var maiorIndice = 0;
        var maior = ponto.getArrayY(0);
        for (var j = 1; j <= anim; j++) {
            if (ponto.getArrayY(j) > maior) {
                maior = ponto.getArrayY(j);
                maiorIndice = j;

            }

        }
    
        var nova_fatia = [];
        //Realiza o flip do maior elemento do vetor para o indice 0
        if (maiorIndice > 0) {
            nova_fatia = ponto.getArrayTodaY().slice(0, maiorIndice+1).reverse();
            for ( j = 0; j <= maiorIndice; j++)
                ponto.alteraValorY(nova_fatia[j], j) 

        }
    
        //Então realiza o flip do maior elemento para o lugar certo
        nova_fatia = ponto.getArrayTodaY().slice(0, anim+1).reverse();
        for ( j = 0; j <= anim; j++) 
            ponto.alteraValorY(nova_fatia[j], j)
        
            anim--;

        for(var m = 0; m < ponto.getArrayXTam(); m++){ //For para a animação
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
            ctx.strokeStyle = "black";
            ctx.stroke();  

        }
        
        var contDois = 0;
        for(var i = 0; i < ponto.getArrayCopiaXTam(); i++){
            if(ponto.getArrayX(i) == ponto.getValCopiaX(i) && ponto.getArrayY(i) == ponto.getValCopiaY(i)){
                contDois++; 

            }

        }

        if(contUm == contDois){//Caso ordenado, para de chamar a função
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
        ctx.fillText("PancakeSort",140,10);

    }
    
    render(){//Função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <button id = 'iniciaOito' onClick={start}>Iniciar</button>
                <button id = 'paraOito' onClick={para} >Parar</button>
                <button id = 'continuaOito' onClick={keep}>Continuar</button>
                <canvas id='canvasOito' ref={ canvasOito => this.canvasOito = canvasOito}> </canvas>
            </div>

        )

    }

}

var cd = new CanvasOito();//Declaração do objeto de tipo Canvas
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