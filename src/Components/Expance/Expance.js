import AddExpance from "./AddExpance";
import { useState } from "react";
export default function Expance(){
    let [amount ,setAmount] = useState('')

    function handleExpance(){
        console.log("test()");
    }
    function handleSubmit(data){
        setAmount(data)
    }
    return(
        <div className="loging">
            {/* <button className="btn btn-primary" onClick={handleExpance}>Add Expance</button> */}
            <AddExpance onSubmit={handleSubmit}/>
            <h5 className="text-center text-primary"> chaild to parent amount is:{amount}</h5>
        </div>
    )
}