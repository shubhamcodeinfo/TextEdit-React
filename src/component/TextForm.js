
import React, { useState } from 'react'

export default function TextForm(props) {

  const convertUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const convertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const [text, setText] = useState('')
  const confirmBox = () => {
    
    props.showAlert('text  cleared','Success')
    

      let newText = '';
      setText(newText)
  
  }
  const handelReverseText = () => {
    let newText = text.split(' ');
    setText(newText.reverse().join())
  }
  const handelCopyText = () => {
    let text = document.getElementById('textBox');
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handelRemoveSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '))
  }

  const handlerOnChange = (event) => {
    // console.log('change text')
    setText(event.target.value)
  }
  return (
    <>
      <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <form>
          <div className="form-group " >
            <textarea className="form-control border border-dark" value={text} onChange={handlerOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#575552', color: props.mode === 'light' ? 'black' : 'white' }} id="textBox" rows="8"></textarea>
          </div>
        </form>
        <button className="btn btn-primary my-2 mx-1" onClick={convertUpperCase}>convert to  upperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={convertLowerCase}>convert to  LowerCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={confirmBox} >Clear Font</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handelReverseText}>Text reverse</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handelCopyText}>Copy text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handelRemoveSpace}>Space remove</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Text summary</h2>
        <b>{text.split(' ').length} word and {text.length} character</b>
        <h2>Preview</h2>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length > 0 ? text : 'write something to preview '}</p>

      </div>
    </>
  )
}
