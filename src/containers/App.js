import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { teste } from '../actions/teste'
 
class App extends Component {           
    handleClick(pathImg) {        
        const { dispatch } = this.props
        dispatch(teste(pathImg))        
    }

    render() {                    
        return (
            <div>
                <button onClick={this.handleClick.bind(this, 'img/mbison.jpg')}>M. Bison</button>
                <button onClick={this.handleClick.bind(this, 'img/laura.png')}>Laura</button>

                <div><img width="500" src={this.props.pathImg} /></div>
            </div>                
        )
    }
}

const mapStateToProps = state => {       
    return {
        pathImg: state.teste
    }
}

export default connect(mapStateToProps)(App)