import React, {Component} from 'react';
import "./App.css";
import {connect} from "react-redux";
import {encodeMessage, postMessage} from "./store/action";

class App extends Component {
    state = {
        encode: '',
        password: '',
        decode: '',
        disable: false
    };
    onClickHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    };
    clickHandler = async () => {
        await this.props.postMessage({decode: this.state.decode, password: this.state.password});
        this.setState({encode: this.props.messageThis, decode: ''})
    };
    encodeHandler = async () => {
       await this.props.encodeMessage({encode: this.state.encode, password: this.state.password});
        this.setState({decode: this.props.messageThis, encode: ''})
    };


    render() {
        let disabled = false;
        if (this.state.password === ''){
             disabled = true
        }
        return (
            <div className="App">
                <div>
                    <input value={this.state.decode} onChange={this.onClickHandler} name="decode" className="up" type="textarea"
                           placeholder="Decoded message"/>
                </div>
                <div>
                    <input onChange={this.onClickHandler} name="password" className="centre" type="text"
                           placeholder="Enter password"/>
                    <button disabled={disabled} onClick={this.clickHandler} className="encode">Decode</button>
                    <button disabled={disabled} onClick={this.encodeHandler} className="decode">Encode</button>
                </div>
                <div>
                    <input value={this.state.encode} onChange={this.clickHandler} name="encode" className="dawn" type="textarea"
                           placeholder="Encoded message"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messageThis: state.message
});

const mapDispatchToProps = dispatch => ({
    postMessage: (data) => dispatch(postMessage(data)),
    encodeMessage: (data) => dispatch(encodeMessage(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

