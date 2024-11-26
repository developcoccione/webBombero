import MissionModal from "../../../components/dashboard/mision/mision";
import Navbar from "../../../components/nav/navbar";
import "../../../css/fondo.css";



function Mision() {

  return (
    <div style={{ display: "flex" }} class="Fondo">
      
      <main
        style={{
          "flex-grow": 1, 
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar/>

        <MissionModal/>
      </main>
    </div>
  );
}

export default Mision;
