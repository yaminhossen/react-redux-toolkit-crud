import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ReduxApp from './compenents/ReduxApp';
import Home from './compenents/Home';
import AddUser from './compenents/AddUser';
import UpdateUser from './compenents/UpdateUser';
import UserDetails from './compenents/UserDetails';
import EditUser from './compenents/EditUser';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/adduser">Adduser</Link>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/adduser' element={<AddUser></AddUser>}></Route>
      <Route path='/update-user/:id' element={<UpdateUser></UpdateUser>}></Route>
      <Route path='/edit-user/:id' element={<EditUser></EditUser>}></Route>
      <Route path='/user-details/:id' element={<UserDetails></UserDetails>}></Route>
      {/* <Route path='/'></Route> */}
     </Routes>
    </div>
  );
}

export default App;
