const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	user:"root",
	host:"localhost",
	password:"Your_Password",
	database:"Scheduler"
});

app.post('/register',(req,res)=>{
	const full_name = req.body.full_name;
	const password = req.body.password;
	const dept = req.body.dept;
	const year = req.body.year;
	const username = req.body.username;
	console.log(full_name,password,dept,year,username)
	db.query("INSERT INTO UserDetails(Username, Email, Password, Dept, Year) VALUES (?, ?, MD5(?), ?, ?)",
		[full_name, username, password, dept, year],
		(err, result) =>{
			console.log(err);
	});

})

app.post('/login',(req,res)=>{
	const username = req.body.username;
	const password = req.body.password;
	db.query("SELECT * FROM UserDetails WHERE Email = ?  AND Password = MD5(?)",
		[username, password],
		(err, result) =>{
			
			if(err){	
				res.send({err:err});
			}

			if(result.length > 0) {
				res.send(result);
			} else {
				res.send({message:"Wrong user/password combination!"});
			}
		});

})

app.post('/dashboard',(req,res)=>{
	const Email = req.body.email;
	console.log(Email)
	db.query("SELECT Dept,Year FROM UserDetails WHERE Email = ?",
		[Email],
		(err, result) =>{

			if(err){
				res.send({err:err});
			}

			if(result.length > 0) {
			    console.log(result[0].Dept)
                db.query("select * from Course_Details where deptName = ? and year= ?",
                    [result[0].Dept,result[0].Year],
                    (errors, results) =>{
                    if(errors){
                    	res.send({errors:errors});
                    }
                        console.log(results)
                        res.send(results);
                    });
			}
			else {
				res.send(result);
			}
		});

})

app.post('/assignments',(req,res)=>{
	const Email = req.body.email;
	const id = req.body.cid;
	console.log(Email)
	console.log(id)
	db.query("SELECT * FROM AssignmentDetails WHERE  Cid= ?",
		[id],
		(err, result) =>{

			if(err){
				res.send({err:err});
			}

			if(result.length > 0) {
			    console.log(result[0].Dept)
                    res.send(result)
                    }

			else {
				res.send(result);
			}
		});

})

app.listen(3001,() => {
	console.log("running Server")
});