import React, { Component } from "react";
import axios from 'axios';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const PORT = process.env.REACT_APP_PORT;

class ExcelToJsonto extends Component {
    constructor() {
        super();
        this.state = {
            csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const { csvfile } = this.state;
        console.log(csvfile);
        var fileName = csvfile.name;
        const formData = new FormData();
        formData.append(
            "fileChooser",
            csvfile,
        );
        axios.post("http://localhost:5005/api/admin", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => { // then print response status
            console.log(res)
            if (res === 'success') {
                alert("File data uploaded Successfully");
            } else {
                if (res === 'Error') {
                    alert("Please ensure that your CSV file is formatted using the correct template, if you have any doubt contact the support team.");

                } else {
                    console.log(res)
                }

            }

        })
    };

    

    updateData(result) {
        var data = result.data;
        console.log(data);
    }

    render() {
        console.log(this.state.csvfile);
        return (
            <div className="App">
                <h2>Import CSV File!</h2>
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload now!</button>
            </div>
        );
    }
}

export default ExcelToJsonto;