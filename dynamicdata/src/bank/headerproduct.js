import './header.css';
import { useState } from 'react';
import ProductHeader from './product';
function Header(){
const [show,setShow]=useState(false)
return (
        <div>
<nav className="Header">
  <form className="Header">
    <button onClick={()=>setShow(!show)} type="button">Model</button>

  </form>
</nav>
{show&&<ProductHeader/>}
</div>
    )
}
export default Header