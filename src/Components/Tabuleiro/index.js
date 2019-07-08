import React from 'react';
import Carta from '../Carta'
import './tabuleiro.css'
import { isNull } from 'util';


class Tabuleiro extends React.Component{

    embaralhar (array) {
        let indice_atual = array.length, valor_temporario, indice_aleatorio;
     
        while (0 !== indice_atual) {
     
            indice_aleatorio = Math.floor(Math.random() * indice_atual);
            indice_atual -= 1;
     
            valor_temporario = array[indice_atual];
            array[indice_atual] = array[indice_aleatorio];
            array[indice_aleatorio] = valor_temporario;
        }
     
        return array;
    }
    listaCartas=[
        {indice:0,verificador:0},
        {indice:1,verificador:1},
        {indice:2,verificador:2},
        {indice:3,verificador:3},
        {indice:4,verificador:4},
        {indice:5,verificador:5},
        {indice:6,verificador:6},
        {indice:7,verificador:0},
        {indice:8,verificador:1},
        {indice:9,verificador:2},
        {indice:10,verificador:3},
        {indice:11,verificador:4},
        {indice:12,verificador:5},
        {indice:13,verificador:6},
    ]

    anterior =null

    verificaIgual(verificador){
        
        if(isNaN(verificador.id)) return
        if (isNull(this.anterior)){
            this.anterior = verificador
            return
        }
        if ((verificador.id === this.anterior.id)&&(verificador.id!=='')){
                this.anterior.className="carta vencedora"
                verificador.className="carta vencedora"
        }
        else{
            verificador.className='carta'
            this.className='carta'
        }
        this.anterior =null
    }
    cartas =this.embaralhar(this.listaCartas)
    render(){
        return (
            <div className='tabuleiro' onClick={ e=>this.verificaIgual(e.target.parentNode)}>
                {this.cartas.map((carta) =><Carta key={carta.indice} carta={carta}>
                </Carta>)}
            </div>
        )
    }
    
}

export default Tabuleiro