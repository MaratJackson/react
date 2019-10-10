import createCommentReduce from './createCommentReduce'
import CreateComment from '../components/CreateComment/CreateComment'

let store = {

   renderApp() {
       console.log(this._state.newCommentData)
   },

   getState() {
       return this._state
   },

   _state : {
        commentsArr : [   
          {id:1, name:'Johny', text:"Good products !", date:new Date()},
          {id:2, name:'Alexander', text:"Hello friends !", date:new Date()},
          {id:3, name:'Vladimir', text:"We are the world @", date:new Date()},
        ],
        newCommentData:{
          name:'',
          text:''
        }
      },
    
  dispatch(action){
      this._state = createCommentReduce(this._state, action)
      this.renderApp(this._state)
  },  

  subscribe(observer){
      this.renderApp = observer
    }

 }

export default store
window.store = store
 