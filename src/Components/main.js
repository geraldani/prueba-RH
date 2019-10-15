import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './styles/styles.css'

class Main extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center mt-5'>
                <Link to="/exercise1" className='btn btn-dark mr-3'>Ir al ejercicio 1</Link>
                <Link to="/exercise2" className='btn btn-secondary'>Ir al ejercicio 2</Link>
            </div>
        )
    }
}
export default Main;