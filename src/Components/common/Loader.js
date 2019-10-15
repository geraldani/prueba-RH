import React, {Component} from 'react';
import '../styles/Loader.css';

export default class Loader extends Component {
    render() {
        return (
            <div>

                <div className='max-width d-flex justify-content-center'>
                    <div className="lds-grid mt-4">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                <p className='text-center'><small className='text-muted'>Cargango</small></p>
            </div>
        );
    }
}
