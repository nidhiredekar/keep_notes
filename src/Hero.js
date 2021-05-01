import React from "react";
import './App.css';
import Notesdemo from "./notesdemo";
import './search/search.css';
import SidebarComponent from './sidebar/sidebar'
import EditorComponent from './editor/editor'
import { firebase } from '@firebase/app'
import App from './App'
 




const Hero = ({handleLogout}) => {
    

    return (

        <div className="hero">
      
           <nav>
               <h2>WELCOME!!!</h2>
               <button onClick={handleLogout}>LOG OUT</button>
   
           </nav>
               <Notesdemo/>
           </div>
    
    );

};

 



export default Hero;