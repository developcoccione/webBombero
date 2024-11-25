import Navbar from "../../nav/navbar";


export default function GestionNoti(){
    return(
        <>
        <div style={{ display: "flex" }} class="Fondo">
        
        <main
            style={{
            "flex-grow": 1, 
            transition: "margin-left 0.3s ease",
            }}
        >
            <Navbar/>
            
        </main>
        </div>
        </>
    )
}