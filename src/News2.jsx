import React from 'react'
import { bharkharaiinfo } from './Data'

function News2() {
  return (
    <>
    <div className="container aa">
    <div className="row g-5 py-4">
        
        <div className="col-lg-7 left">
            <div className="boxa">
                <h4 className='text-center'>विमान दुर्घटनाका साक्षीहरू भन्छन् :जहाज बस्तीमा झरेको भए अरु धेरैको ज्यान जाने खतरा हुन्थ्यो धन्न बाँचियो</h4>
            </div>
            <div className="shadow">
            <img src="https://api.chakrapath.com/Content/coverimage/20243656271_202407241336-f8a587d1-5934-4855-9fc8-e23acc91633e_medium.jpg" alt="image" width="100%" />
            <p className='py-3'>काठमाडौँ ।  आज बिहान झण्डै सवा ११ बजेतिर त्रिभुवन अनर्राष्ट्रिय विमानस्थलमा एक्कासी ठूलो आवाज सुनियो । त्यो...</p>
            </div>
            
        </div>
        <div className="col-lg-5 right">
            <div className="boxb">
                <h3>भर्खरै</h3>
            </div>
            <div className="row ">
                {bharkharaiinfo.map((item, index) => (
                    <div className="col-lg-12 shadow py-3 my-3" key={index}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <img src={item.img} alt="image" width="100%" />
                            </div>
                            <div className="col-lg-9">
                                <p>{item.heading}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default News2