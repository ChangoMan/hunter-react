import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class About extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            showModal: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {

        console.log(this.props);
        const text = this.state.liked ? 'like' : 'NO like';

        let popover = <Popover title="popover">very popover. such engagement</Popover>;
        let tooltip = <Tooltip>wow.</Tooltip>;

        return (
            <div>
                <h2>About</h2>
                <p>{this.props.params.article}</p>
                <p>{this.props.location.pathname}</p>
                <button className="btn btn-warning" onClick={this.props.toggleMobile}>Children Toggle BG</button>
                <hr />
                <h2>Simple Example</h2>
                <p onClick={this.handleClick}>You {text} this</p>
                <hr />
                <h2>Bootstrap Components</h2>
                <p><Button bsStyle="primary">Primary</Button></p>
                <p>
                    <LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
                        <Button>Foo</Button>
                    </LinkContainer>
                </p>
                <hr />
                <p><button className="btn btn-danger" onClick={this.openModal.bind(this)}>Open Modal</button></p>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <h4>Popover in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                    <h4>Tooltips in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                    <hr />

                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.closeModal.bind(this)}>Close</Button>
                  </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
