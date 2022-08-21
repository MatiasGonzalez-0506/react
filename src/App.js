import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Cards from "./components/Cards"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
       <Header title="Adopción de perritos"/>
      <div className="galleryContent">
        <div className="gallery">
          <Cards img="https://tvazteca.brightspotcdn.com/38/e6/7b33cdd042d5a378d56a7f81fa73/perritos-primeros-auxilios.jpg" alt="cachorro de raza russel terrier acostado en el pasto"
          title= "cachorro en adopción"
          info= "cachorro de raza russel terrier bastante jugueton llamado 'vito'"/>
        </div>
        <div className="gallery">
          <Cards img="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/09/2592367.jpg" alt="cachorro de raza labrador caminando en el pasto"
          title= "cachorro en adopción"
          info= "cachorro de raza labrador bastante tranquilo llamada 'chica'"/>
        </div>
        <div className="gallery">
          <Cards img="https://i.pinimg.com/736x/32/2d/8a/322d8a71f3733bb1aba7646d75747994.jpg" alt="cachorro de raza salchicha descansando en la cama"
          title= "cachorro en adopción"
          info= "cachorro de raza salchicha un poco timida llamada 'amy'"/>
        </div>
      </div>
      <div className="footerContent">
        <Footer  footer= "Perritos en adopción"
        button= " Ver mas Imágenes" />
      </div>
    </div>
    
  );
}

export default App;
