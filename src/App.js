import React from 'react';
import logo from './logo.svg';
import Canvas from './Canvas.jsx'
import CanvasDois from './CanvasDois.jsx'
import CanvasTres from './CanvasTres.jsx'
import CanvasQuatro from './CanvasQuatro'
import CanvasCinco from './CanvasCinco'
import CanvasSeis from './CanvasSeis'
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
    </div>
  );
}

export default App;
