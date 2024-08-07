import React from 'react'
import { connect } from 'react-redux'
// import { buyCake } from '../redux/cake/cakeActions'
import { buyCake } from '../redux'
function CakeContainer(props) {
  return (
    <div>
        <h2>number of cakes-{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>buy cakes</button>

        
    </div>
  )
}

const mapStateToProps=state=>{
return{
    numOfCakes:state.cake.numOfCakes
}
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)