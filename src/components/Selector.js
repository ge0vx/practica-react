import React, { Component } from 'react'

export default class Selector extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <select onChange={this.props.propsChanging}>
                <option value="https://www.reddit.com/r/reactjs.json">temas react</option>
                <option value="https://www.reddit.com/r/angular.json">temas angular</option>
            </select>
        )
    }
}
