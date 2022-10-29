import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAIL
  } from "../constants/userConstants";
  import axios from "axios";


export const registerfile = (FirstName, LastName, Email, Email_Status, Title, Company_Name, Seniority, Departments, Personal_Phone, Company_Phone, Employees, Industry,  Person_Linkedin_Url, Website, Company_Linkedin_Url, Company_Country, Annual_Revenue  ) => async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_FILE_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
  
      const { data } = await axios.post(
        "/upload",
        { FirstName, LastName, Email, Email_Status, Title, Company_Name, Seniority, Departments, Personal_Phone, Company_Phone, Employees, Industry,  Person_Linkedin_Url, Website, Company_Linkedin_Url, Company_Country, Annual_Revenue  },
        config
      );
  
      dispatch({ type: UPLOAD_FILE_SUCCESS, payload: data });

  
      localStorage.setItem("uploadData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };