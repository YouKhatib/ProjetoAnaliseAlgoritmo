import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var flag;
var anim;
var intervalo;//Declaração de variáveis globais
export default class CanvasOito extends Ponto{
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
        ctx = this.canvasOito.getContext("2d");//declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasOito.width = canvasWidth;//setando a largura do canvas
        this.canvasOito.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial";//fonte do texto
        ctx.fillText("PancakeSort",2,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        refreshIntervalId = setInterval(this.pancakeSort,intervalo);//chamo o pancakeSort indefinidamente com um intervalo pre-setado
        //this.pancakeSort();
    }
    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.pancakeSort,intervalo);
    }
    inicializa(){//função que inicializa os elementos
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; //geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x);//passando o valor para o arrayX
            ponto.setArrayY(y);//passando o valor para o arrayY
        }
        ponto.setArrayCopiaOrdenado();//ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//obtendo o tamanho do contador um
        anim = ponto.getArrayXTam() - 1;
        console.log(ponto.getArrayXTam());
    }
    
    //pancakeSort
    pancakeSort(){//implementação do pancakeSort
        ctx.clearRect(0, 0, 200, 200);
        //for (var i = ponto.getArrayXTam() - 1; i >= 1; i--) {
            //encontra o maior indice do maior elemento que ainda não foi ordenado
            var maiorIndice = 0;
            var maior = ponto.getArrayX(0);
            for (var j = 1; j <= anim; j++) {
                if (ponto.getArrayX(j) > maior) {
                    maior = ponto.getArrayX(j);
                    maiorIndice = j;

                }

            }
        
            // if (maiorIndice == i) 
            //     continue; //elemento no lugar certo
        
            var nova_fatia = [];
        
            //realiza o flip do maior elemento do vetor para o indice 0
            if (maiorIndice > 0) {
                nova_fatia = ponto.getArrayTodaX().slice(0, maiorIndice+1).reverse();
                for ( j = 0; j <= maiorIndice; j++) 
                    ponto.alteraValorX(nova_fatia[j], j)
            }
        
            //então realiza o flip do maior elemento para o lugar certo
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
        
            // if (maiorIndice == i) 
            //     continue; //elemento no lugar certo
        
            var nova_fatia = [];
        
            //realiza o flip do maior elemento do vetor para o indice 0
            if (maiorIndice > 0) {
                nova_fatia = ponto.getArrayTodaY().slice(0, maiorIndice+1).reverse();
                for ( j = 0; j <= maiorIndice; j++)
                    ponto.alteraValorY(nova_fatia[j], j) 
            }
        
            //então realiza o flip do maior elemento para o lugar certo
            nova_fatia = ponto.getArrayTodaY().slice(0, anim+1).reverse();
            for ( j = 0; j <= anim; j++) 
                ponto.alteraValorY(nova_fatia[j], j)
            
                anim--;

        for(var m = 0; m < ponto.getArrayXTam(); m++){ //for para a animação
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

    }
    
    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
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
var cd = new CanvasOito();//declaração do objeto de tipo Canvas
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