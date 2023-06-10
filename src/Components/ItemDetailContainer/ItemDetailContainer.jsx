import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc} from 'firebase/firestore'
import {db} from '../../Services/firebase/firebaseConfig'
import Loader from "../Loader/Loader";
import { EmojiSad } from 'iconoir-react';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
       const docRef = doc(db, 'plants', id)
         getDoc(docRef)
            .then(response => {
                const data = response.data()
                if (data) {
                    setPlant({id: response.id, ...data})
                } else {
                    setIsValid(false)
                }
            })
            .catch(error => console.log(error))
    }, [id]);

    if (!isValid) {
        return  (
            <div className="flex flex-col justify-center content-start items-center">
               
                <div> <EmojiSad color="000000" height={60} width={60} strokeWidth={0.5}/></div>
                <p className="my-10 text-xl">El producto no existe</p>
                <Link to='/'><button className="border border-green bg-green hover:bg-transparent rounded-lg text-sm w-full px-5 py-2.5 text-center">Volver a productos</button></Link>
            </div>
        )
    }
    
    if (plant === null) {
        return <Loader/>
    }
   
    return (
        <>
            <ItemDetail name={plant.name} picture={plant.picture} id={plant.id} watering={plant.watering} care_level={plant.care_level} description={plant.description} price={plant.price}/>
       </>

    )
}


export default ItemDetailContainer