import Retool from "./Retool.js";
import { useState, useEffect } from "react";
import "./Retool.css"
import { useSelector } from "react-redux";


const Table = ({history}) => {
  const sample = {
    example1: "",
    example2: false,
    input: "",
  };

  const [retoolData, setRetoolData] = useState("");
  const [data, setData] = useState(sample);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if ( !userInfo ){
      history.push("/");}    
   },[history,userInfo])
  return (
    <div id="retool" style={{margin: "auto", marginBottom: "-100px", marginTop:"60px"}}>
      <Retool
        url="https://nexusesarpit.retool.com/embedded/public/2216dd1a-3cc5-404d-a637-092a2f8833f7"
        data={data}
        height="700px"
        width="1420px"
        onData={setRetoolData}
      ></Retool>
 
    </div>
  );
};

export default Table;
