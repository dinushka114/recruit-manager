import React, { useState, useEffect, useContext } from "react";
import RecruitCard from "../../components/RecruitCard/RecruitCard";
import View from "../View";
import "./Manager.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Course from "../../components/Course/Course";
import HeadText from "../../components/HeadText/HeadText";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Button from "../../components/Button/Button";

const Manager = () => {
  const [recruitUsers, setRecruitUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showRecruitResults, setShowRecruitResults] = useState(true);
  const [recruitCourses, setRecruitCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecruitUsers = () => {
    fetch(`/get_recruit_users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setRecruitUsers(data.data);
      });
  };

  const showRecruitCourses = (id) => {
    setLoading(true);
    fetch(`/get_courses/` + id)
      .then((response) => response.json())
      .then((data) => {
        setRecruitCourses(data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRecruitUsers();
  }, []);

  const showResults = (id) => {
    showRecruitCourses(id);
    setShowUsers(!showUsers);
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
    <View title="Manager Dashboard" className="RecruitView">
      {showUsers && (
        <div className="users">
          <div style={{ display: "flex" }}>
            <div style={{ marginBottom: "20px" }}>
              <HeadText title="Available Recruits" />
            </div>

            <div id="disconnect_button" style={{ marginLeft: "10px" }}>
              <Button
                background="#ECD277"
                icon="fa-solid fa-unlink"
                onClick={() => {
                  signOut();
                }}
              >
                Disconnect
              </Button>
            </div>
            <div id="logout-btn" style={{ marginLeft: "5px" }}>
              <Button
                background="red"
                icon="fa-solid fa-sign-out"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </div>
          </div>
          {recruitUsers.map((user) => {
            return (
              <div style={{ cursor: "pointer", margin: "5px" }}>
                <div
                  key={user.id}
                  onClick={() => {
                    showResults(user.id);
                  }}
                  className="recruit-card"
                >
                  <div className="InputWithIcon">
                    <div
                      className="Icon"
                      style={{
                        background: "green",
                      }}
                    >
                      <FontAwesomeIcon icon={"fa-solid fa-user"} />
                    </div>
                    {<RecruitCard value={user.first_name} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {showUsers === false && (
        <div>
          <div className="title">
            <h1 style={{ marginTop: "0px" }}>Recruits Course Details </h1>

            <div id="back-btn" style={{ marginLeft: "5px" }}>
              <Button
                background="#51CCA3"
                icon="fa-solid fa-arrow-left"
                onClick={() => {
                  setShowUsers(!showUsers);
                  setShowRecruitResults(!showRecruitResults);
                }}
              >
                Back
              </Button>
            </div>
          </div>

          <div className={`CourseList`}>
            {loading ? (
              <LoadingSpinner />
            ) : !recruitCourses.length ? (
              <HeadText title="There are no courses to view" />
            ) : (
              recruitCourses.map((course) => {
                return <Course {...course} key={course.number} />;
              })
            )}
          </div>
        </div>
      )}
    </View>
  );
};

export default Manager;

const CloseButtonStyles = {
  marginLeft: "10px",
  backgroundColor: "#51CCA3",
  border: "none",
  borderRadius: "5px",
  fontSize: "20px",
  color: "white",
  cursor: "pointer",
};

const LogOutButtonStyles = {
  marginLeft: "10px",
  backgroundColor: "red",
  border: "none",
  borderRadius: "5px",
  fontSize: "20px",
  color: "white",
  cursor: "pointer",
};
