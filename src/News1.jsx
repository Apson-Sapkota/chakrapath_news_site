import React from 'react'
import { news1info } from './Data'

function News1() {
  return (
   <>
   <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <img src="https://api.chakrapath.com/Content/AdImages/20244220865_global-add-sankalpa.gif" alt="image" />
      </div>
      {news1info.map((item)=>(
        <div className="col-lg-12 sundar text-center p-3 shadow">
          <h1>{item.heading}</h1>
          <img src={item.img} alt="image" width="100%"/>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
   </div>
   </>
  )
}

export default News1