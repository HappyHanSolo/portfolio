
import {useNavigate} from 'react-router-dom';
import RamboThumbs from "../../../assets/Rambo Thumbs Up.jpg"
import meowBongo from "../../../assets/meow_bongotap.gif"
import "../../../styles/Partials/_connectFormCompleted.scss"

export default function ConnectFormCompleted(){
  const navigate = useNavigate();

  const handleClose = () => {
      navigate('/'); 
  };

    return(
        <div className="completedContactBackground" id="connectFormCompleted">
            <div className="completedContactFormWrapper">                
              <h1>Thanks for reaching out!</h1>
              <p>Looking forward to connecting <img src={meowBongo}/></p>
              <img src={RamboThumbs}/>
              <button className="Close" onClick={handleClose}>Close</button>
            </div>
        </div>
)}