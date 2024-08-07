import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../Redux/cake/CakeAction'
function CakeContainer( props) {
  return (
    <div className='App'>
        <h2>Number of cakes-{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}
const mapStateToProps=state=>{
  return{
    numOfCakes:state.numOfCakes
  }

}
const mapDispatchToprops=dispatch=>{
  return{
buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToprops)( CakeContainer)