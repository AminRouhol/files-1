

import React from 'react'
import { Dropdown } from 'react-bootstrap';
import {FaUsb,FaTag } from "react-icons/fa";


const Master = () => {
  return (
    <>
   <div className='master-main'>
    <Dropdown>
  <Dropdown.Toggle className='master-button'>
    < FaUsb/>   master
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

             <div className='branc'>
             <h6>     < FaUsb/>  2 branches </h6>

             </div>
        
             <div className='branc'>
             <h6>    < FaTag/> 0 tags </h6>

             </div>
        
</div>

    </>
  )
}

export default Master