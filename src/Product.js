export default function Products({ itemsForSale }) {
    return (
        <div className="back">
            <div className="products">
                {itemsForSale.map((item => {
                    const { id, name, material, price, image } = item;
                    return (
                        <div key={id} className="product-card">
                            <ul>
                                <li><img className="circle" src={image} alt="blanket" /></li>
                                <li>{name}</li>
                                <li>{material}</li>
                                <li>$ {price}</li>
                                <li><button className='btnSend'>Add to Cart</button></li>
                            </ul>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}