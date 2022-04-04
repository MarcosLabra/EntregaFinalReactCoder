import ItemCount from './ItemCount';
import { NavLink } from "react-router-dom"
import { useState, useContext } from "react";

import { context } from '../../api/providers/CartContext';


const ItemDetail = ({ item }) => {

    const [cantCart, setCantCart] = useState(0)
    const { addItem } = useContext(context)

    const onAdd = (quantity) => {
        setCantCart(cantCart + quantity)
        addItem(item, quantity)
    }

    return (
        <article className="itemDetail">
            <img src={item.imagen} alt="" />
            <div>
                <div className="titulos">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio}</p>
                    <p>Material:<span>{item.material}</span></p>
                    <p>Al carrito:<span>{cantCart}</span> </p>
                    <ItemCount stock={5} initial={1} onAdd={onAdd} />
                </div>
            </div>
            {cantCart ? <NavLink to="/cart" className='button'>terminar compra</NavLink> : <></>}
        </article>
    )
}

export default ItemDetail