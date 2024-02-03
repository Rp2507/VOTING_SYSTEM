import Cookies from 'js-cookie';
import './App.css';
import Dashboard from './components/admin/Pages/Dashboard';
import Login from './components/auth/Login';
import TryLogin from './components/auth/TryLogin';
import Layout from './components/common/Layout';
import { Route, Routes } from 'react-router-dom';
import Election from './components/admin/Pages/Election';
import Party from './components/admin/Pages/Party';
import PartyConnection from './components/admin/Pages/PartyConnection';
import User from './components/admin/Pages/User';
import Sidebar from './components/common/Sidebar';

function App() {

  const role = Cookies.get("Role")
  // console.log(role, 'role');

  if (!role || role === "") {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    )
  } else if (role === 'admin') {
    return (
      <div>
        {/* <Sidebar/> */}
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/election' exact element={<Election />} />
          <Route path='/party' exact element={<Party />} />
          <Route path='/partyConnection' exact element={<PartyConnection />} />
          <Route path='/user' exact element={<User />} />
          </Route>
        </Routes>
      </div>
    )
  }

  return (
    <>
      {/* <Login /> */}
      {/* <Layout/> */}
      {/* <TryLogin/> */}
      {/* <Dashboard/> */}
    </>
  );
}

export default App;
