import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { teste } from '../actions/teste'
 
class App extends Component {
    constructor(props) {
        super(props)    
    }   
    
    componentDidMount() {    
        const { dispatch } = this.props
        dispatch(teste('teste'))
    }

    render() {            
        return (
            <div></div>
        )
    }
}
 
App.propTypes = {      
    dispatch: PropTypes.func.isRequired
}
 
export default connect()(App)