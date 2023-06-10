import { UserCart } from 'iconoir-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div className='flex'>
            <UserCart color="000000" height={35} width={35} strokeWidth={1.1}/>
            {totalQuantity > 0 ? totalQuantity : 0}
            </div>
        </Link>
    )
}

export default CartWidget