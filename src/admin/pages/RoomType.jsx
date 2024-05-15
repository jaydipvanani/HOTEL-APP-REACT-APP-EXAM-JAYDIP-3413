import React from 'react'
import { useSelector } from 'react-redux';

const RoomType = () => {

    let roomlist = useSelector((state) => state.userReducer.roomlist);



        // Separate available and unavailable rooms
        const availableRooms = roomlist.filter(room => room.status === 'available');
        console.log("🚀 ~ RoomType ~ availableRooms:", availableRooms)
        const unavailableRooms = roomlist.filter(room => room.status === 'unavailable' );


    // Separate type by sort 
    const businessroom =  availableRooms?.filter(room => room.type == 'BUSINESS')
    console.log("🚀 ~ RoomType ~ businessroom:", businessroom)

    const deluxeroom = availableRooms?.filter(room => room.type === 'DELUXE')
    console.log("🚀 ~ RoomType ~ deluxeroom:", deluxeroom)

    const generalroom = availableRooms?.filter(room => room.type === 'GENERAL')
    console.log("🚀 ~ RoomType ~ generalroom:", generalroom)
    const commonroom = availableRooms?.filter(room => room.type === 'COMMON')
    console.log("🚀 ~ RoomType ~ commonroom:", commonroom)

    
    return (
        <>

            <h5> AVAILABLE BUSSINESS ROOM  </h5>
            <table class="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {businessroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>3000$</td>
                            {/* <td>{val.type}</td> */}
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>


            <h5> AVAILABLE DELUXE ROOM  </h5>
            <table class="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {deluxeroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>2000$</td>
                            {/* <td>{val.type}</td> */}
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5> AVAILABLE GENERAL ROOM  </h5>
            <table class="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {generalroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>1000$</td>
                            {/* <td>{val.type}</td> */}
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>


            <h5> AVAILABLE COMMON ROOM  </h5>
            <table class="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {deluxeroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>500$</td>
                            {/* <td>{val.type}</td> */}
                            {/* <td onClick={() => handleDelete(val.id)}>delete</td>
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default RoomType