import React from 'react';
import CommentsMenu from './components/CommentsMenu/CommentsMenu';
import CreateComment from './components/CreateComment/CreateComment';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
  
  let routes = {
    comments:props.state.createCommentReduce.comments,
    dispatch:props.dispatch,
    newCommentData:props.state.createCommentReduce.newCommentData
  }
  
  return (
      <BrowserRouter>
        <div>
          <h1></h1> 
          <Route path='/commentsMenu' render={ ()=> <CommentsMenu commentsArr={routes.comments} /> } />
          <Route path='/createComment' render={ () => <CreateComment dispatch={routes.dispatch} state={routes.newCommentData}/>} />
        </div>
       </BrowserRouter>
  );
}

export default App;
