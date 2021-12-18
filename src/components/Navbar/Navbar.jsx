import { NavLink } from 'react-router-dom'
import Profile from '../Profile/Profile';
import Messages from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import Users from '../Users/Users'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><NavLink to="/profile"><Profile /></NavLink></div>
      <div><NavLink to="/dialogs"><Messages /></NavLink></div>
      <div><NavLink to="/news"><News /></NavLink></div>
      <div><NavLink to="/music"><Music /></NavLink></div>
      <div><NavLink to="/settings"><Settings /></NavLink></div>
      <div><NavLink to="/users"><Users /></NavLink></div>
    </div>
  )
}
export default Navbar;
