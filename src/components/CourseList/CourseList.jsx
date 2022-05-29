import { React, useState, useEffect } from "react";
import "./CourseList.css";
import Course from "../Course/Course";


const CourseList = (props) => {

    return (
        <div className={`CourseList ${props.className ? props.className : ""}`}>
            {props.courses.map((course) => {
                return (
                    <Course
                        {...course}
                        key={course.number}
                        edit={props.view === "recruit" ? true : false}
                        toggleForm={props.toggleForm}
                        formProps={props.formProps}
                    />
                );
            })}
        </div>
    );
};

export default CourseList;
