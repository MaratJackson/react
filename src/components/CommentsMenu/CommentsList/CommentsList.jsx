import React from "react";
import style from './CommentsList.module.css';


let CommentsList = (props) => {

    let getComments = props.data.map(function(elem){
          return <div>
                   <p><b className={style.nameUser}>{elem.name}</b></p>
                   <br></br>
                   <ul>
                     <li></li>
                     <li className={style.text}>{elem.text} </li>
                   </ul>
                 </div>
        })
    

    return (
        <div>
         {getComments}
        </div>
    )
}


export default CommentsList
