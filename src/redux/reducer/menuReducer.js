
import initialState from "../initialState";




export default function menuReducer(state = initialState, action) {

    switch (action.type) {

        case "ADD_ITEM":
            state.item = [...state.item , action.payLoad]
            return state;
            
      
        default:
            return state;
    }

}