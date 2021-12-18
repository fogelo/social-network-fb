import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Users from "./components/Users/Users"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App