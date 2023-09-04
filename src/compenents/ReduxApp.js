import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addData, removeData, getData, updataData } from '../redux/counterSlice'
import { Link } from 'react-router-dom'


function ReduxApp() {
    const { count, contacts } = useSelector((state) => state.counter)
    console.log(contacts)
    const dispatch = useDispatch()
    // console.log(count)
    return (
        <div>
            {/* <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <p>{count}</p>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(addData())}
                >
                    Decrement
                </button>
            </div> */}
            {
                contacts.map((contact) => {
                    return <div style={{ "margin": "20px", }} key={contact.id}>{contact.name} 
                    <span onClick={() => dispatch(removeData(contact.id))} style={{ "cursor": "pointer", "border": "1px solid red", "padding": "0px 4px", "margin": "10px" }}>X</span> 

                    <Link to={`user-details/${contact.id}`}><span  style={{ "cursor": "pointer", "border": "1px solid red", "padding": "0px 4px", "margin": "10px" }}>Details</span></Link>

                    <Link to={`update-user/${contact.id}`}><span onClick={() => dispatch(updataData(contact.id))} style={{ "cursor": "pointer", "border": "1px solid red", "padding": "0px 4px", "margin": "10px" }}>update</span></Link>
                    </div>
                })
            }


            {/* <Link to="/adduser" ><button onClick={() => dispatch(addData())} style={{"border":"1px solid red", "padding":"2px"}}>Add User</button></Link> */}

        </div>
    )
}

export default ReduxApp