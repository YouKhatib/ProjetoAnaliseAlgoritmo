import React from 'react';
import './App.css';
import Ponto from './Pontos.js';
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
export default class CanvasNove extends React.Component{
    constructor(props){
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

    componentWillMount(){
        this.setState({
            canvasSize: {canvasWidth: 200, canvasHeight: 200}
        })

    }

    componentDidMount(){
        ctx = this.canvasAnim.getContext("2d");
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        this.canvasAnim.width = canvasWidth;
        this.canvasAnim.height = canvasHeight;

        ctx.font = "10px Arial";
        ctx.fillText("MergeSort",150,10);

    }

    comeca(){
        intervalo = localStorage.getItem('Intervalo');
        ponto.zeraArrays();
        ponto.zeraArraysCopia();
        contUm = 0;//zerando o contador utilizado para checar se o vetor já está ordenado;
        ctx.clearRect(0, 0, 200, 200);//realizando a limpeza do canvas;
        this.inicializa();


    }

    continua(){
        refreshIntervalId = setInterval(this.mergeSort,intervalo);

    }

    inicializa(){
        ctx.clearRect(0, 0, 200, 200);
        v = [];
        s = [];
        curr_sizeX = 1; 
        curr_sizeY = 1; 
        comeco = 1;
        aux = 0;
        var cntd = localStorage.getItem('Cntd');
        ctx.strokeStyle = "black";
        for(var j = 0; j < cntd; j++){
            let x = Math.floor(Math.random() * (200 - 1)) + 1; 
            let  y = Math.floor(Math.random() * (200 - 1)) + 1; 
            ponto.setArrayX(x);
            ponto.setArrayY(y);
            v.push(x);
            s.push(y);
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x,200);
            ctx.stroke();

        }
        ponto.setArrayCopiaOrdenado();
        contUm = ponto.getArrayXTam();

    }

    // Utility function to find minimum of two integers 



/* Iterative mergesort function to sort arr[0...n-1] */
 mergeSort() 
{ 
    ctx.clearRect(0, 0, 200, 200);
  // For current size of subarrays to be merged 
                 // curr_size varies from 1 to n/2 
    var left_startX;
    var left_startY; // For picking starting index of left subarray 
                 // to be merged 

 // Merge subarrays in bottom up manner.  First merge subarrays of 
 // size 1 to create sorted subarrays of size 2, then merge subarrays 
 // of size 2 to create sorted subarrays of size 4, and so on. 
 //for (curr_size=1; curr_size<=v.length-1; curr_size = 2*curr_size) 
 //{ 
     // Pick starting point of different subarrays of current size 
     for (left_startX=0; left_startX<v.length-1; left_startX += 2*curr_sizeX) 
     { 
         // Find ending point of left subarray. mid+1 is starting  
         // point of right 
         var mid = min(left_startX + curr_sizeX - 1, v.length-1); 

         var right_endX = min(left_startX + 2*curr_sizeX - 1, v.length-1); 

         // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end] 
         merge(v, left_startX, mid, right_endX); 

     } 
      for (left_startY=0; left_startY<s.length-1; left_startY += 2*curr_sizeY) 
      { 
          // Find ending point of left subarray. mid+1 is starting  
          // point of right 
          var mid = min(left_startY + curr_sizeY - 1, s.length-1); 

          var right_end = min(left_startY + 2*curr_sizeY - 1, s.length-1); 

          // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end] 
          merge(s, left_startY, mid, right_end); 
      } 
     curr_sizeX = 2*curr_sizeX;
     curr_sizeY = 2*curr_sizeY;

     for(var m = 0; m < ponto.getArrayXTam(); m++){//for para animação
        ctx.beginPath();
        ctx.moveTo(v[m],s[m]);
        ctx.lineTo(v[m],200);
        ctx.stroke();  
    }
    var contDois = 0;
    for(var i = 0; i < v.length; i++){//checagem para ver se o vetor está ordenado
        if(v[i] == ponto.getValCopiaX(i) && s[i] == ponto.getValCopiaY(i)){
            contDois++; 
        }
    }

    if(contUm == contDois){//caso o vetor esteja ordenado, pinta ele de vermelho e para de executar a função
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

    render(){
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

var cd = new CanvasNove();
function start() {
    clearInterval(refreshIntervalId);
    cd.comeca();
    cd.mergeSort();
    refreshIntervalId = setInterval(cd.mergeSort,intervalo);
 
    flag = true;

}
function para() {
    clearInterval(refreshIntervalId);
    flag = false;

}
function keep(){
    if(flag == false){
       cd.continua();
       flag = true;

    }
    
}

function merge(arr, l, m, r) 
{ 
  var i, j, k; 
  var n1 = m - l + 1; 
  var n2 =  r - m; 

  /* create temp arrays */
  var L = []; 
  var R = []; 

  /* Copy data to temp arrays L[] and R[] */
  for (i = 0; i < n1; i++) 
      L[i] = arr[l + i]; 
  for (j = 0; j < n2; j++) 
      R[j] = arr[m + 1+ j]; 

  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; 
  j = 0; 
  k = l; 
  while (i < n1 && j < n2) 
  { 
      if (L[i] <= R[j]) 
      { 
          arr[k] = L[i]; 
          i++; 
      } 
      else
      { 
          arr[k] = R[j]; 
          j++; 
      } 
      k++; 
  } 

  /* Copy the remaining elements of L[], if there are any */
  while (i < n1) 
  { 
      arr[k] = L[i]; 
      i++; 
      k++; 
  } 

  /* Copy the remaining elements of R[], if there are any */
  while (j < n2) 
  { 
      arr[k] = R[j]; 
      j++; 
      k++; 
  } 
} 

function min(x, y) 
{ 
return (x<y)? x :y; 
} 