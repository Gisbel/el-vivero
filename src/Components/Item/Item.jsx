
const Item = ({ name, picture, id, price}) => {

    return (
        <>

            <section className="max-w-sm bg-white rounded-lg shadow-md m-4 transform transition duration-500 hover:scale-110" id={id}>
                <img className='rounded-t-lg' src={picture} alt={name} width="400" height="400" />
                <div className="p-5">
                   
                        <h5 className="mb-2 text-xl font-bold tracking-tight ">{name}</h5>
                    
                    <p className="mb-3 font-normal text-lg">{price} &euro;</p>
                </div>
            </section>


        </>

    )
}

export default Item