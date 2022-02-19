import { useEffect, useRef, useLayoutEffect } from "react";


function Layout(){



    const ref = useRef();
    const color = 'red';


    useLayoutEffect(() => {

        const refColor = ref.current.style.color;
        console.log(refColor);
        //console.log(`${refColor} will always be the same as ${color}`);
        
        ref.current.style.color = "green";
    }, [color]);



    useEffect(() => {
    const refColor = ref.current.style.color;
    console.log(refColor)
   
    }, [color]);




    return (
    <div ref={ref} style={{ color: color }} > Hello React hooks !
    
    </div>
    );


}
export default Layout;
