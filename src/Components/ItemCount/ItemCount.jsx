import { useState } from "react"
import { AddCircle } from 'iconoir-react';
import { MinusCircle } from 'iconoir-react';

const ItemCount = ({start, stock, onAdd}) => {

    const [quantity, setQuantity] = useState(start)
    const sum = () =>{
        quantity < stock && setQuantity(quantity + 1)
    }

    const minus = () =>{
       quantity > 1 && setQuantity(quantity - 1)
    }

    return (
        
        <section className='flex flex-col justify-center content-center items-center p-5 w-auto max-w-full'>
                <div className="flex justify-between self-center min-w-full py-5" >
                    <button onClick={minus} ><MinusCircle color="#CAE3CF" height={25} width={25} strokeWidth={2}/></button>
                    <span className="px-4">{quantity}</span>
                    <button onClick={sum}><AddCircle color="#CAE3CF" height={25} width={25} strokeWidth={2}/></button>
                </div>
                <button className="rounded border-2 border-green min-w-full px-5 py-3 mt-5 hover:bg-green"  onClick={()=> onAdd(quantity)} >Agregar al carrito</button>
        </section>
       
    )
}

export default ItemCount