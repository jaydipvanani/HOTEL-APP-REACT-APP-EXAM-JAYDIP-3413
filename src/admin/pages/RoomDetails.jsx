import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RoomDetails = () => {
    // selector
    let roomdetails = useSelector((state) => state.userReducer.roomdetails);


    let dispatch = useDispatch()
    return (
        // <div>

        //     <table class="table table-bordered table-dark mt-5">
        //         <thead>
        //             <tr>
        //                 <th scope="col">LED</th>
        //                 <th scope="col">BED</th>
        //                 <th scope="col">COFFEMAKER</th>
        //                 <th scope="col">ALARM</th>
        //             </tr>
        //         </thead>
        //         <tbody>

        //             {roomdetails?.map((val, index) => (<tr style={{ height: "10px" }}>
        //                 <td>{val.LEDtv}</td>
        //                 <td>{val.Bed}</td>
        //                 <td>{val.Coffeemaker}</td>
        //                 <td>{val.Alarmclock}</td>
        //                 {/* <td onClick={() => handleDelete(val.id)} >delete</td>
        //                 <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
        //             </tr>))}
        //         </tbody>
        //     </table>

        // </div >

        <>

            <div class="projcard-container">
                {
                    roomdetails?.map((val, ind) => {
                        return (
                            <div class="projcard projcard-blue">
                                <div class="projcard-innerbox">
                                    <img class="projcard-img" src="https://adigaresidency.com/wp-content/uploads/2016/02/Deluxe-4.png" />
                                    <div class="projcard-textbox">
                                        <div class="projcard-title">{val.type}</div>
                                        <div class="projcard-title">{val.name}</div>
                                        <div class="projcard-subtitle">{val.limit}</div>
                                        <div class="projcard-bar"></div>
                                        <div class="projcard-description">{val.description}
                                        </div>
                                        <div class="projcard-tagbox">
                                           <Link to={"/reservation"}> <button><a href="">{val.price} </a></button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </>
    )
}

export default RoomDetails
