import React from 'react'
import "./item.css"

const Item = (props) => props.propItem.map(post => <li className='Item'>{post.author}</li>);
export default Item;
