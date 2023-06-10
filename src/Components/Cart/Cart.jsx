import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmojiSad } from 'iconoir-react';
const Cart = () => {
    const { cart, clear, removeItem, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="flex flex-col justify-center content-start items-center">
                <h2 className="text-xl my-10">Carrito de compras</h2>
                <div> <EmojiSad color="000000" height={60} width={60} strokeWidth={0.5}/></div>
                <p className="my-10">No hay productos en el carrito</p>
                <Link to='/'><button className="border border-green hover:bg-green rounded-lg text-sm w-full px-5 py-2.5 text-center">Volver a productos</button></Link>
            </div>
        )
    }


    return (
        <div>
            <div className="px-8">
                <Link to='/'> {'<'} Volver</Link>
            </div>
            <h2 className="text-xl my-10 px-8">Carrito de compras</h2>
            {cart.map((item) => {
                return (
                    <>
                        <div className="px-8">
                        
                            <div key={item.id} className="md:flex items-center mt-14 py-8 border-b border-green justify-between">
                                <div className="w-40">
                                    <img src={item.picture} alt={item.picture} className="w-full h-full object-center object-cover" />
                                </div>
                                <div className="md:pl-3 md:w-3/4">
                                    <div className="flex items-center justify-between w-full pt-1">
                                        <p className="text-base font-black leading-none">{item.name}</p>
                                    </div>
                                    <p className="text-sm leading-3 text-gray-600 pt-2">Cantidad: {item.quantity}</p>
                                    <p className="text-sm leading-3 text-gray-600 pt-2">Precio por unidad: {item.price} &euro;</p>
                                    <div className="flex items-center justify-between pt-5 pr-6">
                                        <div className="flex itemms-center">
                                            <button className="text-xs leading-3 underline cursor-pointer" onClick={() => removeItem(item)}>Eliminar item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                       
                    </>
                )
            })}
            <div>
            <p className="flex justify-end font-black px-8 h-20 text-2xl">Total: {total} &euro;</p>
            </div>
            <div className="px-8 flex flex-row flex-wrap justify-between items-center h-40">
                <button className="text-sm md:text-md leading-3 underline text-red-500 cursor-pointer" onClick={() => clear()}>Eliminar productos</button>
                <div>
                    <Link to='/checkout' className="border border-green hover:bg-transparent bg-green font-medium rounded-lg text-sm md:text-md w-full sm:w-auto px-5 py-2.5 text-center">CHECKOUT</Link>
                </div>
            </div>
        </div>
    )

}

export default Cart  