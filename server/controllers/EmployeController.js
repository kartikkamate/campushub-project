import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // optional for login token
import employe from "../models/Employe.js"
import nodemailer from 'nodemailer';
// -------------------- REGISTER --------------------
export const registerUser = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    // check if employe already exists
    const existingEmploye = await Employe.findOne({ email });
    if (existingEmploye) {
      return res.status(400).json({ message: "employe already exists ❌" });
    }

    // create new user
    const newEmploye = new Employe({ name, email, contact, password });
    await newEmploye.save(); // password will be hashed automatically
    sendEmail(newEmploye);
    res.status(201).json({ message: "User registered successfully✅" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed❌", error: error.message });
  }
};
const sendEmail = async (newEmploye) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                employe: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
 
        const mailOptions = {
            from: process.env.EMAIL, // Sender's email address
            to: newEmploye.email, // Receiver's email address
            subject: 'Welcome to Our Service!', // Clear subject for the welcome email
            //remove space before (<p>Hello $ {newEmploye.name},</p>) to <p>Hello $ {newEmploye.name},</p> and add backticks from opening of p tag to closign of last p tag
            html:`<p>Hello $ {newEmploye.name},</p> 
                   <p>Welcome to our service! We're thrilled to have you onboard.</p>
                   <p>If you have any questions or need help getting started, feel free to reach out to our support team.</p>
                   <p>Best regards,<br>Your Company Name</p> // HTML body for better formatting`
        };
 
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send welcome email' });
            }
            console.log('Email sent:', info.response);
        });
    } catch (error) {
        console.error('Error in email function:', error);
        throw new Error(error);
    }
};

        


// -------------------- LOGIN --------------------
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find employe by email
    const employe = await User.findOne({ email });
    if (!employe) return res.status(400).json({ message: "Invalid credentials ❌" });

    // check password
    const isPasswordValid = await bcrypt.compare(password, employe.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials ❌" });

    // optional: create token for session
    const token = jwt.sign({ id: user._id }, "secretKey123", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful✅",
      token,
      employe: {
        employeId: employe._id,
        name: employe.name,
        email: employe.email,
        contact: employe.contact,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed❌", error: error.message });
  }
};