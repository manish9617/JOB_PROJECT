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

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});

app.post("/postdata-user", upload.single("resume"), (req, res) => {
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
      // console.log(result.insertId);
      // console.log("New record inserted:", result);
      const token = jwt.sign({ id: result.insertId, type: "user" }, "key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      res.json({ Status: "Success", token });
    });
  });
});

app.post("/postdata-hr", upload.single("logo"), (req, res) => {
  console.log("File:", req.file); // Check if the file is received
  console.log("Body:", req.body);
  if (!req.file) return res.json({ Error: "No file uploaded" });

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });

    const adminId = Math.floor(Math.random() * 5) + 1;
    const sql =
      "INSERT INTO hr (HrName, HrEmail, HrPwd, AdharId, CompName, CompAdd, CompPhone, CompWeb, CompanyLogo, AdminId,isVerify) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.adhar,
      req.body.CompName,
      req.body.CompAdd,
      req.body.CompPhone,
      req.body.web,
      req.file.buffer,
      adminId,
      0,
    ];

    db.query(sql, values, (error, response) => {
      if (error) {
        console.error(error);
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
            const token = jwt.sign({ id, type: "user" }, "key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success", token, info: data[0] });
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
            const token = jwt.sign({ id, type: "hr" }, "key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success", token, info: data[0] });
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
        req.a = decoded.type;
        next();
      }
    });
  }
};

app.get("/", varifyUser, (req, res) => {
  return res.json({ Status: "Success", type: req.a });
});

app.get("/get-userdata", varifyUser, (req, res) => {
  const id = req.id;
  const sql = "select * from jobseeker where JsId=?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success", info: result[0] });
  });
});

app.post("/job-post", varifyUser, (req, res) => {
  const id = req.id;
  const date = new Date().toISOString().split("T")[0];
  const sql =
    "INSERT INTO job (JobTitle, JobDescr,JobExperience,MiniEducat,City,Role,Salary,JobType,PostDate,HrId,workLocation,lastDate) values(?,?,?,?,?,?,?,?,?,?,?,?)";
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
    id,
    req.body.workLocation,
    req.body.lastDate,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ Error: "Error in inserting data" });
    }
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

app.post("/updateJob", varifyUser, (req, res) => {
  const id = req.id;
  const date = new Date().toISOString().split("T")[0];
  const sql =
    "update job set JobTitle=? ,JobDescr=?,JobExperience=?, MiniEducat=?,City=?,Role=?,Salary=?,JobType=?,PostDate=?,workLocation=? ,LastDate=? WHERE JobId = ? and HrID=?";
  const values = [
    req.body.JobTitle,
    req.body.JobDescr,
    req.body.JobExperience,
    req.body.MiniEducat,
    req.body.City,
    req.body.Role,
    req.body.Salary,
    req.body.JobType,
    date,
    req.body.workLocation,
    req.body.lastDate,
    req.body.JobId,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err) return res.json({ Error: "not updated job" });
    return res.json({ Status: "Success" });
  });
});

app.get("/AllApplicant/:id", (req, res) => {
  const { id } = req.params;
  const sql =
    "select jobseeker.* from jobseeker join jobapplication on jobseeker.JsId=jobapplication.JsId where jobapplication.JobId=?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ Status: "Success", applicant: result });
  });
});

app.post(
  "/postdata-education-user",
  varifyUser,
  upload.single("DegreeFile"),
  (req, res) => {
    const id = req.id;
    console.log("hello", id);
    const sql =
      "insert into education (JsId,DegreeName, InstituteName,StartDate,CompletionDate,DegreeFile,Percentage) values (?,?,?,?,?,?,?)";
    const values = [
      id,
      req.body.DegreeName,
      req.body.InstituteName,
      req.body.StartDate,
      req.body.CompletionDate,
      req.file.buffer,
      req.body.Percentage,
    ];
    db.query(sql, values, (err, result) => {
      if (err) throw err;
      return res.json({ Status: "Success" });
    });
  }
);

app.post("/postdata-experience-user", varifyUser, (req, res) => {
  const id = req.id;
  const sql =
    "insert into experience (JsId, StartDate,EndDate,JobTitle,CompanyName,Description) values (?,?,?,?,?,?)";
  const values = [
    id,
    req.body.startDate,
    req.body.endDate,
    req.body.jobTitle,
    req.body.companyName,
    req.body.description,
  ];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success" });
  });
});

app.post("/admin-register", (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) throw err;
    const sql = "INSERT INTO admin(adminName,AdminUserName,pwd) values(?,?,?)";
    const values = [req.body.name, req.body.email, hash];
    db.query(sql, values, (err, result) => {
      if (err) throw err;
      return res.json({ Status: "Success" });
    });
  });
});
app.post("/admin-login", (req, res) => {
  const sql = "select * from admin where AdminUserName=?";
  db.query(sql, [req.body.email], (err, result) => {
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        result[0].pwd,
        (err, response) => {
          if (err) throw err;
          if (response) {
            const id = result[0].AdminId;
            const token = jwt.sign({ id }, "key", { expiresIn: "1d" });
            res.cookie("token", token);
            return res.json({ Status: "Success", token });
          } else {
            return res.json({ Error: "Password not match" });
          }
        }
      );
    } else return res.json({ Error: "Emil not exist" });
  });
});

const varifyAdmin = (req, res, next) => {
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

app.get("/adminAuth", varifyAdmin, (req, res) => {
  return res.json({ Status: "Success" });
});

app.get("/educationDetails", varifyUser, (req, res) => {
  const id = req.id;
  const sql = "select * from education where JsId=?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success", education: result });
  });
});
app.get("/experienceDetails", varifyUser, (req, res) => {
  const id = req.id;
  const sql = "select * from experience where JsId=?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success", experience: result });
  });
});

app.post("/update-education", (req, res) => {
  const sql = `UPDATE education SET DegreeName = ?, InstituteName = ?, StartDate = ?,  CompletionDate = ?, Percentage = ? WHERE EduId = ?`;
  const value = [
    req.body.degreeName,
    req.body.instituteName,
    req.body.startDate,
    req.body.completionDate,
    req.body.percentage,
    req.body.id,
  ];
  db.query(sql, value, (err, result) => {
    if (err) {
      console.error("Error updating education:", err);
      return res
        .status(500)
        .json({ Status: "Error", Message: "Failed to update education" });
    }
    return res.json({ Status: "Success" });
  });
});

app.post("/update-experience", (req, res) => {
  const sql = `UPDATE experience SET CompanyName = ?, JobTitle = ?, StartDate = ?, EndDate = ?, Description = ? WHERE ExpId = ?`;
  const values = [
    req.body.comapanyName,
    req.body.jobTitle,
    req.body.startDate,
    req.body.endDate,
    req.body.description,
    req.body.id,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating education:", err);
      return res
        .status(500)
        .json({ Status: "Error", Message: "Failed to update education" });
    }
    return res.json({ Status: "Success" });
  });
});

app.post("/update-user-data", varifyUser, (req, res) => {
  const id = req.id;
  const sql =
    "update jobseeker set JsFName= ?, JsEmail=?,Phone=?, JsExpYear=? where JsId=?";
  const values = [
    req.body.Name,
    req.body.Email,
    req.body.DOB,
    req.body.Phone,
    req.body.ExpYear,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success" });
  });
});

app.get("/allJobs", (req, res) => {
  const sql =
    "SELECT job.JobId ,job.JobTitle, job.workLocation, job.JobType, job.Salary, HR.CompName FROM job INNER JOIN HR ON job.HrID = HR.HrID";
  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.json({ Status: "Success", jobs: result });
  });
});
