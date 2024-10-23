import { Box } from "@suid/material";
import Cardtra from "../../components/card/Card-Trayecto";
import ImageStat from "../../components/carrousel/ImageStatic";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/nav";
import ImageText from "../../components/aside/aside";
import '../../css/fondo.css'




function Trayecto () {
    return (
        <>
          <div class='Fondo'>
            <Nav/>

            <Cardtra/>

            <ImageStat/>

            <Box class="container" component="div" sx={{ textAlign: "justify", marginTop: '4%'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic corrupti voluptatum magni aperiam doloremque illum consequatur, dolores ab impedit laboriosam earum dolorem minima temporibus magnam, voluptas dolor, labore recusandae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A non in repudiandae sapiente quaerat quam nostrum quasi dolore soluta voluptates quo ad temporibus corrupti officia, omnis, ex rerum. Illum, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod quam, reprehenderit alias nam voluptate sapiente porro eveniet veritatis saepe numquam aliquid temporibus cupiditate sunt corrupti maiores cum ex ut.
            </Box>
            <br/>
            <Box class="container" component="div" sx={{ textAlign: "justify"}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic corrupti voluptatum magni aperiam doloremque illum consequatur, dolores ab impedit laboriosam earum dolorem minima temporibus magnam, voluptas dolor, labore recusandae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A non in repudiandae sapiente quaerat quam nostrum quasi dolore soluta voluptates quo ad temporibus corrupti officia, omnis, ex rerum. Illum, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod quam, reprehenderit alias nam voluptate sapiente porro eveniet veritatis saepe numquam aliquid temporibus cupiditate sunt corrupti maiores cum ex ut.
            </Box>

            <ImageText/>

            <Footer/>
            </div>
        </>
    )
}

export default Trayecto;