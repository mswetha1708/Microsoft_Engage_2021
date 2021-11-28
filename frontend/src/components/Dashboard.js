import React, { useEffect } from "react";
import "./Dashboard.css";
import { useState } from "react";
import ClassCard from "./ClassCards.js";
import Axios from 'axios';

function Dashboard() {
//  const [user, loading, error] = useAuthState(auth);
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
//      await db
//        .collection("users")
//        .where("uid", "==", user.uid)
//        .onSnapshot((snapshot) => {
//          setClasses(snapshot?.docs[0]?.data()?.enrolledClassrooms);
//        });
    const email = localStorage.getItem('Email')
    console.log("Hello")
    console.log(email)
    Axios.post('http://localhost:3001/dashboard',{
        email: email,
      }).then((response ) => {
        console.log(response)
        setClasses(response.data)
        console.log(classes)
//        history.push("/dashboard");
      });
    console.log(classes)
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
 //   if (loading) return;
  });
  //, [user, loading]);

  useEffect(() => {
    if (classes.length != 0) return;
    fetchClasses();
  });
  //, [user, loading]);

  return (
    <div className="dashboard">
      {classes.length === 0 ? (
        <div className="dashboard__404">
          No classes found! Join or create one!
        </div>
      ) : (
        <div className="dashboard__classContainer">
          {classes.map((individualClass) => (
            <ClassCard
              creatorName={individualClass.deptName}
              creatorPhoto={individualClass.creatorPhoto}
              name={individualClass.CourseName}
              id={individualClass.Cid}
              style={{ marginRight: 30, marginBottom: 30 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;