import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ name, price, picture, id,watering, description, care_level}) => {
 
    const [quantityAdd, setQuantityAdd] = useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)
        const item = {
            id, name, picture, price
        }
        addItem(item,quantity, picture, price)
    }

    return (
        <><section className="Item-detail_parent max-w-full px-5 md:px-12">
            <div className="Item-detail_container flex flex-col md:flex-row justify-center justify-items-center items-center" id={id}>
                <div className="w-50 md:w-1/4 justify-self-center">
                    <img src={picture} alt={name} />
                    </div>
                <div className="px-4 w-100 md:w-1/2">
                    <h1 className="font-bold py-2 text-3xl capitalize">{name}</h1>
                    <div>
                        <h3 className="font-bold py-2 text-xl uppercase">Precio: {price} &euro;</h3>
                        <p className="py-2">{description}</p>
                        <p className="font-bold text-lg py-2 uppercase">Cuidados basicos</p>
                        <p className="font-bold py-1">Nivel de cuidado: <span className="font-light">{care_level}</span> </p>
                        <p className="font-bold">Riego: <span className="font-light">{watering}</span></p>
                    </div>
                    <div>
                    {
                        quantityAdd > 0 ? 
                        (<Link to='/cart'><button className="rounded border-2 border-green min-w-full px-5 py-3 mt-5 hover:bg-green">Terminar compra</button></Link>) 
                        : 
                        (  <ItemCount start={1} stock={8} onAdd={handleOnAdd} />)
                    }
                    </div>
                    
                </div>
              
            </div>
            
        </section> 
        </>
    )
}

export default ItemDetail