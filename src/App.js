import React from 'react';
import CommentsMenu from './components/CommentsMenu/CommentsMenu';
import CreateCommentContainer from './components/CreateComment/CreateCommentContainer';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
 
  return (
      <BrowserRouter>
        <div>
          <h1></h1> 
          <Route path='/commentsMenu' render={ ()=> <CommentsMenu commentsArr={props.state.createCommentReduce.comments} /> } />
          <Route path='/createComment' render={ () => <CreateCommentContainer dispatch={props.dispatch} state={props.state}/>} />
        </div>
       </BrowserRouter>
  );
}

export default App;
