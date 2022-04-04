import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../api/firebase"
import NavBar from "./NavBar";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams()

  useEffect(() => {

    const queryCollectionCategory = query(collection(db, 'productos'), where('id', '==', itemId))
    getDocs(queryCollectionCategory)
      .then(resp => setItem(resp.docs[0].data()))
      .catch((error) => {
        toast.error("Error al cargar productos");
      })
      .finally(() => setLoading(false))

  }, [])

  return loading ? <h4>Cargando...</h4> : (<ItemDetail item={item}/>);

}

export default ItemDetailContainer