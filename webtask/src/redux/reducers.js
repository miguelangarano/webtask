export const imageSelectedReducer = (state=null, action) => {
    switch(action.type){
        case "CHANGE":{
            return action.payload
        }
        default:{
            return state
        }
    }
}