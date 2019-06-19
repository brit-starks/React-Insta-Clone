import React from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import header from './postContainer/Header';
import Header from './postContainer/Header';

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
                <Header avatar={post.thumbnailUrl} authorName={post.username}/>
              </>
              )
          })}
           <h1>Works!</h1>
        </header>
      </div>
    );
  }
}


export default App;