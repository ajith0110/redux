import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state=>state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num Of Cakes : {numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy</button>
        </div>
    )
}

export default HookCakeContainer
