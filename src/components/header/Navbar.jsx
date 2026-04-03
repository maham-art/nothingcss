import { navItems } from "../../utilis/data"



export default function Navbar(){




    return(
        <>
        
       
 <nav className="mainNav">

            <ul>
                {navItems.map(item => (
                       <li className="navItem" key ={item.id}>
                   <a href={item.link}>{item.title}</a>

                </li>
                ))}
             

            </ul>
        </nav>
        
        
        
        
        </>
    )
}