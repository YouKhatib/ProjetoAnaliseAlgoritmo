import React from 'react';
import './App.css';
import Ponto from './Pontos.js';

//Declaração de variáveis globais
var v = [];
var s = [];
var aux = 0;
var comeco;
var ctx;
var contUm = 0;
var flag = true;
var refreshIntervalId;
var ponto = new Ponto();
var cntd;
var intervalo;
var curr_sizeX = 1; 
var curr_sizeY = 1; 
export default class CanvasNove extends React.Component{//Declaração de variáveis globais
    constructor(props){//Construtor necessário para o React
        super(props)
        this.state = {
            arrayX: [],
            arrayY: [],
            
        }
        this.handleChange = this.handleChange.bind(this);//Funções provenientes do input do usuário
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {//Função para input
        this.setState({value: event.target.value});

    }
    
    handleSubmit(event) {//Função para input
        cntd = parseInt(this.state.value);//Transformando o valor entrado pelo usuário para int
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
        ctx.fillText("MergeSort",150,10);//Fonte do texto

    }

    comeca(){//Função de inicio (chamada pelo botão iniciar)
        intervalo = localStorage.getItem('Intervalo');//Pego o valor salvo no navegador
        ponto.zeraArrays();//Zero as arrays caso haja algum valor nelas
        ponto.zeraArrays();//Zero as arrays auxiliares caso haja algum valor nelas
        ponto.zeraArraysCopia();//Zerando o contador utilizado para checar se o vetor já está ordenado;
        contUm = 0;//Zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//Realizando a limpeza do canvas;
        this.inicializa();//Função de inicializar os elementos


    }

    continua(){//Função chamada pelo botão de continuar(caso haja alguma pausa)
        refreshIntervalId = setInterval(this.mergeSort,intervalo);

    }

    inicializa(){//Função que inicializa os elementos
        ctx.clearRect(0, 0, 200, 200);
        v = [];
        s = [];
        curr_sizeX = 1; 
        curr_sizeY = 1; 
        comeco = 1;
        aux = 0;
        var cntd = localStorage.getItem('Cntd');//Obtenção do valor guardado no navegador
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1;//Geração de um valor aleatório de 1 a 200 para guardar no arrayX
            let  y = Math.floor(Math.random() * (200 - 1)) + 1;//Geração de um valor aleatório de 1 a 200 para guardar no arrayY
            ponto.setArrayX(x);//Passando o valor para o arrayX
            ponto.setArrayY(y);//Passando o valor para o arrayY
            v.push(x);//Inserindo os valores no v
            s.push(y);//Inserindo os valores no s
            ctx.beginPath();//Começando o desenho no canvas
            ctx.moveTo(x,y);//Inicio da linha no canvas
            ctx.lineTo(x,200);//Final da linha no canvas
            ctx.stroke();//Finalizando o desenho no canvas

        }
        ponto.setArrayCopiaOrdenado();//Ordenando a array auxiliar
        contUm = ponto.getArrayXTam();//Obtendo o tamanho do contador um

    }

    //MergeSort
    mergeSort() { 
        ctx.clearRect(0, 0, 200, 200);//Limpando o canvas
        var left_startX;
        var left_startY; 
        for (left_startX=0; left_startX<v.length-1; left_startX += 2*curr_sizeX){ 
            var mid = min(left_startX + curr_sizeX - 1, v.length-1);
            var right_endX = min(left_startX + 2*curr_sizeX - 1, v.length-1);
            merge(v, left_startX, mid, right_endX); 

        } 

        for (left_startY=0; left_startY<s.length-1; left_startY += 2*curr_sizeY) { 
            var mid = min(left_startY + curr_sizeY - 1, s.length-1);
            var right_end = min(left_startY + 2*curr_sizeY - 1, s.length-1);
            merge(s, left_startY, mid, right_end); 

        } 

        curr_sizeX = 2*curr_sizeX;
        curr_sizeY = 2*curr_sizeY;

        for(var m = 0; m < ponto.getArrayXTam(); m++){//For para animação
            ctx.beginPath();
            ctx.moveTo(v[m],s[m]);
            ctx.lineTo(v[m],200);
            ctx.stroke();
            
        }

        var contDois = 0;
        for(var i = 0; i < v.length; i++){//Checagem para ver se o vetor está ordenado
            if(v[i] == ponto.getValCopiaX(i) && s[i] == ponto.getValCopiaY(i)){
                contDois++; 

            }

        }

        if(contUm == contDois){//Caso o vetor esteja ordenado, pinta ele de vermelho e para de executar a função
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
        ctx.fillText("MergeSort",150,10); 

    } 

    render(){//Função render do React, obtendo o que será renderizado na tela pelo classe.
        return(
            <div>
                <button id = 'iniciaNove' onClick = {start}>Iniciar</button>
                <button id = 'paraNove' onClick = {para}>Parar</button>
                <button id = 'continuaNove' onClick = {keep}>Continuar</button>
                <canvas  id = 'canvasNove' ref={ canvasAnim => this.canvasAnim = canvasAnim}> </canvas>
            </div>

        )

    }

}

var cd = new CanvasNove();//Declaração do objeto de tipo Canvas
function start() {//Função de iniciar(chamada pelo botão)
    clearInterval(refreshIntervalId);
    cd.comeca();
    cd.mergeSort();
    refreshIntervalId = setInterval(cd.mergeSort,intervalo);
 
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

function merge(arr, l, m, r) { 
    var i, j, k; 
    var n1 = m - l + 1; 
    var n2 =  r - m; 

    //Cria arrays temporários 
    var L = []; 
    var R = []; 

    //Copia os dados paras os arrays temporários L[] e R[]
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 

    //Junta os arrays temporários de volta no array principal
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2) { 
        if (L[i] <= R[j]) { 
            arr[k] = L[i]; 
            i++; 
        } 
        else{ 
            arr[k] = R[j]; 
            j++; 

        } 
        k++;

    } 

  //Copia os elementos restantes de L[], se houver algum
    while (i < n1) { 
      arr[k] = L[i]; 
      i++; 
      k++; 
    
    } 

  //Copia os elementos restantes de R[], se houver algum
    while (j < n2) { 
      arr[k] = R[j]; 
      j++; 
      k++; 

    } 

} 

function min(x, y) { 
    return (x<y)? x :y; 

} 