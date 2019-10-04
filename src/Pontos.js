import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class Ponto extends React.Component{
    constructor(props){
        super(props)
        var arrayX = [];
        var arrayY = [];
        var arrayCopiaX = [];
        var arrayCopiaY = [];
    }

    setArrayX(a){
        this.arrayX.push(a);
    }
    setArrayY(a){
        this.arrayY.push(a);
    }
    alteraValorX(a, i){
        this.arrayX[i] = a;
    }
    alteraValorY(a, i){
        this.arrayY[i] = a;
    }
    zeraArrays(){
        this.arrayY = [];
        this.arrayX = [];
    }
    zeraArraysCopia(){
        this.arrayCopiaY = [];
        this.arrayCopiaX = [];
    }

    getArrayX(i){
        return(this.arrayX[i]);
    }
    getArrayY(i){
        return(this.arrayY[i]);
    }
    getValCopiaX(i){
        return(this.arrayCopiaX[i]);
    }
    getArrayCopiaXTam(){
        return(this.arrayCopiaX.length);
    }
    getArrayCopiaYTam(){
        return(this.arrayCopiaY.length);
    }
    getValCopiaY(i){
        return(this.arrayCopiaY[i]);
    }
    getArrayXTam(){
        return(this.arrayX.length);
    }
    getArrayYTam(){
        return(this.arrayY.length);
    }
    setArrayCopiaOrdenado(){
        for(var i = 0; i < this.arrayX.length; i++){
            this.arrayCopiaX.push(this.arrayX[i]);
            this.arrayCopiaY.push(this.arrayY[i]);
        }
        this.arrayCopiaX.sort(function(a, b){return a-b});//ordenando e transformando em int para realizar a checagem
        this.arrayCopiaY.sort(function(a, b){return a-b});
    }
}