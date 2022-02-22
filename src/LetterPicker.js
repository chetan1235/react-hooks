
function LetterPicker(props){
    console.log("letter picker rendering");
    return (
        <div style={{ background: 'red', height: 300, width: 300 }}>
            <p>{ props.letter }</p>
            <button onClick={ props.handleChange }>Change Color</button>
        </div>
    )

}
export default LetterPicker;