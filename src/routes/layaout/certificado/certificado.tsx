
import CertificateManagement from "../../../components/dashboard/certificado/gestioncertificado";
import Navbar from "../../../components/nav/navbar";
import "../../../css/fondo.css";



function GestionCertificado() {

  return (
    <div style={{ display: "flex" }} class="Fondo">
      
      <main
        style={{
          "flex-grow": 1, 
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar/>

        <CertificateManagement/>
        
      </main>
    </div>
  );
}

export default GestionCertificado;
