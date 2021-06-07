import React from 'react'
import "./list.css"

export default function List({ propPosts }) {
    return (
        <ul style={{border: '1px solid blue', width:'100%', minHeight:'300px'}}>
                {
                    propPosts.map((post) => { 
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

