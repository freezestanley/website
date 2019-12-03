import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider, connect } from "react-redux";

class Counter extends Component{
    render () {
        console.log(JSON.stringify(this.props))
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <div>asfasdf<span>{value}</span></div>
                <button onClick={onIncreaseClick}> +1</button>
            </div>
        )
    }
}

const increaseAction = { type: 'increase'}

function counter (state = {count: 0}, action) {
    console.log('fffffffff')
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

const store = createStore(counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

function mapStateToProps(state) {
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: ()=> dispatch(increaseAction)
    }
}
const APP = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
