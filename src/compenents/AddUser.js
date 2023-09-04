import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
import { addData,updataData } from '../redux/counterSlice';

const initialState = {
  name: "",
  email: "",
  phone: "",
};

function AddUser() {
  const [state, setState] = useState(initialState);
  const { count, contacts } = useSelector((state) => state.counter)
  console.log(contacts[3])
  // const history = useHistory();
  const dispatch = useDispatch()
  const { name, email, phone, status } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    dispatch(addData(state))
    console.log(contacts)

    //   if (!name || !email || !phone || !status) {
    //     toast.error("Please provide value into each input field");
    //   } else {

    //   }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={email || ""}
          onChange={handleInputChange}
        />
        {/* <label htmlFor="status">Status</label>
        <select
          className="dropdown"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please Select Status</option>
          <option value="Active" selected={status === "Active" ? status : ""}>
            Active
          </option>
          <option
            value="Inactive"
            selected={status === "Inactive" ? status : ""}
          >
            Inactive
          </option>
        </select> */}
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Contact No ..."
          value={phone || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddUser