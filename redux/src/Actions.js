// import React from 'react'
// import { createStore } from 'redux'


// export const Actions = () => {
//     const redux=require('redux')
//     const createStore=redux.createStore 
//     const Buy_cake="buy_cake"
//     function cakes(){
//         return{
//         type:Buy_cake,
//         info:"first redux action"
//     }
// }
// const intialState={
//     numOfCakes:10
// }
// const reducer=(state=intialState,action)=>{
// switch(action.type){
//     case Buy_cake:return{
//         ...state,
//         numOfCakes:state.numOfCakes-1
//     }
//     default:return state
// }
// }
// const store=createStore(reducer)
// console.log('intial state',store.getState())
//     const unscr=    store.subscribe(()=>console.log("update state",store.getState()))
//     store.dispatch(Buy_cake ())
//     store.dispatch(Buy_cake)
//     unscr()

//   return (
//     <div></div>
//   )

// }