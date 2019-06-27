import React from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import SearchBar from './searchBar/SearchBar';
import Header from './postContainer/Header';
import Post from './postContainer/Post';
// import Comments from './commentsSection/Comments';
import AddNewComment from './commentsSection/AddNewComment';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
     dummyData: []
    };
  }

  componentDidMount(){
    this.setState({dummyData: dummyData})
  }

  render(){
    // console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          {this.state.dummyData.map((post) => {
            return(
              <>
                <SearchBar />
                <Header userImage={post.thumbnailUrl} authorName={post.username}/>
                <Post image={post.imageUrl} likes={post.likes}/>
                {/* <Comments comments={post.comments} /> */}
                <>
                <AddNewComment comments={post.comments} addComment={this.addComment}/>
                </>
              </>
            )
            })}
        </header>
      </div>
    );
  }
}

export default App;