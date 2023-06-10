import CartWidget from "../CartWidget/CartWidget"
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <nav className="relative w-full h-24 z-50">
                <div className="fixed top-0 md:flex flex-wrap items-center justify-between px-6 shadow-lg py-3 bg-white mb-3 w-[inherit]">
                <Link to="/">
                    <img src={logo} alt="" width="120" />
                </Link>
                <div>
                    <Link to='/category/indoor'>
                        <button className='px-4 py-2 mx-4 hover:underline'>Interior</button>
                    </Link>
                    <Link to='/category/outdoor'>
                        <button className='px-4 py-2 mx-4 hover:underline'>Exterior</button>
                    </Link>
                    <Link>
                        <button className='px-4 py-2 mx-4 hover:underline'>Flores</button>
                    </Link>
                </div>
                <div> <CartWidget /> </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar