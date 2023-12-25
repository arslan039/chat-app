import React from 'react'
import Navbar from "../Components/Navbar.js"
import Searchbar from "../Components/Searchbar.js"
import Chats from "../Components/Chats.js"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Searchbar/>
      <Chats/>
    </div>
  )
}
