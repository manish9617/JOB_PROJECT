const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3000;
const salt = 10;
const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Manish@123",
  database: "JobPortal",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});

app.post("/postdata", upload.single("resume"), (req, res) => {
  // Generate salt for password hashing
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.error("Error generating salt:", err);
      return res.status(500).json({ Error: "Internal server error" });
    }

    // Hash the password
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ Error: "Internal server error" });
      }

      // Prepare SQL query
      const sql =
        "INSERT INTO JobSeeker (JsFName, JsLName, JsEmail, AdharId, DOB, Phone, Gen, Resume, JsExpYear, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.adhar,
        req.body.dob,
        req.body.phone,
        req.body.gender,
        req.file.buffer, // Use req.file.buffer for file data
        req.body.experience,
        hash, // Storing hashed password in the database
      ];
      // Execute SQL query
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error executing SQL query:", err);
          return res.status(500).json({ Error: "Internal server error" });
        }
        // console.log("New record inserted:", result);
        res.status(200).json({ Status: "Success" });
      });
    });
  });
});

app.post("/login-user", (req, res) => {
  const sql = "SELECT * FROM jobseeker where JsEmail=?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].pwd,
        (err, response) => {
          if (err)
            return res.json({ Error: "Password compare error in server" });
          if (response) {
            const name = data[0].firstName + " " + data[0].lastName;
            const id = data[0].JsId;
            const token = jwt.sign({ name, id }, "key", { expiresIn: "1d" });
            res.cookie("token", token);
            return res.json({ Status: "Success", token });
          } else {
            return res.json({ Error: "Password not correct" });
          }
        }
      );
    } else {
      return res.json({ Error: "Email not exist" });
    }
  });
});
const varifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ Error: "You are not authenticated" });
  else {
    jwt.verify(token, "key", (err, decoded) => {
      if (err) return res.json({ Error: "Token is not correct" });
      else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
app.get("/", varifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});
