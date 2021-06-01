import React from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import Selector from './components/Selector';

class App extends React.Component {

  constructor(){
    super();
    this.state = 
    {
      url: 'https://www.reddit.com/r/reactjs.json',
      posts:[],
    };
  }

  handleOnChange = (e) => {
    const val = e.target.value;
    this.setState({
      url: val,
    }, ()=>{
      this.gettingResponse();
    });
  }

  async gettingResponse(){
    const response = await axios.get(this.state.url);
    const reponsePosts = response.data.data.children.map((obj)=>{ return obj.data });
    console.log(reponsePosts);
    this.setState({
      posts:reponsePosts,
    });
  }

  componentDidMount(){
    this.gettingResponse();
  }

  render(){
    return (
      <div className="App">
        <Selector propsChanging={this.handleOnChange} />
        <List propPosts={this.state.posts} />
      </div>
    );
  }
}

export default App;
