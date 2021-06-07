import React from 'react';
import axios from 'axios'
import './App.css';
import List from './components/List'
import Selector from './components/Selector'
import Row from './components/Row'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      url: 'https://www.reddit.com/r/reactjs.json',
      posts: []
    };
  }

  handleOnChange = (e) => {
    const val = e.target.value;
    this.setState({
      url: val
    }, () => {
      this.gettingReponse();
    });
  }

  async gettingReponse() {
    const response = await axios.get(this.state.url);
    const responsePosts = response.data.data.children.map(obj => {return obj.data});
    console.log(responsePosts);
    this.setState({
      posts: responsePosts
    });
  }

  componentDidMount() {
    this.gettingReponse();
  }

  render() {
    return (
      <div className="App">
        <Selector propsChanging = {this.handleOnChange} />
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <Row propBooks={this.state.posts}></Row>
          </tbody>
        </table>
        <List propPosts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
