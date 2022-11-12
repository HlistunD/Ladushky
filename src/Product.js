export default function Products({itemsForSale}) {
    return(
        <div className="products back">
        {itemsForSale.map((item => {
            const {id, name, material, price, image} = item;
            return(
                <div key={id} className="product-card">
                    <img className="circl" src={image} alt="blanket" width="300px" height="300px"/>
                    <div className="prodact-info">
                    <h3>{name}</h3>
                    <h5>{material}</h5>
                    <h5>$ {price}</h5>
                    <button className='btnSend'>Add to Cart</button>
                    </div>
                </div>
            )
        }))}
    </div>
    )
}