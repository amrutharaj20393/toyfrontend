import React, { useEffect } from 'react'
import Videocard from './Videocard'

import { allToyApi, UpdateCategoryApi } from '../services/allApi';
import { useState } from 'react';
import Edit from './Edit';

function View({ addBookStatus }) {
    const [allToy, setAllToy] = useState([])//for all toys display
    const [deleteToyStatus, setDeleteToyStatus] = useState({})//to avoid refreshing 
    const [CatDropUpdateStatus, setCatDropUpdateStatus] = useState({})

    const getAllToys = async () => {
        const result = await allToyApi()
        //console.log(result)
        if (result.status >= 200 && result.status < 300) {
            setAllToy(result.data)
        }
    }
  

    useEffect(() => {
        getAllToys()
    }, [addBookStatus, deleteToyStatus])

    const toyOver = (e) => {
        //prevent the reload-to prevent data lose
        e.preventDefault()
    }
    const toyDrop = async (e) => {
       
        const data = JSON.parse(e.dataTransfer.getData("categoryDetails"))
        //console.log(data.toys);
        //console.log(data.catDetails);       // your video object
        // the category ID
        const dropToys = data.catDetails.Toyslist.filter((item) => item.id !== data.toys.id)
        console.log(dropToys)
        data.catDetails.Toyslist = dropToys;
       
        const result = await UpdateCategoryApi(data.catDetails.id, data.catDetails)
       console.log(result)
        if (result.status >= 200 && result.status < 300) {
            console.log(result.data)
           setCatDropUpdateStatus(result.data)
        }



    }


    return (
        <>

            <div className="container-fluid p-5 mt-3 ms-2" >
                <h1 className='text-center mt-3'>Our Latest Book Collection</h1>
                <div className="row " droppable="true"  onDragOver={(e) => toyOver(e)} onDrop={(e) => toyDrop(e)}>
                    <div className="col-md-9 ">
                        <div className="row   ">

                            {
                                allToy?.length > 0 ?
                                    allToy?.map((item, index) => (
                                        <div className="col-md-3 p-2 " key={index}>
                                            <Videocard toys={item} setDeleteToyStatus={setDeleteToyStatus} />
                                        </div>
                                    ))
                                    : <div className=' d-flex align-items-center justify-content-center flex-column'>
                                        <img src="https://img.freepik.com/free-vector/illustration-shopping-online_53876-5906.jpg?ga=GA1.1.1093745041.1736152548&semt=ais_hybrid&w=740" alt="" />
                                        <h4 className='text-danger'> No Toys In store</h4>
                                    </div>
                            }


                        </div>
                    </div>
                    <div className="col-md-3">
                        <Edit CatDropUpdateStatus={CatDropUpdateStatus}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View