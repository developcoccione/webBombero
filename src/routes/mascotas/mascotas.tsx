import AnimalCatalog from "../../components/card/catalogo";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/nav";
import Navbar from "../../components/nav/navbar";
import '../../css/fondo.css'




export default function Mascotas () {
    return (
        <>
            <div class="Fondo">
                <Nav/>

                <AnimalCatalog/>


                <Footer/>
            </div>
        </>
    )
}