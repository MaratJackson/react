import React from 'react';
import CommentsMenu from './components/CommentsMenu/CommentsMenu';
import CreateComment from './components/CreateComment/CreateComment';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
  return (
      <BrowserRouter>
        <div>
          <h1>Title</h1> 
          <Route path='/commentsMenu' render={ ()=><CommentsMenu state={props.state.comments} /> } />
          <Route path='/createComment' render={ () => <CreateComment dispatch={props.dispatch} state={props.state.newCommentData}/>} />
        </div>
       </BrowserRouter>
  );
}

export default App;
