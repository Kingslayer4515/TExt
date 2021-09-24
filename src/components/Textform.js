import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpclick=()=>{
        // console.log("uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handledownclick=()=>{
        // console.log("uppercase was clicked")
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleonchange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleextra=()=>{
        // console.log("on change")
        let newText= text.split(/[ ]+/);
        setText(newText.join(""))
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: (props.mode==='dark'?'white':'black')}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpclick} type="submit">Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handledownclick} type="submit">Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleextra} type="submit">Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: (props.mode==='dark'?'white':'black')}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008* text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
