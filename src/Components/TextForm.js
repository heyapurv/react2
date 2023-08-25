import React, {useState} from 'react'

console.log()
export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase Was Clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () =>{
      console.log("Uppercase Was Clicked" + text)
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lowercase!", "success");
  }
    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // Copy text
    const handleCopy = () =>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces", "success");
    }
    // Removes Extra spaces
      // const handleExtraSpaces = () =>{
      //   let newText = text.split(/[]+/);
      //   setText(newText.join(" "))
      // }
  return (
    <>
<div className='container'>
    <h1>{props.heading}</h1>
<div class="mb-3">
<textarea class="form-control" value = {text} onChange= {handleOnChange}id="myBox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

{/* <button className='btn btn-primary mx-1 my-2' onClick={handleCopy}> Check Grammer Mistakes</button> */}
{/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
{/* <button className='btn btn-primary mx-2 my-2'>Fix Grammer Mistakes</button> */}
</div>
<div className='container my-3'>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
