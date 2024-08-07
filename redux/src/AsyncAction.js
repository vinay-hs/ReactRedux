// const redux=require('redux')
// const createStore=redux.createStore
// initailState={
//     loading:true,
//     users:[],
//     error:''
// }

// const user_fetch_request="user_fetch_request"
// const user_fetch_success="user_fetch_success"
// const user_fetch_faliure="user_fetch_error"

// const userFetchRequest=()=>{
//     return{
//         type:user_fetch_success
//     }
// }
// const userFetchSucess=users=>{
//     return{
//         type:user_fetch_request,
//         payload:users
//     }
// }
// const userFetchError=error=>{
//     return{
//         type:user_fetch_faliure,
//         payload:error
//     }
// }
// const reducer=(state=initailState,action)=>{
//     switch(action.type){
//         case user_fetch_request:
//             return{
//                 ...state,
//                     loading:true
//             }
//             case user_fetch_success:
//                 return{
//                         loading:false,
//                         users:action.payload,
//                         error:''
//                 }
//                 case user_fetch_faliure:
//                     return{
//                         loading:false,
//                         user:[],
//                         error:action.payload

//                     }
//     }
// }
// const store =createStore(reducer)