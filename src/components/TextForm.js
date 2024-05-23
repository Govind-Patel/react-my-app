import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handleLOClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");

    }
    const handleOnClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("clear successfully","success");
    }
    const handleOnCopy =async ()=>{
        await navigator.clipboard.writeText(text);
        // setText('Copied!');
        props.showAlert("copy successfully!","success");

    }
    const downloadTxtFile = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'example.txt'); // Set the download attribute and file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        props.showAlert("download successfully!","success");
    };
    const handelExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space successfully!","success");
    }
    const handleOnChamge = (event)=>{
        console.log("On change handler");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText = ("new text"); //ccurect way to change the state
  return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChamge} value={text} style={{background:props.mode === 'dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOClick} >Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleOnClear} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleOnCopy} >Copy to Text</button>
            <button className="btn btn-primary mx-2" onClick={downloadTxtFile} >Download Text File</button>
            <button className="btn btn-primary mx-2" onClick={handelExtraSpace} >Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.trim().replace(/\s+/g, ' ')?text.trim().replace(/\s+/g, ' ').split(" ").length:0} words ,and  {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
        </div>
    </>
  )
}
