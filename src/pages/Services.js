import React, { Component } from 'react';
import Service from '../components/Service';

export default class Services extends Component {

    constructor() {
        super();

        this.state = {
            total: 0,
            items: [
                { name: 'Web Development', price: 777 },
                { name: 'Design', price: 400 },
                { name: 'Integration', price: 250 },
                { name: 'Training', price: 220 }
            ]
        }
    }

    addTotal(price) {
        this.setState({
            total: this.state.total + price
        });
    }

    render() {

        const services = this.state.items.map((s, index) => {
            return <Service key={index} name={s.name} price={s.price} active={s.active} addTotal={this.addTotal.bind(this)} />
        });

        return (
            <div>
                <h2>Services</h2>
                <hr />
                <div>
                    {services}
                    <p><strong>Total:</strong> ${this.state.total.toFixed(2)}</p>
                </div>
            </div>
        );
    }
}
