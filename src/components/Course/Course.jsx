import React from "react";
import "./Course.css";

const Course = (props) => {
    return (
        <div
            className={`Course ${props.edit ? "cursor" : ""}`}
            onClick={() => {
                if (props.edit) {
                    props.formProps({
                        title: props.title,
                        number: props.number,
                        type: props.type,
                        objectives: props.objectives,
                        modality: props.modality,
                        duration: props.duration,
                        status: props.status,
                        startDate: props.start_date,
                        endDate: props.end_date,
                        mode: "edit",
                    });
                    props.toggleForm(true);
                }
            }}
        >
            <div className="statusColor" data-status={props.status}></div>
            <div className="contents">
                <div className="head">
                    <h3>
                        {props.title}
                        {props.type && ` - ${props.type}`}
                    </h3>
                    <span className="number">{props.number}</span>
                </div>
                <div className="body">
                    <p style={{ textTransform: "capitalize" }}>
                        <b>Status: </b> {props.status}
                    </p>
                    <p>
                        <b>Duration: </b> {props.duration} Hour(s)
                    </p>
                    <p>
                        <b>Start Date: </b> {props.start_date}
                    </p>
                    <p>
                        <b>End Date: </b> {props.end_date}
                    </p>
                    {props.modality && (
                        <p>
                            <b>Modality: </b> {props.modality}
                        </p>
                    )}
                    {props.objectives && (
                        <p>
                            <b>Objectives: </b> {props.objectives}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
