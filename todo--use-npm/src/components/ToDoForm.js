import React,{useReducer,useState} from 'react'
import {formReducer,initialState} from '../reducers/formReducer'
import {Card,CardHeader,CardBody,Button} from 'reactstrap'

const ToDoForm = () => {

    const [state,dispatch] = useReducer(formReducer,initialState)

    return (
        <div>
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
