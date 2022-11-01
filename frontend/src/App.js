import "./App.css";
import { BrowserRouter as Router, Switch, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

import Dashboard from "./screens/MyNotes/Dashboard";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { useEffect } from "react";


import LoginScreen from "./screens/LoginScreen/LoginScreen";

import HeaderNew from "./components/HeaderNew";
import Upload from "./screens/upload/Upload";
import ExcelToJson from "./FileCompo/ExcelToJsonto";
import DisplayInfo from "./FileCompo/DisplayInfo";
import Table from "./screens/Retool/Table.js"
import TableSecond from "./screens/Retool/TableSecond";
function App() {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
      <div>
        <Router>

          <main className="App">
            <Switch>
              <Route path="/register" component={RegisterScreen} />
              <Route path="/login" component={LoginScreen} exact />
              <Route path="/" component={LoginScreen} exact />
              <div>
                <HeaderNew />
                <Route
                  path="/table"
                  component={TableSecond} />

                <Route
                  path="/dashboard"
                  component={Dashboard} />
                <Route
                  path="/upload"
                  component={ExcelToJson} />
                <Footer />

              </div>
            </Switch>

          </main>

        </Router>
      </div>
    </>
  );
}

export default App;
