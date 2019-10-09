const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_NEW_TEXT_COMMENT = 'UPDATE_NEW_TEXT_COMMENT'
const UPDATE_NEW_NAME_COMMENT = 'UPDATE_NEW_NAME_COMMENT'

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
    

  addComment(){
      let commentsArr = this._state.comments
      let newCommentData = this._state.newCommentData
      let newId = commentsArr.length + 1
      let comment = {
         id:newId,
         name:newCommentData.name,
         text:newCommentData.text,
         date:new Date()
      }
      commentsArr.push(comment)
      this.renderApp(this._state)
      console.log(commentsArr)      
  },

 
  updateText(text) {
      this._state.newCommentData.text = text
      this.renderApp(this._state)
  },
  
  updateName(name) {
      this._state.newCommentData.name = name
      this.renderApp(this._state) 
  },


  dispatch(action){
      if (action.type === ADD_COMMENT) {
         this.addComment()
      } else if (action.type === UPDATE_NEW_TEXT_COMMENT) {
         this.updateText(action.text)
      } else if (action.type === UPDATE_NEW_NAME_COMMENT) {
         this.updateName(action.name)
      }
  },  

  subscribe(observer){
      this.renderApp = observer
    }

 }

 export const addNewComment = () => ({type:ADD_COMMENT})

 export const updateNewCommentText = (text) => {
     return {type:UPDATE_NEW_TEXT_COMMENT, text:text}
 }

 export const updateNewCommentName = (name) => {
     return {type:UPDATE_NEW_NAME_COMMENT, name:name}
 }

export default store
window.store = store
 