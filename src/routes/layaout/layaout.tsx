import Navbar from "../../components/nav/navbar";
import "../../css/fondo.css"
import CardLayaout from "../../components/card/cardlayaout";
import { BarChart } from "@suid/icons-material";

function Layout() {

  return (
    <div style={{ display: "flex" }} class="Fondo">
      
      <main
        style={{
          "flex-grow": 1, 
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar/>

        <CardLayaout/>

        <BarChart/>

      </main>
    </div>
  );
}

export default Layout;
