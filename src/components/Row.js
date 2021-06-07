import React from 'react'
import Column from './Column'

const Row = (book) => (<tr><Column propDetails={book.author}></Column><Column propDetails={book.title}></Column></tr>);
export default Row;
