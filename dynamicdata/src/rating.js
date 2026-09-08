import { useState } from "react";
import { CiStar } from "react-icons/ci";

const Rating=({heading})=>{
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0)
    const feedbackMessages=['Terrible','Poor','Fair','Good','Excellent']
    const stars=[1,2,3,4,5]
      return (
       <div className='rating-cars'>
        <h2>{heading}</h2>
<div >
   {stars.map((star)=>(
    <span  onClick={()=>setRating(star)}
    onMouseEnter={()=>setHover(star)}
    /* onMouseLeave={()=>setHover(0)} */
       

    key={star} className={`star ${star<=(hover||rating)?'active':''}`}>< CiStar className='stars'/></span>
))}
      
{/*  không hiểu tại sao item này trong ngoặc nhọn */} 
</div>
{rating}
{hover}
</div>)
}
export default Rating         
