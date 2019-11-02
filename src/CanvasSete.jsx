import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
var inicioX = 0;
var inicioY = 0;
var finalX;
var finalY;
var topX, topY;
var stackX = [];
var stackY = [];
var p, d;
var flag;
var intervalo;//Declaração de variáveis globais
export default class CanvasSete extends Ponto{
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
        ctx = this.canvasSete.getContext("2d");//declaração do contexto do canvas
        const {canvasWidth, canvasHeight} = this.state.canvasSize;//declaração do canvas
        this.canvasSete.width = canvasWidth;//setando a largura do canvas
        this.canvasSete.height = canvasHeight;//setando a altura do canvas

        ctx.font = "10px Arial";//fonte do texto
        ctx.fillText("QuickSort",153,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        this.quickSort();
        
    }
    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.animacao,intervalo);
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
        stackX = [];
        stackY = [];
        p = 0;
        d = 0;
        ponto.setArrayCopiaOrdenado();//ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//obtendo o tamanho do contador um
        finalX = ponto.getArrayXTam() - 1;
        finalY = ponto.getArrayYTam() - 1;
        inicioX = 0;
        inicioY = 0;
    }

    // quickSort
    quickSort(){//implementação do quickSort
        ctx.clearRect(0, 0, 200, 200);          
        /* ponto.getArray --> Vetor a ser odernado,  
        inicio --> Indíce inicial,  
        final --> Indíce final */ 
        // Cria uma pilha auxiliar 
        stackX = [finalX - inicioX + 1]; 
        stackY = [finalY - inicioY + 1];
        
        // Inicializando o topo da pilha
        topX = -1; 
        topY = -1;
        
        // Coloca os valores iniciais de inicio e final na pilha
        stackX[++topX] = inicioX; 
        stackX[++topX] = finalX; 
        
        stackY[++topY] = inicioY; 
        stackY[++topY] = finalY;

        refreshIntervalId = setInterval(this.animacao,intervalo)

    }

    animacao(){
        ctx.clearRect(0, 0, 200, 200);
        //while (topX >= 0) { 
            // Tira final e inicio
            finalX = stackX[topX--]; 
            inicioX = stackX[topX--]; 
        
            // Coloca o pivô no lugar correto 
            p = partition(ponto.getArrayTodaX(), inicioX, finalX); 
        
            // Se há algum elemento no lado esquerdo do vetor, 
            // este elemento é colocado no lado esquerdo da pilha 
            if (p - 1 > inicioX) { 
                stackX[++topX] = inicioX; 
                stackX[++topX] = p - 1; 
            } 
        
            // Se há algum elemento no lado direito do vetor, 
            // este elemento é colocado no lado direito da pilha 
            if (p + 1 < finalX) { 
                stackX[++topX] = p + 1; 
                stackX[++topX] = finalX; 
            } 
        //} 

        //while (topY >= 0) { 
            // Tira final e inicio
            finalY = stackY[topY--]; 
            inicioY = stackY[topY--]; 
        
            // Coloca o pivô no lugar correto 
            d = partition(ponto.getArrayTodaY(), inicioY, finalY); 
        
            // Se há algum elemento no lado esquerdo do vetor, 
            // este elemento é colocado no lado esquerdo da pilha 
            if (d - 1 > inicioY) { 
                stackY[++topY] = inicioY; 
                stackY[++topY] = d - 1; 
            } 
        
            // Se há algum elemento no lado direito do vetor, 
            // este elemento é colocado no lado direito da pilha 
            if (d + 1 < finalY) { 
                stackY[++topY] = d + 1; 
                stackY[++topY] = finalY; 
            } 
        //} 
    
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
        ctx.font = "10px Arial";
        ctx.fillText("QuickSort",153,10);
        
    }

    render(){//função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <button id = 'iniciaSete' onClick={start}>Iniciar</button>
                <button id = 'paraSete' onClick={para} >Parar</button>
                <button id = 'continuaSete' onClick={keep}>Continuar</button>
                <canvas id='canvasSete' ref={ canvasSete => this.canvasSete = canvasSete}> </canvas>
            </div>
        )

    }

}

var cd = new CanvasSete();//declaração do objeto de tipo Canvas
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

function partition(v, l, h){ 
    let x = v[h]; 
    let i = (l - 1); 
  
    for (let j = l; j <= h - 1; j++) { 
        if (v[j] <= x) { 
            i++; 
            [v[i], v[j]] = [v[j], v[i]]
        } 
        
    }  
    [v[i + 1], v[h]] = [v[h], v[i + 1]]
    
    return (i + 1); 

} 