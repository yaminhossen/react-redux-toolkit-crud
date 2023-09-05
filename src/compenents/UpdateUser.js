import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUser } from '../redux/counterSlice';

function UpdateUser() {
  const {id} = useParams();
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };
  const dispatch = useDispatch()
  const { count, contacts } = useSelector((state) => state.counter)
  const [state, setState] = useState(initialState);
  const existingUser = contacts.filter((user) => user.id ==id);
  // const { name, email, phone } = state;
  console.log(existingUser)
  const { name, email } = existingUser[0];
  const [values, setValues] = useState(
    {
      name,
      email
    }
  );
  console.log(values.name, values.email)

  const handleEditUser = (e) => {
    e.preventDefault();
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: id,
      name: values.name,
      email: values.email
    }));
    // navigate('/');
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(state)
  //   console.log(contacts)
  // };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
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
        onSubmit={handleEditUser}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
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
        {/* <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Contact No ..."
          value={phone || ""}
          onChange={handleInputChange}
        /> */}
        <input type="submit" value="Save" />

      </form>
    </div>
  )
}

export default UpdateUser