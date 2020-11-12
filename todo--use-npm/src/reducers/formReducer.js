export const initialState = [{
    item:'learn about reducers',
    completed:false,
    id:3892987589
},
{
    item:'Paint Warhammer',
    completed:false,
    id:39812401
}
]

export const formReducer = (state,action)=>{
    console.log('ol: formReducer.js state,action,', state,action)
}