import React from 'react'
import { useDispatch } from 'react-redux'
import { Sidebar } from './components/'
import { changeTheme } from './redux/actions'
import Themes from './themes'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div className='App'>
      <Sidebar />

      <div className="buttons">
        <button className='themeBtn grey' onClick={() => dispatch(changeTheme(Themes.greyTheme))}>grey</button>
        <button className='themeBtn dark' onClick={() => dispatch(changeTheme(Themes.defaultTheme))}>dark</button>
        <button className='themeBtn violet' onClick={() => dispatch(changeTheme(Themes.violetTheme))}>violet</button>
      </div>
    </div>
  )
}

export default App
