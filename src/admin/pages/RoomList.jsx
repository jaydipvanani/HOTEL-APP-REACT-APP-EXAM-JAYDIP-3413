import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ROOMLIST_PENDING, POST_ROOMLIST_PENDING, UPDATE_ROOMLIST_PENDING } from '../../redux-saga/user/action/action';

const RoomList = () => {
    let room = useRef()
    let status = useRef()
    let type = useRef()

    

    const [selectedstatus, setselectedstatus] = useState('');
    const [selecttype, setselecttype] = useState('');

    // Selector
    const roomlist = useSelector((state) => state.userReducer.roomlist);



    // const [searchTerm, setSearchTerm] = useState('');
    // const [sortBy, setSortBy] = useState('type');

    // let handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    // }
    //   // Sorting products 
    //   const handleSort = (event) => {
    //     setSortBy(event.target.value);
    // };

    //  Updating Shorted Products
    // const sortedProducts = [...roomlist].sort((a, b) => {
    //     if (sortBy === 'type') {
    //         return a.type ;
    //     } else if (sortBy === 'name') {
    //         return a.type.localeCompare(b.type);
    //     }
    //     return 0;
    // });

    // //  Filtering products
    // const filteredProducts = sortedProducts.filter(roomlist =>
    //     roomlist.price.toString().includes(searchTerm) || roomlist.name.toLowerCase().includes(searchTerm.toLowerCase())

    // );





    let [view, setview] = useState()


    let dispatch = useDispatch()




    let addUser = () => {

        let data = {
            room: room.current.value,
            status:selectedstatus,
           // status: status.current.value,
            //type: type.current.value
            type:selecttype,
        }

        console.log(data);

        dispatch({ type: POST_ROOMLIST_PENDING, payload: data })



    }

    // delete user

    let handleDelete = (id) => {

        console.log(id);

        dispatch({ type: DELETE_ROOMLIST_PENDING, payload: id })
    }

    // update user

    let handleview = (id, index) => {
        let data = roomlist[index]

        setview(data)

    }

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    }

    let handleupdate = () => {
        console.log(view);

        dispatch({ type: UPDATE_ROOMLIST_PENDING, payload: view })

    }
    // Separate available and unavailable rooms
      const availableRooms = roomlist.filter(room => room.status === 'available');
      const unavailableRooms = roomlist.filter(room => room.status === 'unavailable' );

    
   

    return (
        <div>
            {/* form */}
            <form onsubmit="return false">
                <div class="box">
                    <input type="text" placeholder="" required id="surname" ref={room} />
                    <label for="surname">ROOM NO.</label>
                </div>
               
                <div class="box">
                    {/* <input type="text" placeholder="" required id="surname" ref={type} />
                    <label for="surname">TYPE</label> */}
                     <select class="form-select" aria-label="Default select example" value={selecttype} onChange={(e) => setselecttype(e.target.value)}>
                            <option value="">TYPE</option>
                            <option value="BUSINESS">BUSINESS</option>
                            <option value="DELUXE">DELUXE</option>
                            <option value="COMMON">COMMON</option>
                            <option value="GENERAL">GENERAL</option>
                        </select>
                </div>
                <div class="box">
                    {/* <input type="text" placeholder="" required id="surname" ref={status} />
                    <label for="surname">STATUS</label> */}
                    <select class="form-select" aria-label="Default select example" value={selectedstatus} onChange={(e) => setselectedstatus(e.target.value)}>
                            <option value="">STATUS</option>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                </div>
                <button onClick={addUser}>ADD ROOM</button>
            </form>


            {/* all data  */}
            <h1>ALL ROOM </h1>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">DELETE</th>
                        <th scope="col">VIEW</th>
                    </tr>
                </thead>
                <tbody>
                    {roomlist?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>{val.type}</td>
                            <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td>
                        </tr>
                    ))}
                </tbody>
            </table>

          

            {/* filter data */}

            <div>
            <h2> This Time Available Rooms</h2>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">TYPE</th>
                    </tr>
                </thead>
                <tbody>
                    {availableRooms.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>{val.type}</td>
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h2>This Time Unavailable Rooms</h2>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">TYPE</th>
                    </tr>
                </thead>
                <tbody>
                    {unavailableRooms.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>{val.type}</td>
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>




            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog p-0" style={{ width: "400px" }}>
                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="card" style={{ width: "23rem" }}>
                                <div class="card-body">
                                    <form className="">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label" >ROOM NO </label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="room" value={view?.room} onChange={handle} />

                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">STATUS</label>
                                            <input type="text" name="status" value={view?.status} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">TYPE</label>
                                            <input type="text" name="type" value={view?.type} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={handleupdate}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default RoomList;
