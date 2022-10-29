import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { useSelector } from "react-redux";
import { addDataToModel, deleteData } from './jsonToBackendApi';
import './uploadn.css';

const ExcelToJson = ({history}) => {
  const [file, setFile] = useState('');

  function filePathset(e) {
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    setFile(file);
  }

  const addData = (data, name) => {
    console.log(data, name);

    addDataToModel(data, name).then((data) => {
      if (data) {
        console.log('yes');
        setFile('');
      } else {
        console.log('no');
      }
    });
  };

  const clearData = () => {

    deleteData('admin').then((data) => {});

    alert(`Data deleted Succesfully!`);
  };
  function readFile() {
    if (file === '') {
      alert('Insert some file');
    } else {
      var f = file;

      const reader = new FileReader();
      reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        wb.SheetNames.forEach(function (sheetName) {
          // console.log(sheetName);
          var name = sheetName.toLowerCase();
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            wb.Sheets[sheetName]
          );
          var json_object = JSON.stringify(XL_row_object);

          addData(json_object, name);
        });
      };
      reader.readAsBinaryString(f);
      alert(`sheets Added Succesfully!`);
    }
  }
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if ( !userInfo ){
      history.push("/");}    
   },[history,userInfo])

  return (
    <div id="choose">
      <input type='file' id='file' onChange={(e) => filePathset(e)} />
      <br/>
      <button className='btn btn-danger' id="buto"
        onClick={() => {
          readFile();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ExcelToJson;
