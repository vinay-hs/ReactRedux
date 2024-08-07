import React from 'react'
import { connect } from 'react-redux'
import { icecream } from '../redux'

function IcecreamContainer(props) {
  return (
<div>
        <h2>number of IcecreamContainer-{props.numOfIcecream}</h2>
        <button onClick={props.icecream}>buy Icream</button>

    
    </div>
  )
}

const mapStateToProps=state=>{
return{
    numOfIcecream:state.icecream.numOfIcecream
}
}

const mapDispatchToProps=dispatch=>{
    return{
        icecream:()=>dispatch(icecream())
    }
}
 

export default connect(mapStateToProps,mapDispatchToProps) (IcecreamContainer)