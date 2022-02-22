import InfoContext from "./InfoContext";
import { useContext } from "react";


function Context(){

const info  = useContext(InfoContext);


return(
    <div>{ info }
        This is context
    </div>
)
}

export default Context;