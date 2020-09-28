import React, {useState} from 'react';
import Note from './Note';

var total;

function Total(){
    return (
        <div>
            <h1>Total: {this.props.count}</h1>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );


}

export default Total;