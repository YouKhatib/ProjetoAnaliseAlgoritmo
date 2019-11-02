import React from 'react';
import logo from './logo.svg';
import Canvas from './Canvas.jsx'
import CanvasDois from './CanvasDois.jsx'
import CanvasTres from './CanvasTres.jsx'
import CanvasQuatro from './CanvasQuatro'
import CanvasCinco from './CanvasCinco'
import CanvasSeis from './CanvasSeis'
import CanvasSete from './CanvasSete'
import CanvasOito from './CanvasOito'
import CanvasNove from './CanvasNove'
import CanvasDez from './CanvasDez'
import './App.css';


var animacao = new Canvas();
function App() {
  return (
    <div className="App">
        <Canvas />
        <CanvasDois />
        <CanvasTres />
        <CanvasQuatro />
        <CanvasCinco />
        <CanvasSeis />
        <CanvasSete />
        <CanvasOito />
        <CanvasNove />
        <CanvasDez />
        <p id='pelements'>Digite a quantidade de elementos:</p>
        <p id='pintervalo'>Digite o intervalo entre cada animação(1000 = 1s):</p>
        <p id='pCarol'> Nome: Carolina Costa - RA: 22.217.011-0</p>
        <p id='pKayke'> Nome: Kayke Bonafé     - RA: 22.217.003-7</p>
        <p id='pYoussef'> Nome: Youssef Khatib   - RA: 22.217.034-2</p>
    </div>
  );
}

export default App;
