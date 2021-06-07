import React, { Component } from 'react';
import "./list.css";
import Item from './Item';

const List = (props) => (<ul>{<Item propItem={props.propPosts}></Item>}</ul>); 
export default List;
