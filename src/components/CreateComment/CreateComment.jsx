import React from 'react'
import style from './CreateComment.module.css';
import { updateNewCommentText, updateNewCommentName, addNewComment } from '../../redux/createCommentReduce';
import {NavLink} from 'react-router-dom'


let CreateComment = (props) => {

    
    let textUpdate = (event) => {
       let text = event.target.value
       props.dispatch(updateNewCommentText(text))
    }

    let nameInputUpdate = (event) => {
      let name = event.target.value
      props.dispatch(updateNewCommentName(name))
    }

    let sendComment = () => {
       props.dispatch(addNewComment())
    }

    return (
       <div className={style.createCommentBody}>
         <div id={style.form}>
         <NavLink to='/CommentsMenu'>
           <div className={style.triangle}></div>
         </NavLink>
             <br></br>
             <b>Оценить</b>
             <div></div>

             <input 
               className={style.nameInput} 
               type="text" 
               placeholder="Укажите ваш никнейм"
               onChange={nameInputUpdate}
               value={props.state.name}
               >
             </input>

             <textarea 
               minLength='20' 
               className={style.textComment} 
               placeholder="Расскажите что можно улучшить?"
               onChange={textUpdate}
               value = {props.state.text}
               >
             </textarea>

             <button type="button" className={style.btnSend} onClick={sendComment}>Отправить</button>
         </div>
       </div>
    )
}

export default CreateComment