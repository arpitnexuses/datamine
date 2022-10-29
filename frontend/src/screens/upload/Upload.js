
import React, { useState, useEffect } from "react";
import axios from 'axios'

function Upload() {
  const [csvFile, SetCsvFile] = useState();
  return (
    <div className="App">
     
        <div>
          Select file
          <input type="file" name="file" onChange={e => {
            SetCsvFile(e.target.files)
            const formData = new FormData();
            formData.append('name', "FILENAME");
            formData.append('file', csvFile);

            const url = 'http://localhost:5005/upload';
            axios({
              method: 'POST',
              url: url,
              headers: {
                ContentType: 'multipart/form-data'
              },
              body: formData
            })
              .then(res => console.log(res))
              .catch(err => console.log(err));

          }} />
        </div>

    </div>
  );
}

export default Upload;