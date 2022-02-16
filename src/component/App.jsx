import React, { useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './navbar';
import "../css/style.css"

import UserStore from '.././Store'
import { HashRouter } from 'react-router-dom';


function App() {
    const [userData, setUserData] = useState({
        auth: false,
      });
    return (
        <>
        <HashRouter>
        <UserStore.Provider value={{ userData, setUserData }}>
            
            <Navbar />
            
        </UserStore.Provider>
        </HashRouter>
          </>
    );
}

export default App;

