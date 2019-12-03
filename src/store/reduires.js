import {fromJS} from 'immutable';

const destate=fromJS({
    mark:false
})
const reducres=(state=destate,action)=>{
    // const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "TRANSTION_ENTER":
            // newState.mark=!newState.mark
            state.set('madk',!state.get("mark"))
            return state
        // case "TRANSTION_EAIT":
        //     // newState.mark=false
        //     return newState
        default:
            return state
    }
}
export default reducres
