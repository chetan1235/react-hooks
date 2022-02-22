
function ColorPicker(props){
    console.log("color picker rendering");
    return (
        <div style={{ background: props.color, height: 300, width: 300 }}>

            <button onClick={ props.handleChange }>Change Color</button>
        </div>
    )

}
export default ColorPicker;