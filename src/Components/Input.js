import React from 'react';
import Attach from "../images/Attach.png";
import Gallery from "../images/Gallery.png"

export default function Input() {
  return (
    <div className='input'>
     <input type="text"  placeholder='Type something here'/>
     <div className="send">
      <img src={Attach} alt="" />
      <input type="file" style={{display: 'none'}} id="file" />
      <label htmlFor="file">
        <img src={Gallery} alt="" />
      </label>
      <button>Send</button>
     </div>
    </div>
  )
}
