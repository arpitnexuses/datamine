import React ,{useEffect} from 'react'
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { usePermissions } from 'react-admin';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./admin.css"
function Adminpage({history}) {

    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo ){
      history.push("/login");}    
     
   },[history,userInfo])
  
  
  return (
    <MainScreen className="mainsc" title={`Welcome Admin`}>
      <div className='mop'>
             <Link to="/adminclient">
             <Button variant="primary" size="lg" id="linkbutton" className="gap2">
       ALL CLIENT LIST
      </Button>
      </Link>
      {/* <Link to="/allpartners">
             <Button variant="primary" size="lg" id="linkbutton" className="gap2">
       ALL PARTNER LIST
      </Button>
      </Link> */}
      <Link to="/uploaddoc">
             <Button variant="primary" size="lg" id="linkbutton" className="gap2">
       Upload Quote's For Client
      </Button>
      </Link>
    </div>
    </MainScreen>
  )
}

export default Adminpage