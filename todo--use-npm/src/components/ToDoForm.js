import React,{useReducer} from 'react'
import {formReducer,initialState} from '../reducers/formReducer'

const ToDoForm = () => {

    const [state,dispatch] = useReducer(formReducer,initialState)

    console.log(state)
    return (
        <div>
           <form>
            <label htmlFor="taskName">
                <input type="text" name="taskName" id="taskName"/>
            </label>
           </form>
           <div>
               {state.map((item)=>{
                   return (
                   <div>
                    {item.item},{item.id},{item.complete}
                   </div>
                   )
               })}
           </div> 
        </div>
    )
}

export default ToDoForm;
