import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_RESERVATION_PENDING } from '../../redux-saga/user/action/action'
import { Link } from 'react-router-dom'

const Reservation = () => {
    let name = useRef()
    let room = useRef()
    let phone = useRef()

    let checkin = useRef()
    let checkout = useRef()

    const [selectedroom, setSelectedroom] = useState('');

    let roomlist = useSelector((state) => state?.userReducer?.roomlist);
        // Separate available and unavailable rooms
        const availableRooms = roomlist?.filter(room => room.status === 'available');
        // const unavailableRooms = roomlist.filter(room => room.status === 'unavailable' );
    console.log("🚀 ~ Reservation ~ roomlist:", roomlist)

    let dispatch = useDispatch()

    //     // add user
    let addUser = () => {

        let data = {
            name: name.current.value,
            room: selectedroom,
            phone: phone.current.value,
            checkin: checkin.current.value,
            checkout: checkout.current.value,
        }

        console.log(data);

        dispatch({ type: POST_RESERVATION_PENDING, payload: data })



    }




    return (


        <div>       
             
            <form onsubmit="return false">
            <h1 className="mt-5"> RESERVATION YOUR ROOM</h1>
                <div class="box">
                    <select class="form-select" aria-label="Default select example" value={selectedroom} onChange={(e) => setSelectedroom(e.target.value)}>
                        <option value="">Select room</option>
                        {availableRooms?.map((val, index) => (
                            <option key={index} value={val?.id}>{val?.room}</option>
                        ))}
                    </select>
                </div>
                <div class="box">
                    <input type="surname" placeholder="" required id="surname" ref={name} />
                    <label for="surname">name</label>
                </div>
                <div class="box">
                    <input type="number" placeholder="" required id="surname" ref={phone} />
                    <label for="surname">phone</label>
                </div>
                <div class="box">
                    <input type="date" placeholder="" required id="surname" ref={checkin} />
                    <label for="surname">ckeck in date</label>
                </div>
                <div class="box">
                    <input type="date" placeholder="" required id="surname" ref={checkout} />
                    <label for="surname">check out date</label>
                </div>
                <button onClick={addUser}>ADD RESERVATION</button>
                <Link to={"/reservationlist"}><a href="">SEE RESERVATION HISTORY</a></Link>
            </form>
        </div>
    )
}

export default Reservation
