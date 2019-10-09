const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_NEW_TEXT_COMMENT = 'UPDATE_NEW_TEXT_COMMENT'
const UPDATE_NEW_NAME_COMMENT = 'UPDATE_NEW_NAME_COMMENT'

const createCommentReduce = (state, action) => {
  if (action.type === ADD_COMMENT) {

     let commentsArr = state.comments
     let newCommentData = state.newCommentData
     let newId = commentsArr.length + 1
     let comment = {
       id:newId,
       name:newCommentData.name,
       text:newCommentData.text,
       date:new Date()
     }
     commentsArr.push(comment)
     console.log(commentsArr)    

  } else if (action.type === UPDATE_NEW_NAME_COMMENT) {

     state.newCommentData.name = action.name

  } else if (action.type === UPDATE_NEW_TEXT_COMMENT) {

     state.newCommentData.text = action.text
  }

  return state
}


export const addNewComment = () => ({type:ADD_COMMENT})

export const updateNewCommentText = (text) => {
    return {type:UPDATE_NEW_TEXT_COMMENT, text:text}
}

export const updateNewCommentName = (name) => {
    return {type:UPDATE_NEW_NAME_COMMENT, name:name}
}

export default createCommentReduce
