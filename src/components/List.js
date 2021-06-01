import React, { Component } from 'react';
import "./list.css"
import Item from './Item';
export default class List extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.propPosts.map((post) => { 
                        return (
                        <li>
                            <span style={{color: 'red'}}>{post.author} </span>
                            <span style={{color: 'blue'}}>{post.title} </span>
                        </li>);
                    })
                }
            </ul>
        )
    }
}
