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
    require:true 
  },  
  Company_Name:{  
    type:String,
    require:true
  },  
  Email:{  
    type:String,
    require:true
  },  
  Email_Status:{  
    type:String,
    require:true  
  },  
  Seniority:{  
    type:String,
    require:true  
  },  
  Departments:{  
    type:String,
    require:true 
  },  
  Presonal_Phone:{  
    type:Number,

  },
  Company_Phone: {
    type:String,

  },
  Employees: {
    type:Number,
    require:true 
  },
  Industry: {
    type:String,
    require:true  
  },
  Person_Linkedin_Url: {
    type:String,
    require:true  
  },
  Website: {
    type:String,
    require:true 
  },
  Company_Linkedin_Url: {
    type:String,
    require:true 
  },
  Company_Country:{
    type:String,
    require:true 
  },
  Annual_Revenue:{
    type:Number

  },
  },
  { timestamps: true }
);

const Admin = mongoose.model('datab', adminSchema);
export default Admin
