import { useState } from "react";
export default function AddExpance({onSubmit}){
    let [amount ,setAmount] = useState('')
    function handleExpance(event){
        setAmount(event.target.value)
    }
    function handleSubmit(){
        onSubmit(amount)
    }
    function cancel(){
      onSubmit(0)
    }
return (
    <div className="p-50 w-50 border border-primary shadow mx-auto bg-info">
        <div className="p-2">
        <h4 className="text-center text-primary">Chaild component</h4>
        <input  type ="text" className="form-control mt-2 W-50" placeholder="Enter Expance" onChange={handleExpance} value={amount}/>
        <button className="btn btn-primary mt-2 ms-2 mb-0" onClick={handleSubmit}>subAmount</button>
        <button className="btn btn-primary mt-2 ms-2 mb-0" onClick={cancel}>cancel</button>
        </div>
    </div>
)
}