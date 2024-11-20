import React, {useState, useEffect} from 'react';
import "../../../styles/Partials/_navBar.scss";
import "../ConnectForm/index"
import Pikmin from "../../../assets/pikmin.gif"
import ConnectForm from '../ConnectForm/index';


export default function NavBar({}) {
   const [connectState, setConnectState] = useState(false)
   function handleForm(){
     setConnectState(!connectState)
   }
   
   return (
     <div>
         <nav>
             <ul>
                 <li><a className="homelink" href="#home">Hanson</a></li>
                 <li><a href="#about">About</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a className="connectlink" href="#contact" onClick={()=>{handleForm()}}>Connect</a></li>
             </ul>
         </nav> 
         <img className='pikimin' src={Pikmin}></img>
         {connectState && <ConnectForm handleForm={handleForm} />}
     </div>
   );
}

