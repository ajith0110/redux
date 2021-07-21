import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of IceCreams {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy IceCreams</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfIceCream:state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer) 
