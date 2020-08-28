import React from 'react';
import './Home.css';

class Home extends React.Component {

    state = {
        max: 0,
        chars:[],
        number: "",
    }

    handleClick = () => {
        var {number, chars, max} = this.state;
        if (number.length >= 14 && number.length <= 16) {

            for (let key in chars) {
                console.log(`${key} se repite ${chars[key]} veces`);
                console.log( ` ${this.state.max} , ${chars[key]}`);
               if (max < chars[key]) {
                   max = chars[key];
                    this.setState( { max: key, } )
               }
            }
        }
        else {
            alert("debe ingresar un valor entre 14 y 16 caracteres.");
        }
    }

    getCardNumber = (event) => {
        var arrayString = [];
        var {value} = event.target;
        Array.from(value).forEach(element => {
            var count = this.state.number.split(element).length -1;
            arrayString[element] = count
        });
        this.setState(
            {
                number: value,
                chars: arrayString,
            }
        )
    }

    render () {
        return (
            <div className="content">
                <label>Card Number</label>
                <input placeholder="CardNumber" onChangeCapture={this.getCardNumber}/>
                <button type="button" onClick={this.handleClick}>CALCULAR NÚMERO DE LA SUERTE</button>
                <h1>Número de la suerte es: {this.state.max}</h1>
            </div>
        )
    }
}

export default Home;