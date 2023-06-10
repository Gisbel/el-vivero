import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../Context/CartContext";

import { useState } from "react";
import { useContext } from "react";

import { collection, addDoc} from 'firebase/firestore'
import {db} from '../../Services/firebase/firebaseConfig'
import Loader from "../Loader/Loader";

const Checkout = () => {

    const [orderId, setOrderId] = useState(""); //para mostrar el id de la orden";
    const [loading, setLoading] = useState(false); //para mostrar el spinner de carga";
    const {cart, total, clear} = useContext(CartContext);

    const createOrder = ({name, phone, email}) => {
        setLoading(true);
        const newOrder = {
            buyer: {name, phone, email},
            items: cart,
            date: new Date(),
            total: total
        }
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, newOrder)
        .then(({id}) => {
            setOrderId(id);
            setLoading(false);
            clear();
        }
        )
    }

    if(loading) {   
        return <Loader/>
    }
    if(orderId) {
      return(
      <>
      <div className="text-center">
         <h2 className=" my-10 text-xl">¡Muchas gracias por comprar en El Vivero! </h2>
         <p className="text-lg">ID del pedido: <span className="underline">{orderId}</span> </p>
         </div>
        </>
        )
    }

  return (
    <div>
      <h2 className="text-xl my-10 px-8">Checkout</h2>
        <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}
export default Checkout