import React from 'react'
import style from './CreateComment.module.css';
import { updateNewCommentText, updateNewCommentName, addNewComment } from '../../redux/state';
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
       <div className={style.regInputs}>
         <div id={style.form}>
             <b>Оценить</b>
             <div>1 2 3 4 5</div>

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

             <button type="submit" className={style.btnSend} onClick={sendComment}>Отправить</button>
             <NavLink to='/CommentsMenu'>Нааа</NavLink>
         </div>
       </div>
    )
}

export default CreateComment