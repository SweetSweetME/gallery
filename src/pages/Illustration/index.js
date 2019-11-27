import React from 'react';
import Store from './../reducer';
import * as actions from './state/action';

export default class Illustration extends React.Component {

    componentDidMount() {
        Store.unsub && Store.unsub();
        Store.unsub = Store.subscribe(() => { this.renderDiv(Store.getState()) });
        this.renderDiv(Store.getState())
        // console.log(Store.getState());
    }

    renderDiv(myStore) {
        this.renderNumber(myStore);
    }

    renderNumber(myStore) {
        const number = document.getElementById("number");
        number.innerHTML = myStore.counter.number;

    }

    render() {
        return (
            <div>
                <h1>插画集💐</h1>
                <button onClick={() => { actions.add() }}>+</button>
                <button onClick={() => { actions.dec() }}>-</button>
                <span id="number"></span>
            </div>
        );
    }
}