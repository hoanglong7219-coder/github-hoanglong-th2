import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { route } from './routes/index';
import HeaderComponent from './components/header/HeaderComponent';






 function App() {


  return (
    <div>
      <HeaderComponent/>
        <Router>
          <Routes>
            {route.map((route) =>{
              const Page = route.page
              return (
                <Route key={route.id} path={route.path} element={<Page/>} />
              )
            })}
              
          </Routes>
        </Router>
    </div>
  )
}
export default App