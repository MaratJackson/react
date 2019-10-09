import React from "react";
import CommentsList from './CommentsList/CommentsList'
import {NavLink} from 'react-router-dom'

import style from './CommentsMenu.module.css';

let CommentsMenu = (props) => {

  //  let nameUser = React.createRef()

//    let sayHello = () => {
//        let name = nameUser.current.value 
//        props.addUser(name)
//        nameUser.current.value = ''
//    }

    // let nameInput = () => {
    //   let name = nameUser.current.value 
    //   console.log(name)
    // }



    return (
        <div className={style.regInputs}>
            <div id={style.form}>
              <b className={style.nameForm}>Отзывы магазина</b>
                <button type="submit" className={style.regBtn}><NavLink to='/CreateComment'>Написать отзыв</NavLink></button> 
                {/* <NavLink to='/CreateComment'>Нааа</NavLink> */}
                <CommentsList data={props.state}/>                                                    
            </div>
        </div>
    )


}

export default CommentsMenu