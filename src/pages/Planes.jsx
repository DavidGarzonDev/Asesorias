
import Intro from "../components/home/Intro";
import PlanesDetallados from "../components/home/PlanesDetallados";
import RiesgosPermitidos from "../components/home/RiesgosPermitidos";
import Contactanos from "../components/home/Contactanos";
import Clientes from "../components/home/Clientes";
import { OtrosServicios } from "../components/home/OtrosServicios";

const Planes = () => {
    

    return (
        <>
            {/* SECCIÓN INTRO */}
            <Intro/>

            {/* DETALLE DE PLANES*/}
            <PlanesDetallados/>

            {/* SECCIÓN DE OTROS SERVICIOS*/}
            <OtrosServicios/>
            
            {/* SECCIÓN DE ADVERTENCIA */}
            <RiesgosPermitidos/>


            {/* SECCIÓN DE CONTACTANOS */}
            <Contactanos/>

            {/* SECCIÓN DE CLIENTES */}
            <Clientes/>
            
            

        


            
        </>
    );
};

export default Planes;
