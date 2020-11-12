import ToDoForm from "../components/ToDoForm"

export const initialState = {
    tasks:[{
    item:'learn about reducers',
    completed:false,
    id:3892987589
},
{
    item:'Paint Warhammer',
    completed:false,
    id:39812401
}]
}

export const formReducer = (state,action)=>{
    console.log('ol: formReducer.js state,action,', state,action)

    switch(action.type){
        case 'TOGGLE_COMPLETED':
            return{
                ...state,
                tasks: state.tasks.map(task=>{
                    if(task.id !== action.payload){
                        return task
                    }
                    return {
                        ...task,
                        completed:!task.completed
                    }
                })
            }
        default:
            return {
                state
            }
    }
}