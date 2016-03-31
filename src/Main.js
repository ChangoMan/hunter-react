import React, { Component } from 'react';
import Sidebar from './Sidebar';

export default class Main extends Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div className="site-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <main className="site-main">

                                <h1>{this.props.title}</h1>

                                <div className="form-group">
                                    <input className="form-control" value={this.props.title} onChange={this.handleChange.bind(this)} />
                                </div>

                            </main>
                        </div>
                        <div className="col-sm-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
