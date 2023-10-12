import React from 'react';
import Camera from "../images/Camera.png";
import Save from "../images/Save.png";
import More from "../images/More.png";
import Messages from "../Components/Messages.js";
import Input from "../Components/Input.js";


export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Zayan</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Save} alt="" />
          <img src={More} alt="" />
        </div>
       
      </div>
      <Messages />
      <Input/>
    </div>
  )
}
