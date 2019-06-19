import React from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import Header from './postContainer/Header';
import Post from './postContainer/Post';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
     dummyData
    };
  }

  render(){
    // console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          {this.state.dummyData.map((post) => {
            return(
              <>
                <Header userImage={post.thumbnailUrl} authorName={post.username}/>
                <Post image={post.imageUrl} likes={post.likes}/>
              </>
              )
          })};
        </header>
      </div>
    );
  }
}

export default App;