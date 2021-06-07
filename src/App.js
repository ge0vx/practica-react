import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import Selector from './components/Selector';

export default function App() {
  const [url, setUrl] = useState('https://www.reddit.com/r/reactjs.json');
  const [list, setlist] = useState([]);

  useEffect( ()=>{
    haddleResponse();
    console.log('hola');
  },
  [url]
  );

  const haddleResponse = async () => {
    const response = await axios.get(url);
    const reponsePosts = response.data.data.children.map((obj)=>{ return obj.data });
    setlist(reponsePosts);
  }

  const handleOnChange = (e) => {
    const val = e.target.value;
    setUrl(val);
  }

  console.log(url);

  return (
    <div className="App">
        <Selector propsChanging={handleOnChange} />
        <List propPosts={list} />
    </div>
  )
}
