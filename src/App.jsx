import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import RegisterHelp from './views/RegisterHelp';
import MainWindow from './views/MainWindow'

/**
 * 主容器组件 App
 */
export default function App() {
  return (
    <div className="App">
      <div className='draggable-region'></div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/register/help" element={<RegisterHelp/>}/>
          <Route path='/main' element={<MainWindow/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

