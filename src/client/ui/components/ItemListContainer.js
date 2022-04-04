import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../api/firebase"

const ItemListContainer = () => {

	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {

		const productsCollection = collection(db, 'productos')
		const respuesta = getDocs(productsCollection)
		if (categoryId) {
			const queryCollectionCategory = query(collection(db, 'productos'), where('categoria', '==', categoryId))
			getDocs(queryCollectionCategory)
				.then(resp => setItems(resp.docs.map(prod => (prod.data()))))
				.catch((error) => {
					toast.error("Error al cargar productos");
				  })
				.finally(() => setLoading(false))
		} else {
			respuesta
				.then((resultado) => {
					resultado.docs.forEach(doc => {
						const arrayResultado = resultado.docs.map((doc) => doc.data())
						setItems(arrayResultado)
						setLoading(false)
					})
				})
				.catch((error) => {
					toast.error("Error al cargar productos");
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [categoryId])

	return loading ? <h4>Cargando...</h4> : <ItemList items={items} />

}
export default ItemListContainer