import React, { Component } from 'react';
import MS from './MS';
import '../App.css';

class MSContainer extends Component {
    render() {
        return (
            <section className="ms-container">
                <MS title="maroua" description="fasdfklasfaklsjdfakjsf" />
                <MS title="nejib" description="fasdfklasfaklsjdfakjsf" />
                <MS title="haroun" description="sgzfgjhsgdjfgjsdf" />
            </section>
        );
    }
}

export default MSContainer;