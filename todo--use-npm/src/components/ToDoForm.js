import React,{useReducer,useState} from 'react'
import {formReducer,initialState} from '../reducers/formReducer'
import {Card,CardHeader,CardBody,Button} from 'reactstrap'

const ToDoForm = () => {

    const [state,dispatch] = useReducer(formReducer,initialState)

    const [taskName,setTaskName]=useState('')

    const handleChange= (e)=>{
        setTaskName(e.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="task"> 
                    <input type="text" name="task" id="task" onChange={handleChange}></input>
                <Button onClick={()=>{
                    dispatch({
                        type:'ADD_TASK',
                        payload: {item:taskName,completed:false,id:Date.now()}
                    })
                }}>Add Task</Button>
                <Button onClick={()=>{
                    dispatch({
                       type:'CLEAR_COMPLETED'
                    })
                }}>Clear Completed</Button>
                </label>
            </form>
           {state.tasks.map((task)=>{
               return (
                   <Card>
                    <CardHeader>{task.id}</CardHeader>
                    <CardBody>{task.item},{`${task.completed}`}</CardBody>  
                    <Button onClick={()=>{
                        dispatch({
                            type:'TOGGLE_COMPLETED',
                            payload: task.id
                        })
                    }}>Toggle Complete</Button> 
                   </Card>
               )
           })}
        </div>
    )
}

export default ToDoForm;
