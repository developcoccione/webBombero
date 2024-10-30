import { Box } from "@suid/material";
import Cardtra from "../../components/card/Card-Trayecto";
import ImageStat from "../../components/carrousel/ImageStatic";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/nav";
import ImageText from "../../components/aside/aside";
import '../../css/fondo.css'
import AnimatedText from "../../components/texto/texto";




function Trayecto () {
    return (
        <>
          <div class='Fondo'>
            <Nav/>

            <Cardtra/>

            <ImageStat/>

            <AnimatedText/>

            <ImageText/>

            <Footer/>
            </div>
        </>
    )
}

export default Trayecto;