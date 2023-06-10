import { Link } from 'react-router-dom';
import Item from "../Item/Item";

const ItemList = ({plants}) => {
    
    return (
        <>
        { plants.map((plant) => (
            <Link to={`/plants/${plant.id}`} key={plant.id}>
                <Item name={plant.name} picture={plant.picture} id={plant.id} price={plant.price} />
            </Link>
        ))}
        
        </>
    )
  }

export default ItemList