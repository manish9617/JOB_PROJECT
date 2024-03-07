const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const salt = 10;
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

app.post("//postdata-user", upload.single("resume"), (req, res) => {
  // Generate salt for password hashing

  // Hash the password
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.json({ Error: "Internal server error" });
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
        return res.json({ Error: "Internal server error" });
      }
      // console.log("New record inserted:", result);
      res.json({ Status: "Success" });
    });
  });
});

app.post("/postdata-hr", upload.single("logo"), (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error in hash password in server" });
    const adminId = Math.floor(Math.random() * 4) + 1;
    const sql =
      "INSERT INTO hr (HrName,HrEmail,HrPwd,AdharId,CompName,CompAdd, CompPhone,CompanyLogo,AdminId) values(?,?,?,?,?,?,?,?,?)";
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.adhar,
      req.body.CompName,
      req.body.CompAdd,
      req.body.CompPhone,
      req.file.buffer,
      adminId,
    ];
    db.query(sql, values, (err, response) => {
      if (err) {
        console.log(err);
        return res.json({ Error: "Inserting error in server" });
      }
      return res.json({ Status: "Success" });
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
            const id = data[0].JsId;
            const token = jwt.sign({ id }, "key", { expiresIn: "1d" });
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

app.post("/login-hr", (req, res) => {
  // console.log(req.body);
  const sql = "SELECT * from hr where HrEmail=?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Error in server " });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].HrPwd,
        (err, resposne) => {
          if (err) return res.json({ Error: "Error in password compare" });
          if (resposne) {
            const id = data[0].HrID;
            const token = jwt.sign({ id: id }, "key", { expiresIn: "1d" });
            res.cookie("token", token);
            return res.json({ Status: "Success", token, info: data });
          } else {
            return res.json({ Error: "wrong password" });
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
        req.id = decoded.id;
        next();
      }
    });
  }
};
app.get("/hr-auth", varifyUser, (req, res) => {
  return res.json({ Status: "Success" });
});
app.get("/", varifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});
app.post("/job-post", varifyUser, (req, res) => {
  const id = req.id;
  const date = new Date().toISOString().split("T")[0];
  const sql =
    "INSERT INTO job (JobTitle, JobDescr,JobExperience,MiniEducat,City,Role,Salary,JobType,PostDate,Active,HrId,workLocation,lastDate) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const values = [
    req.body.jobTitle,
    req.body.jobDescription,
    req.body.experience,
    req.body.minimumEducation,
    req.body.city,
    req.body.role,
    req.body.salary,
    req.body.jobType,
    date,
    true,
    id,
    req.body.workLocation,
    req.body.lastDate,
  ];
  console.log(id);
  db.query(sql, values, (err, result) => {
    if (err) return res.json({ Error: "Error in inserting data" });
    return res.json({ Status: "Success" });
  });
});

app.get("/hr-total-post-job", varifyUser, (req, res) => {
  const id = req.id;
  const sql =
    "select j.* ,COUNT(ja.JobId) as application from job j left join jobapplication ja on j.JobId=ja.JobId where j.HrID= ? group by j.JobId";
  db.query(sql, [id], (err, data) => {
    if (err) console.log(err);
    return res.json({ Status: "Success", jobs: data });
  });
});
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

app.post("/update-hr-profile", varifyUser, (req, res) => {
  const id = req.id;
  const sql =
    "update hr set HrName=? ,HrEmail=?,CompADD=?,CompPhone=?,CompName=? where HrID=?";
  db.query(
    sql,
    [
      req.body.name,
      req.body.email,
      req.body.address,
      req.body.phone,
      req.body.company,
      id,
    ],
    (err, response) => {
      if (err) throw err;
      return res.json({ Status: "Success", response });
    }
  );
});
