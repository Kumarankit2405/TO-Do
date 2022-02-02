import React from "react"

function Todo(props){
    return(
        <>

          <div className="card mycard" >
           <div className="card-body">
           <h5 className="card-title">Todo Item</h5>
            
             <p className="card-text">{props.text}</p>
              <button  className="btn btn-light" onClick={()=>{
                     props.onSelect(props.id)
                 }}><i class="material-icons">delete</i></button>
            
        </div>
     </div>



                {/*  <button type="submit" onClick={()=>{
                     props.onSelect(props.id)
                 }}>-</button>{props.text}*/}
        </>
    )
}
export default Todo