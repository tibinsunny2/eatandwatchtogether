import React, { Row, Col } from 'react'


function OperatingHours({ op }) {
  console.log(op);

  return (
    <>
       <div className='text text-black'> 
      <h3>OPERATING HOURES</h3>
   
        <p>MONDAY:{op.Monday}</p>
        <p>TUESDAY:{op.Tuesday}</p>
        <p>WEDNESDAY:{op.Wednesday}</p>
        <p>THUSDAYDAY:{op.Thursday}</p>
        <p>FRIDAYDAY:{op.Friday}</p>
      </div>
    </>
  )


}

export default OperatingHours