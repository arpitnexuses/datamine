import React,{useState, useEffect} from 'react'
import {readData} from '../../FileCompo/jsonToBackendApi'
import "./Retool.css"
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
function TableSecond() {
    const [admin, setAdmins] = useState([]);


    useEffect(() => {
      let mounted = true;
      readData('admin').then((data) => {
        if (mounted) {
          setAdmins(data);
        }
      });
      return () => (mounted = false);
    }, [admin]);
    const columns=[
        { headerName:"First Name", field: "FirstName"},
        {headerName:"Last Name", field: "LastName"},
        {headerName:"Title", field: "Title"},
        {headerName:"Company Name", field: "Company_Name"},
        {headerName:"Email", field: "Email"},
        {headerName:"Email Status", field: "Email_Status"},
        {headerName:"Seniority", field: "Seniority"},
        {headerName:"Departments", field: "Departments"},
        {headerName:"Presonal Phone", field: "Presonal_Phone"},
        {headerName:"Company Phone", field: "Company_Phone"},
        {headerName:"Employees", field: "Employees"},
        {headerName:"Industry", field: "Industry"},
        {headerName:"Person Linkedin Url", field: "Person_Linkedin_Url"},
        {headerName:"Contact Loaction", field: "Contact_Loaction"},
        {headerName:"Company Address", field: "Company_Address"},
        {headerName:"Technologies", field: "Technologies"},
        {headerName:"Website", field: "Website"},
        {headerName:"Company Linkedin Url", field: "Company_Linkedin_Url"},
        {headerName:"Company Country", field: "Company_Country"},
        {headerName:"Total Funding", field: "Total_Funding"},
        {headerName:"Annual Revenue", field: "Annual_Revenue"},




    ]
    const defaultColDef = {
        sortable: true, editable: true, filter: true, floatingFilter: true
    }
    let gridApi;
    const onGridReady = (params) => {
        gridApi=params.api;
    }
    const onExportClick=()=>{
        gridApi.exportDataAsCsv();
    }
  return (
    <>
    <div>
        <button onClick={()=> onExportClick()}>Export</button>
    </div>
    <div className="ag-theme-alpine" style={{height: 600, width: 1400 , margin:"20px"}}>
        <AgGridReact rowData={admin} columnDefs={columns} defaultColDef={defaultColDef} onGridReady={onGridReady}/>
    </div>
    </>
  )
}

export default TableSecond