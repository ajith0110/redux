import {BUY_ICECREAM} from './iceCreamType'

const initialState ={
    numberOfIceCream:110

}


 const iceCreamReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numberOfIceCream: state.numberOfIceCream-1

        }

        default : return state


    }
}

export default iceCreamReducer