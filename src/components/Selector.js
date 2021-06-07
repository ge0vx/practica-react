import React, { Component } from 'react'
import "./selector.css"

export default class Selector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select className="selectList" onChange={this.props.propsChanging}>
                <option value="https://www.reddit.com/r/reactjs.json">lista 1</option>
                <option value="https://www.reddit.com/r/angular.json">lista 2</option>
            </select>
        )
    }
}
