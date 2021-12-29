import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase!", "success")
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
        
    }
    const handleCopy = ()=>{
      // console.log('i am copy');
      var text = document.getElementById('myBox');
      text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success")
    }

    const [text, setText] = useState('');
//text = "newtext" //wrong  way to change the state
//setText("newtext"); //correct way to change the     6YH
  return (
      <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#040840'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#040840'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#040840'}}>
        <h3>your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h5>preview</h5>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}