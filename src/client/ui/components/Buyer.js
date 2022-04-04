import { useState } from "react"
import { db } from "../../api/firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useContext } from "react"
import { context } from "../../api/providers/CartContext"

const Buyer = () => {
  const [buyer, setBuyer] = useState({ nombre: '', telefono: '', email: '' })

  const { cart, totalPrice, clear } = useContext(context)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value
    })
  }
  const endPurchase = () => {
    const orden = {
      buyer,
      items: cart,
      date: serverTimestamp(),
      total: totalPrice()
    }

    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection, orden)


    if (buyer.nombre && buyer.telefono && buyer.email) {
      pedido
        .then(res => {
          toast.success("Finalizo la compra!" + "Id : " + res.id)
        })
        .catch(error => {
          toast.error("hubo un error!")
        })
        .finally(() => {
          clear()
        })
    } else {
      toast.error("Por favor complete los datos del comprador", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
  return (
    <section className="buyer">
      <h4>Precio total: ${totalPrice()}</h4>
      <button className="button" onClick={() => { clear() }} >Vaciar Carrito</button>
      <div>
        <p>Datos del comprador</p>
        <form className="form">
          <input value={buyer.nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleChange} />
          <input value={buyer.telefono} name="telefono" type="number" placeholder="Telefono" onChange={handleChange} />
          <input value={buyer.email} name="email" type="email" placeholder="Email" onChange={handleChange} />
        </form>
        <button className="button" onClick={() => endPurchase()}>Finalizar compra</button>
      </div>
    </section>
  )
}
export default Buyer