import React, {Component} from 'react';
import api from "../api";
import Error from "./common/error";
import Loader from "./common/Loader";
import {Link} from "react-router-dom";

class ExOne extends Component {
    state = {
        data: null,
        error: null,
    };
    fetchData = async () => {
        this.setState({error: null});
        try {
            const data = await api.getData();
            this.setState({data});
        } catch (error) {
            this.setState({error: error});
        }
    };
    componentDidMount() {
        this.fetchData();
    }
    render() {
        if (this.state.error !== null)
            return <Error/>;
        if (this.state.data === null)
            return <Loader/>;
        const data = this.state.data.data;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-9">
                        <h2 className='text-center mt-4 mb-3'>Ejercicio 1</h2>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            {
                                data.map(e => {
                                    const name =`${e.first_name} ${e.last_name}` ;
                                    return (<p className='m-0 text-muted small'>{`${name}. Nro. de caracteres: ${name.length-1}`}</p>)
                                })}
                            <h5 className='mt-5 text-center'>El porcentaje de personas que cuyo nombre tienen mas de 12 caracteres
                                es: {api.porcent(data).toFixed(2)}%</h5>
                            <Link to='/' className='btn btn-danger mt-3 ml-3'>Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ExOne;