import { useState, useEffect } from "react";
import View from "../View";
import "./Recruit.css";
import Button from "../../components/Button/Button";
import CourseList from "../../components/CourseList/CourseList";
import CourseForm from "../../components/CourseForm/CourseForm";

import { socket } from "../../App";

const Recruit = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [formProps, setFormProps] = useState({});
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch(`/get_courses?for=${"me"}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data.data);
      });
  };

  const addCourseSocket = () => {
    socket.on("courseAddedResponse", (res) => {
      const course = res.data.data.body;
      setCourses((oldCourses) => [...oldCourses, JSON.parse(course)]);
    });
  };

  useEffect(() => {
    addCourseSocket();
    fetchCourses();
  }, []);

  const deleteCourse = (courseNumber) => {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      fetch("delete_course/" + courseNumber.toString(), {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "1") {
            setFormStatus(false);
            fetchCourses();
          }
        });
    }
  };

  const signOut = () => {
    fetch("/signout", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        if (data.status === "1") {
          window.location = "/login";
        }
      });
    });
  };

  return (
    <View title="Welcome to your dashboard" className="RecruitView">
      <div className="header">
        <h2>Your Courses</h2>
        <Button
          icon="fa-solid fa-plus"
          onClick={() => {
            setFormProps({
              mode: "add",
            });
            setFormStatus(true);
          }}
        >
          Add Course
        </Button>

        <Button
          background="#ECD277"
          icon="fa-solid fa-unlink"
          onClick={() => {
            signOut();
          }}
        >
          Disconnect
        </Button>
        <Button
          background="#DF5656"
          icon="fa-solid fa-sign-out"
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </Button>
      </div>

      <CourseList
        courses={courses}
        view="recruit"
        for="me"
        toggleForm={setFormStatus}
        formProps={setFormProps}
      />
      {formStatus && (
        <CourseForm
          {...formProps}
          deleteCourse={deleteCourse}
          fetchCourses={fetchCourses}
          setFormStatus={setFormStatus}
        />
      )}
    </View>
  );
};

export default Recruit;
