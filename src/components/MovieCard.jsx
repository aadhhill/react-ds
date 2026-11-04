import React from 'react'
import './moviecard.css';
import kgf2 from"../assets/kgf2.jpg"
import nine from"../assets/ninesix.jpg"
import lucky2 from"../assets/lucky2.jpg"
// import con from"../assets/con.jpg"
import nun from"../assets/nun.jpg"
import bheshma from"../assets/bheshma.jpg"



function MovieCard() {
  return (
    <div>
    <h1 className="title">New This Week</h1>
    <div className="list">
      <img src={nine} alt="" />
      <img src={kgf2} alt="" />
      <img src={lucky2} alt="" />
      {/* <img src={con} alt="" /> */}
      <img src={nun} alt="" />
      <img src={bheshma} alt="" />



      
    </div>
    </div>
  )
}

export default MovieCard