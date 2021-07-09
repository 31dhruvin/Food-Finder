import React, { useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './navbar';
import "../css/style.css"

import UserStore from '.././Store'


function App() {
    const [userData, setUserData] = useState({
        auth: false,
      });
    return (
        <>
        <UserStore.Provider value={{ userData, setUserData }}>
            
            <Navbar />
            <div>
                <Router>

                </Router>
            </div>
        </UserStore.Provider>
        
          </>
    );
}

export default App;

