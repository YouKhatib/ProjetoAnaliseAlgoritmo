import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

//Declaração de variáveis globais
var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
var v = [];
var s = [];
var metXUm;
var metXDois;
var metYUm;
var metYDois;
var intervalo;
export default class canvasQuatro extends React.Component{
    constructor(props){//Construtor necessário para o React
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

    componentWillMount(){//Função executada automaticamente pelo react
        this.setState({//Declaração do tamanho do canvas
            canvasSize: {canvasWidth: 200, canvasHeight: 200}

        })

    }

    componentDidMount(){//Função executada automaticamente pelo react
        ctx = this.canvasAnim.getContext("2d");//Seclaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasAnim.width = canvasWidth;//Setando a largura do canvas
        this.canvasAnim.height = canvasHeight;//Setando a altura do canvas

        ctx.font = "10px Arial";//Fonte do texto
        ctx.fillText("HeapSort",155,10);//Texto a ser escrito dentro do canvas]

    }

    comeca(){//Função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//Zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//Zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//Zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//Realizando a limpeza do canvas;
        this.inicializa();//Função de inicializar os elementos

    }

    continua(){//Função chamada pelo botão de continuar(caso haja alguma pausa)
        this.heapSort();
        refreshIntervalId = setInterval(this.heapSort,150);

    }

    inicializa(){//Função que inicializa os elementos
        cntd = localStorage.getItem('Cntd');//Obtenção do valor guardado no navegador
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);//Passando o valor para o arrayX
            ponto.setArrayY(y);//Passando o valor para o arrayY
            v.push(x);
            s.push(y)
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.stroke();

        }
        ponto.setArrayCopiaOrdenado();//Ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//Obtendo o tamanho do contador um

    }

    //Função para ordenar o vetor
    ordena(){
        for(let i = Math.floor(v.length/2) - 1; i >= 0; i--)
        sift(v, v.length, i);

        for(let i = Math.floor(s.length/2) - 1; i >= 0; i--)
        sift(s, s.length, i);

    }

    //HeapSort
    heapSort(){//Implementação do heapSort
        ctx.clearRect(0, 0, 200, 200);
        //Troca a primeira posição do vetor seccionado com a ultima
        [v[0], v[metXDois]] = [v[metXDois], v[0]];
        sift(v, metXDois, 0);
        metXDois--;

        [s[0], s[metYDois]] = [s[metYDois], s[0]];
        sift(s, metYDois, 0);
        metYDois--;
        

        for(var m = 0; m < ponto.getArrayXTam(); m++){ //For para a animação
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
        ctx.font = "10px Arial";
        ctx.fillText("HeapSort",155,10);

      }

    render(){//Função render do React, obtendo o que será renderizado na tela pelo classe.
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

//Verifica se o maior valor se encontra na raiz
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



var cd = new canvasQuatro();//Declaração do objeto de tipo Canvas
function start() {//Função de iniciar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    v = [];
    s = [];
    cd.comeca();
    flag = true;
    metXUm = Math.floor(v.length/2) - 2;
    metXDois = Math.floor(v.length - 1);
    metYDois = Math.floor(s.length/2) - 2;
    metYDois = Math.floor(v.length - 1);
    cd.ordena();
    refreshIntervalId = setInterval(cd.heapSort,intervalo);

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