import React from "react";
import CommentsList from './CommentsList/CommentsList'
import {NavLink} from 'react-router-dom'

import style from './CommentsMenu.module.css';

let CommentsMenu = (props) => {

    return (
        <div className={style.commentsBody}>
            <div id={style.form}>
              <b className={style.nameForm}>Отзывы магазина</b>
                <button type="submit" className={style.addCommentBtn}><NavLink to='/CreateComment'>Написать отзыв</NavLink></button> 
                <CommentsList data={props.commentsArr}/>                                                    
            </div>
        </div>
    )


}

export default CommentsMenu