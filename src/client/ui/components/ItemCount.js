import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("no hay stock")
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const agregarCarrito = () => {
        onAdd(count)
    }

    return (
        <div className="itemCount">
            
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount