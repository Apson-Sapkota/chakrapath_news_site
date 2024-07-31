import React from 'react'
import { rajnitiinfo } from './Data'

function Rajniti() {
  return (
    <>
    
    <div className="container py-1 rajnititop my-5">
        
    <h3 className='fire'>राजनीति</h3>
        <div className="row ">
            <div className="col-lg-6 shadow">
                <img src="https://api.chakrapath.com/Content/coverimage/20244233385_1722263594_kpoli111-1200x560.jpg" alt="image" width="100%"/>
                <h5>यो सरकार दुई वर्ष ढल्दैन : प्रधानमन्त्री ओली </h5>
                <p>काठमाडौँ। सरकार अस्थिर हुन्छ र चार महिनामा अर्को समीकरण हुन्छ भनेर एकपक्षीय टिप्पणी गर्नेहरूलाई प्रधानमन्त्री केपी...</p>

            </div>
            <div className="col-lg-5 offset-1">
                
                    {rajnitiinfo.map((item,index)=>(
                        <>
                        <div className="row shadow mb-3" key={index}>
                        <div className="col-lg-3"><img src={item.img} alt="image" width="100%"/></div>
                        <div className="col-lg-9 "><h6>{item.heading}</h6>
                        <p>{item.content}</p>
                        </div>
                        </div>
                        </>
                        
                    ))}
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Rajniti