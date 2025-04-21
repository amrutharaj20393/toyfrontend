import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { DeleteToyApi } from '../services/allApi';

function Videocard({ toys, setDeleteToyStatus, isPresent, catDetails,isOk }) {
    // console.log(toys)
   // console.log(catDetails)
    const deleteToy = async (id) => {
        const result = await DeleteToyApi(id)
        console.log(result)
        if (result.status >= 200 && result.status < 300) {
            setDeleteToyStatus(result.data)
        }
    }

    const toyDrag = (e, toys) => {
        //console.log(e)
        //console.log(toys)
        e.dataTransfer.setData("toysDetails", JSON.stringify(toys))
    }
    const catDrag = (e, toys, catDetails) => {
        //console.log(e)
        console.log(toys)
        console.log(catDetails)
        e.dataTransfer.setData("categoryDetails", JSON.stringify({ toys, catDetails }))
        //meaning of {video,catDetails} both video and catDetails are passed as one object with same key value name
        /* { video: video, catDetails: catDetails }
        
        {
              video: { id: 1, title: "Cool Video" },
              catDetails: { id: 5, name: "Tutorials" }
            }*/


    }


    return (
        <>

           {!isOk ?<Card style={{ width: '100%' }} className=' mt-3 p-1  shadow border border-info rounded ' draggable onDragStart={(e) => {
                toyDrag(e, toys)
               
            }}>
                {!isPresent && <Card.Img variant="top" src={toys?.image} style={{ height: '250px' }} />}
                <Card.Body>
                    <Card.Title className='fs-4 mt-2 text-center'>{toys?.toyname} </Card.Title>
                    <Card.Text className='fs-5 mt-2 text-center'>Brand:{toys?.brand}</Card.Text>
                    {!isPresent && <Card.Text className='ms-2 fs-5 text-success  ms-auto'> Rs:${toys?.price} <span className='ms-4'> <FontAwesomeIcon icon={faTrash} className='text-danger' onClick={() => deleteToy(toys?.id)} /> </span> </Card.Text>}
                    {isPresent && <Card.Text className='ms-2 fs-5 text-success text-center ms-auto'> Rs:${toys?.price} </Card.Text>}

                </Card.Body>
            </Card>:<Card style={{ width: '100%' }} className=' mt-3 p-1  shadow border border-info rounded ' draggable onDragStart={(e) => {
                
                catDrag(e, toys, catDetails)
            }}>
                {!isPresent && <Card.Img variant="top" src={toys?.image} style={{ height: '250px' }} />}
                <Card.Body>
                    <Card.Title className='fs-4 mt-2 text-center'>{toys?.toyname} </Card.Title>
                    <Card.Text className='fs-5 mt-2 text-center'>Brand:{toys?.brand}</Card.Text>
                    {!isPresent && <Card.Text className='ms-2 fs-5 text-success  ms-auto'> Rs:${toys?.price} <span className='ms-4'> <FontAwesomeIcon icon={faTrash} className='text-danger' onClick={() => deleteToy(toys?.id)} /> </span> </Card.Text>}
                    {isPresent && <Card.Text className='ms-2 fs-5 text-success text-center ms-auto'> Rs:${toys?.price} </Card.Text>}

                </Card.Body>
            </Card>}
           
        </>
    )
}

export default Videocard