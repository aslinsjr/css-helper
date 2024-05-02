import './BoxShadowGeneration.css'

import { useState } from 'react';

const BoxShadowGeneration = () => {

    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const [blur, setBlur] = useState(0)
    const [spread, setSpread] = useState(0)
    const [color, setColor] = useState("#000")

    const [copy, setCopy] = useState("Copiar")

    function handleChange(e) {
        if(e.target.className === "offset-x") {
            setOffsetX(e.target.value)
        }
        if(e.target.className === "offset-y") {
            setOffsetY(e.target.value)
        }
        if(e.target.className === "blur") {
            setBlur(e.target.value)
        }
        if(e.target.className === "spread") {
            setSpread(e.target.value)
        }
        if(e.target.id === "color") {
            setColor(e.target.value)
        }
    }

    let boxShadow = { boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`}

    function handleCopy() {
        const cssRule = document.querySelector("#css-rule")

        setCopy("Copiado!")

        navigator.clipboard.writeText(cssRule.innerText)

        setTimeout(() => {
            setCopy("Copiar")
        }, 1000)
    }

  return (
    <div className='box-shadow-generator-container'>
        <h1>Gerador de Box Shadow</h1>
        <div className="generation-container">
            <form>
                <label htmlFor="offset-x">Deslocamento Horizontal
                    <input type="range" className='offset-x' name='offset-x' min="-100" max="100" value={offsetX} onChange={(e) => handleChange(e)}/>
                    <input type="text" className='offset-x' onChange={(e) => handleChange(e)} value={offsetX}/>
                </label>
                <label htmlFor="offset-y">Deslocamento Vertical
                    <input type="range" className='offset-y' name='offset-y' min="-100" max="100" value={offsetY} onChange={(e) => handleChange(e)}/>
                    <input type="text" className='offset-y' onChange={(e) => handleChange(e)} value={offsetY}/>
                </label>
                <label htmlFor="blur">Intensidade do Borrão
                    <input type="range" className='blur' name='blur' min="0" max="100" value={blur} onChange={(e) => handleChange(e)}/>
                    <input type="text" className='blur' onChange={(e) => handleChange(e)} value={blur}/>
                </label>
                <label htmlFor="spread">Intensidade do Espalhamento
                    <input type="range" className='spread' name='spread' min="0" max="100" value={spread} onChange={(e) => handleChange(e)}/>
                    <input type="text" className='spread' onChange={(e) => handleChange(e)} value={spread}/>
                </label>
                <label htmlFor="blur">Cor da Sombra
                    <input type="color" id='color' name='color' onChange={(e) => handleChange(e)}/>
                </label>
            </form>
            <div className="preview-container">
                <div id="box" style={boxShadow}></div>
            </div>
        </div>
        <div className="css-rule-container" onClick={() => handleCopy()}>
            <p id='css-rule'>{`box-shadow: ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`}</p>
            <p id='copy-btn'>{copy}</p>
        </div>
    </div>
  )
}

export default BoxShadowGeneration
