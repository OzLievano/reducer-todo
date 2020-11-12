import React from 'react'

const ToDoForm = () => {
    return (
        <div>
           <form>
            <label htmlFor="taskName">
                <input type="text" name="taskName" id="taskName"/>
            </label>
           </form> 
        </div>
    )
}

export default ToDoForm;
