
import data from "../data"
/* import destinator from "../photo/destinator.jpeg"
import mitsubishixforce2025 from '../photo/mitsubishixforce2025.jpg' */
function ProductHeader(){
const listItem = data.map(
    item=>(<p>
    <img src={item.image} alt="" style={{height: "150px",width:'250px',padding:'10px'}} />
    <h2><strong>{item.title}</strong></h2>
    <h3>{item.desc}</h3>
</p>
    ))

console.log(data)

return (
<div className="productheader">

{listItem }


</div>

    )}
export default ProductHeader