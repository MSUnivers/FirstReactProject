import React, { Component } from 'react';
import '../App.css';

class MS extends Component {
    render() {
        return (
            <div className="ms-class">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}


export default MS;