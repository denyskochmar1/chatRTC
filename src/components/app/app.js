import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">Hello</div>
        );
    }
}


export default connect(
    state => {
        return {
        }
    },

    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(App);
