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
        var gapX;
        var gapY;
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

    getArrayX(){
        return(this.arrayX);
    }
    getArrayY(){
        return(this.arrayY);
    }
    getArrayX(i){
        return(this.arrayX[i]);
    }
    getArrayY(i){
        return(this.arrayY[i]);
    }
    getArrayCopiaX(i){
        return(this.arrayCopiaX[i]);
    }
    getArrayCopiaX(){
        return(this.arrayCopiaX);
    }
    getArrayCopiaY(){
        return(this.arrayCopiaX);
    }
    getArrayCopiaY(i){
        return(this.arrayCopiaY[i]);
    }
    setGapX(i){
        this.gapX = i;
    }
    setGapY(i){
        this.gapY = i;
    }
    getArrayXTam(){
        return(this.arrayX.length);
    }
    getArrayYTam(){
        return(this.arrayY.length);
    }
    getGapX(){
        return(this.gapX);
    }
    getGapY(){
        return(this.gapY);
    }
    checaOrdenacao(){
        let contUm = this.getArrayCopiaX().length; 
        let contDois = 0;
        for(var i = 0; i < this.arrayCopiaX.length; i++){
            if(this.getArrayX(i) == this.getArrayCopiaX(i) && this.getArrayY(i) == this.getArrayCopiaY(i)){
                contDois++;
            }
        }
        if(contUm == contDois){
            return true;
        }
        else
            return false;
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