import React, { useState, useEffect } from 'react';
import { readData } from './jsonToBackendApi';

const DisplayInfo = () => {

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
  return (
    <div>
     
      <h3>Uploaded Data</h3>
      <div>
        <table className='table'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>

          </tr>
          {admin &&
            admin.map((u, i) => {
              return (
                <tr key={i}>
                  <td>{u.FirstName}</td>
                  <td>{u.LastName}</td>
                </tr>
              );
            })}
        </table>
      </div>
    
    </div>
  );
};

export default DisplayInfo;
