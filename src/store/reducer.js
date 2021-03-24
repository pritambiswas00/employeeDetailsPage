const initialState = {
     employee :{
        name : '',
        role : '',
        location : '',
        status : '',
     }
}


const reducer = (state = initialState, action) => {
    if(action.type === 'SET'){
         return {
             ...state.employee,
            name: action.name,
            role: action.role,
            location: action.location,
            status: action.status
         }
    }
    return state;
}

export default reducer ;