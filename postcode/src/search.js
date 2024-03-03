import { useState } from "react";
import { Display } from "./display";




export const Search = () => {
    const [code, setCode] = useState("");

    const displayCode = () => {
        const pin = code.trim();
        if(pin){
            console.log(pin)
        }
    }

    const changeInput = (e) => {
        setCode(e.target.value)
    }

    return (
        <div className="container">
            <h5>Enter Pincode</h5>
            <input onChange={changeInput} value={code} placeholder="Pincode" />
            <button  onClick={displayCode}>Lookup</button>
        </div>
    )
}