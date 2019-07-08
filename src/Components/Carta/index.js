import React from 'react'
import './carta.css'
import img1 from './imagens/1.jpg'
import img2 from './imagens/2.jpg'
import img3 from './imagens/3.jpg'
import img4 from './imagens/4.jpg'
import img5 from './imagens/5.jpg'
import img6 from './imagens/6.jpg'
import img7 from './imagens/7.jpg'
import img8 from './imagens/8.jpg'
import img9 from './imagens/9.jpg'
import img10 from './imagens/10.jpg'
import img11 from './imagens/11.jpg'
import img12 from './imagens/12.jpg'
import img13 from './imagens/13.jpg'
import img14 from './imagens/14.jpg'



export default class Carta extends React.Component{
    constructor(props){
        super(props)
        this.state = {virado:false }
 
    } 
    imagens = [ 
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14
        ]
    viraCarta =()=>{
        this.setState((anterior)=> ({virado: !anterior.virado}))

    }


    render(){
  
        return(
            <div className='carta' id={this.props.carta.verificador} onClick={this.viraCarta}>
                <div className={'face frente ' + (this.state.virado? "virado":'')} >
                    <img alt={this.props.carta.verificador} src={this.imagens[this.props.carta.indice]}></img>
                </div> 
                <div className={'face verso ' + (this.state.virado&& "virado")} ></div>
            </div>
        )
    }
}