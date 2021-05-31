import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <>
           <div class="header">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <Link to="/"><img src="imLinkges/logo.png" alt="logo" width="125px"/></Link>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
                <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"/></a>
                <img src="images/menu.png" class="menu-icon" onclick="menutoggle()"/>
            </div>
           
        </div>
    </div>

  
        </>
    );
}