import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewdata}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="ms-5"
            >
                Reviews
            </Button>
            <Collapse in={open}>

                <div id="example-collapse-text" className='p-5'>
                    {reviewdata.map(item => 

                        <div className='p-2 mt-1'>
                        <h3>{item.name}  {item.date}</h3>
                        <h6>{item.rating}</h6>
                        <p>{item.comments}</p>
                            
                        </div>

                    )
}
                </div>
            </Collapse>
            </>
    )
}

export default Review