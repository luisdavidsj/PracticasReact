import React, {Component} from "react";

//Componente funcional expresada con arrow function:
const Componente = props => <h2>{props.msg}</h2>

//Componente funcional:
/*function Componente(props){
    return <h2>{props.msg}</h2>
}*/

//Componente basado en clase:
/*class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>        
    }
}*/

export default Componente;