import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./Dashboard.css"


import { useSelector } from "react-redux";


function Dashboard({history}) {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  },[history,userInfo])
 

  return (
    
    <h1 className="h1" style={{marginTop: "150px", marginBottom: "-119px"}}> Welcome </h1>
  );
}

export default Dashboard;
