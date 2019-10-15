import React, {Component} from 'react';
import api from "../api";
import Error from "./common/error";
import {Link} from "react-router-dom";
import Loader from "./common/Loader";

class ExTwo extends Component {
    state = {
        error: null,
        value: '',
        imageVector: null,
        displayError: false,
        loading: false
    };
    onChange = e => {
        this.setState({
            value: e.target.value
        })
    };
    onclick = e => {
        e.preventDefault();
        this.setState({loading: false, error: null});
        if (this.state.value !== '') {
            this.setState({
                displayError: false,
                loading: true
            })
            this.fetchImage()
                .then(() => {
                    this.setState({loading: false})
                });
        } else
            this.setState({
                displayError: true,
            })
    };
    fetchImage = async () => {
        this.setState({error: null});
        try {
            const Image = await api.getImages(this.state.value);
            this.setState({imageVector: Image});
        } catch (error) {
            this.setState({error: error});
        }
    };
    render() {
        if (this.state.error)
            return <Error/>;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-9">
                        <h2 className='text-center mt-4'>Ejercicio 2</h2>
                        <form>
                            <div className="form-group">
                                <label className='text-center' htmlFor='numberId'>
                                    Introduzca el numero de la pagina
                                </label>
                                <input
                                    className="form-control"
                                    type='number'
                                    id='numberId'
                                    value={this.state.value}
                                    onChange={this.onChange}/>
                                {
                                    this.state.displayError &&
                                    <div className="invalid-feedback">Por favor, rellene el campo.</div>
                                }
                            </div>
                            <button type='submit' className='btn btn-primary mt-3' onClick={this.onclick}>Enviar
                            </button>
                            <Link to='/' className='btn btn-danger mt-3 ml-3'>Regresar</Link>

                        </form>
                        {
                            this.state.loading ?
                                <Loader/>
                                : this.state.imageVector !== null && this.state.imageVector.length !== 0 ?
                                <div className='mt-4 d-flex justify-content-center'>
                                    {this.state.imageVector.map(e => <img key={e.id} className='mr-1' src={e.image} alt='avatar'/>)}
                                </div>
                                : <p className='text-center mt-4'> No hay imagenes para mostrar</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default ExTwo;