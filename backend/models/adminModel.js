import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    FirstName:{  
      type:String,
      require:true
  },  
  LastName:{  
    type:String,
    require:true
  },  
  Title:{  
    type:String,

  },  
  Company_Name:{  
    type:String,
 
  },  
  Email:{  
    type:String,
  
  },  
  Email_Status:{  
    type:String,
   
  },  
  Seniority:{  
    type:String,

  },  
  Departments:{  
    type:String,
 
  },  
  Presonal_Phone:{  
    type:Number,

  },
  Company_Phone: {
    type:String,

  },
  Employees: {
    type:Number,
    
  },
  Industry: {
    type:String,
    
  },
  Person_Linkedin_Url: {
    type:String,
    
  },
  Contact_Loaction: {
    type: String,
  },
  Company_Address:{
    type: String,
  },
  Technologies: {
    type: String,
  },
  Website: {
    type:String,
    
  },
  Company_Linkedin_Url: {
    type:String,
    
  },
  Company_Country:{
    type:String,
   
  },
  Total_Funding:{
    type: String,
    
  },
  Annual_Revenue:{
    type:Number

  },
  },
  { timestamps: true }
);

const Admin = mongoose.model('datab', adminSchema);
export default Admin
