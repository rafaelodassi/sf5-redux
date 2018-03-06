const teste = (state = [], action) => {    
    switch (action.type) {
        case 'ADD_TODO':            
            return action.text        
        default:
            return state
    }
}
    
export default teste