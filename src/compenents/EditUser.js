import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editUser } from "../redux/counterSlice";
// import Button from "../../components/Button"
// import TextField from "../../components/TextField"
// import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.counter);
  console.log(users)
  const navigate = useNavigate();
  const existingUser = users.contacts.filter((user) => user.id == params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <input
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Putin Doe' }}
      />
      <br />
      <input
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'Putin@mail.com' }}
      />
      <button onClick={handleEditUser}>Edit</button>
    </div>
  )
}

export default EditUser