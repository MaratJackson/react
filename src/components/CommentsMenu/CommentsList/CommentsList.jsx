import React from "react";
import style from './CommentsList.module.css';


let CommentsList = (props) => {

    let getComments = props.data.map(function(elem){
          return <ul>
               <li>1 2 3 4 6</li>
               <li className={style.text}>{elem.text} </li>
               </ul>
        })
    

    return (
        <div>
           <p> 
             <b className={style.nameUser}>Nicname</b>
           </p>
           <br></br>
             {getComments}
        </div>
    )
}


export default CommentsList