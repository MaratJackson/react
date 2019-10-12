import React from 'react'
import createCommentReduce, { updateNewCommentText, updateNewCommentName, addNewComment } from '../../redux/createCommentReduce';
import CreateComment from './CreateComment';



let CreateCompanentContainer = (props) => {
    
    let dispatchNameUpdate = (name) => {
        props.dispatch(updateNewCommentName(name))
    }

    let dispatchTextUpdate = (text) => {
        props.dispatch(updateNewCommentText(text))
    }

    let dispatchAddComment = () => {
        props.dispatch(addNewComment())
    }

    return (<CreateComment 
        updateName={dispatchNameUpdate} 
        updateText={dispatchTextUpdate}
        addComment={dispatchAddComment}
        nameInput = {props.state.createCommentReduce.newCommentData.name}
        textInput = {props.state.createCommentReduce.newCommentData.text}
        />
        )

}

export default CreateCompanentContainer