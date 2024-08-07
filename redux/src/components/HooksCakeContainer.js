import { useSelector } from "react-redux";

function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    return(
        <div>
            <h2>num of cakes-{numOfCakes}</h2>
            <button>buy cake</button>
        </div>
    )
}
export default HooksCakeContainer