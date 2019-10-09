import createCommentReduce from './createCommentReduce'
// import CreateComment from '../components/CreateComment/CreateComment'

let store = {

   renderApp() {
       console.log(this._state.newCommentData)
   },

   getState() {
       return this._state
   },

   _state : {
        comments : [   
          {id:1, name:'Johny', text:"Lalaal lalala lalal alall alalll aallla lallllala lalalalala lalalall laalalalal alllllaallalala allll Lalaal lalala lalal alall alalll aallla lallllala lalalalala lalalall laalalalal alllllaallalala alll"},
          {id:2, name:'Alexander', text:"Lalaal lalala lalal alall alalll aallla lallllala lalalalala lalalall laalalalal alllllaallalala allll"},
          {id:3, name:'Vladimir', text:"Lalaal lalala lalal alall alalll aallla lallllala lalalalala lalalall laalalalal alllllaallalala allll"},
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
 
