import mongoose from "mongoose";
      import bcrypt from "bcryptjs";
      
      // Define schema (structure of employe collection in DB)
      const employeSchema = new mongoose.Schema({
        ename: {
          type: String,
          required: true, // must provide
        },
        email: {
          type: String,
          required: true,
          unique: true, // no duplicate emails
        },
        contact: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        age: {
          type: String,
          required: true, // must provide
        },
        gender: {
          type: String,
          required: true,
          unique: true, // no duplicate emails
        },
        salary: {
          type: String,
          required: true,
        },
        qualification: {
          type: String,
          required: true,
        },
        ads: {
          type: String,
          required: true,
        },
        pic: {
          type: String,
          required: true,
        },
        role:{
          type: String,
          default: "Employe", // default role is employe 
          enum: ["Employe", "admin"] ,// can be either employe or admin
        },
      });
      
      // Before saving → hash password
      employeSchema.pre("save", async function (next) {
        if (!this.isModified("password")) return next(); // only hash if password is new
        this.password = await bcrypt.hash(this.password, 10);
        next();
      });
      
      const Employe = mongoose.model("Employe", employeSchema);
      export default Employe;