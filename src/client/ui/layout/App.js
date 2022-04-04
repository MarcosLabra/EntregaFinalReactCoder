import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../../api/providers/CartContext";


const App = () => {

    return (
        <BrowserRouter>
            <CartContext>
                <Header/>
                <Main/>
            </CartContext>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App