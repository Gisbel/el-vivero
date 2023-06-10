import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import hero_2 from './assets/hero_2.svg'
import { getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../Services/firebase/firebaseConfig'

const ItemListContainer = () => {
    const [plants, setPlants] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
      const collectionRef = category ? query(collection(db, 'plants'), where('category', '==', category)) : collection(db, 'plants')

      getDocs(collectionRef)
      .then(response => {
        const newPlants = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}

      })
      setPlants(newPlants)
      })
      .catch(error => console.log(error))
    }, [category]);
    return (
        <>
        
        <div className='flex flex-col md:flex-row justify-center content-center items-center h-screen '>
            <h1 className="text-center font-regular text-5xl mb-4 md:pl-4">El Vivero</h1>
            <img src={hero_2} alt="hero" width="450" />
        </div>
        <div className='flex flex-row flex-wrap justify-center content-center items-top w-10/12 m-auto'>
        <ItemList plants={plants}/>
        </div>
        </>
    )
}

export default ItemListContainer