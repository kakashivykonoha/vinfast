import { useState } from "react";
import InterestCalculator2 from "./bank2";
import { Tableloan } from "./tableloanoutput";
export const Middleware=()=>{
const [output,setoutput]=useState('')
console.log(output)
//output ban đâu bằng 0 vậy thì update qua setoutput

return (<div>
    <InterestCalculator2 setloanoutput={setoutput} loanoutput={output}/>
<Tableloan output={output}/>

</div>)
}