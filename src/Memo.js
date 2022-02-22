import ColorPicker from "./ColorPicker";
import LetterPicker from "./LetterPicker";
import { useState, useMemo } from 'react';

function Memo(){

    const [color, setColor] = useState('#000')
    const [letter, setLetter] = useState('this is letter')

    const handleLetterChange = useMemo(()=> ()=>{

        for(var i=0; i< 10000; i++){
            var c= letter+'a'
            setLetter(letter+c)
        }

    }, [letter])


    const handleColorChange = () => setColor("green");
   // const handleLetterChange = () => setLetter("change on click");
                            
    console.log("Memo component rendering");
    return (
    <div>
    <ColorPicker handleChange={handleColorChange} color={color} />
    <LetterPicker handleChange={handleLetterChange} letter={letter} />
    <hr />
    <h1 style={{color}}>{letter}</h1>
    </div>
    )
}
export default Memo;