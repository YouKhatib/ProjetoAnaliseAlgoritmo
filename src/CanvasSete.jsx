import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

var contUm = 0;
var ctx;
var refreshIntervalId;
var ponto = new Ponto();
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
        ctx.fillText("QuickSort",2,10);//texto a ser escrito dentro do canvas
    }

    comeca(){//função de inicio (chamada pelo botão iniciar)
        ponto.zeraArrays();//zero as arrays caso haja algum valor nelas
        ponto.zeraArraysCopia();//zero as arrays auxiliares caso haja algum valor nelas
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();//função de inicializar os elementos
        refreshIntervalId = setInterval(this.quickSort,intervalo);//chamo o quickSort indefinidamente com um intervalo pre-setado
    }
    continua(){//função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.quickSort,intervalo);
    }
    inicializa(){//função que inicializa os elementos
        intervalo = localStorage.getItem('Intervalo');//obtenção do valor guardado no navegador
        var cntd = localStorage.getItem('Cntd');//obtenção do valor guardado no navegador
        ponto.setArrayCopiaOrdenado();//ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//obtendo o tamanho do contador um
    }
    
    // quickSort
    quickSort(){//implementação do quickSort
        ctx.clearRect(0, 0, 200, 200);          
        /* v --> Vetor a ser odernado,  
        l --> Indíce inicial,  
        h --> Indíce final */
        function quickSort(v, l, h) { 
            // Cria uma pilha auxiliar 
            let stack = [h - l + 1]; 
          
            // Inicializando o topo da pilha
            let top = -1; 
          
            // Coloca os valores iniciais de l e h na pilha
            stack[++top] = l; 
            stack[++top] = h; 
          
            // Continua tirando da pilha até ela ficar vazia 
            while (top >= 0) { 
                // Tira h e l
                h = stack[top--]; 
                l = stack[top--]; 
          
                // Coloca o pivô no lugar correto 
                let p = partition(ponto.getArrayX(), l, h); 
          
                // Se há algum elemento no lado esquerdo do vetor, 
                // este elemento é colocado no lado esquerdo da pilha 
                if (p - 1 > l) { 
                    stack[++top] = l; 
                    stack[++top] = p - 1; 
                } 
          
                // Se há algum elemento no lado direito do vetor, 
                // este elemento é colocado no lado direito da pilha 
                if (p + 1 < h) { 
                    stack[++top] = p + 1; 
                    stack[++top] = h; 
                } 
            } 
        } 
    
        for(var m = 0; m < ponto.getArrayXTam(); m++){ //for para a animação
            ctx.beginPath();
            ctx.moveTo(ponto.getArrayX(m),ponto.getArrayY(m));
            ctx.lineTo(ponto.getArrayX(m),200);
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