import { useState } from "react"

const Table=({table,setTable})=>{

    if(table.length===0){
        return (
            <p>
                No notes yet
            </p>
        )    }
    return(
        <div>
            {notes.map((note)=>(
                <div key={note.id}>
<h2>{note[key].pricetax*1000000*0.012 }</h2>
                </div>
            ))}
        </div>
    )}
