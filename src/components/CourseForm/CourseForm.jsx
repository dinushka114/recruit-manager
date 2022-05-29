import { useState } from "react";
import Box from "../Box/Box";
import HeadText from "../HeadText/HeadText";
import "./CourseForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Socket IO
import { socket } from "../../App";

const CourseForm = (props) => {
    // Form States
    const [title, setTitle] = useState(props.title);
    const [number, setNumber] = useState(props.number);
    const [type, setType] = useState(props.type);
    const [objectives, setObjectives] = useState(props.objectives);
    const [modality, setModality] = useState(props.modality);
    const [duration, setDuration] = useState(props.duration);
    const [status, setStatus] = useState(props.status);
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);

    // UI States
    const [numberError, setNumberError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [startDateError, setStartDateError] = useState("");
    const [endDateError, setEndDateError] = useState("");
    const [durationError, setDurationError] = useState("");


    const updateCourse=(courseNumber)=>{
        setNumberError("");
        setTitleError("");
        setStartDateError("");
        setEndDateError("");
        setDurationError("");

        let passed = true;

        if (!number) {
            setNumberError("A course number is required");
            passed = false;
        }
        if (!title) {
            setTitleError("A title is required");
            passed = false;
        }
        if (!startDate) {
            setStartDateError("A starting date is required");
            passed = false;
        }
        if (!endDate) {
            setEndDateError("A end date is required");
            passed = false;
        }
        if (!duration) {
            setDurationError("A duration is required");
            passed = false;
        }

        if (passed) {
            let payload = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    number: number,
                    title: title,
                    status: status,
                    start_date: startDate,
                    end_date: endDate,
                    objectives: objectives,
                    type: type,
                    modality: modality,
                    duration: duration,
                }),
            };
            fetch("/update_course/"+number.toString(), payload)
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "ok") {
                        setTitle("");
                        setNumber("");
                        setType("");
                        setObjectives("");
                        setModality("");
                        setDuration("");
                        setStatus("");
                        setStartDate("");
                        setEndDate("");

                        props.setFormStatus(false);
                        props.fetchCourses()
                    }

                });
        }
    }

    const addCourse = () => {
        setNumberError("");
        setTitleError("");
        setStartDateError("");
        setEndDateError("");
        setDurationError("");

        let passed = true;

        if (!number) {
            setNumberError("A course number is required");
            passed = false;
        }
        if (!title) {
            setTitleError("A title is required");
            passed = false;
        }
        if (!startDate) {
            setStartDateError("A starting date is required");
            passed = false;
        }
        if (!endDate) {
            setEndDateError("A end date is required");
            passed = false;
        }
        if (!duration) {
            setDurationError("A duration is required");
            passed = false;
        }

        if (passed) {
            let payload = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    number: number,
                    title: title,
                    status: status,
                    start_date: startDate,
                    end_date: endDate,
                    objectives: objectives,
                    type: type,
                    modality: modality,
                    duration: duration,
                }),
            };
            fetch("/add_course", payload)
                .then((response) => response.json())
                .then((data) => {
                    socket.emit("courseAdded", { 'data': payload })
                    if (data.status === "ok") {
                        setTitle("");
                        setNumber("");
                        setType("");
                        setObjectives("");
                        setModality("");
                        setDuration("");
                        setStatus("");
                        setStartDate("");
                        setEndDate("");

                        props.setFormStatus(false);
                    }



                });
        }


    };

    return (
        <Box className="CourseForm">
            <form>
                <div>
                    <HeadText
                        title={
                            props.mode === "add" ? "New Course" : "Edit Courses"
                        }
                    />
                    <button
                        className="CloseIcon"
                        onClick={() => props.setFormStatus(false)}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                    <div className="row">
                        <div className="column">
                            <Input
                                placeholder="Title"
                                type="text"
                                value={title}
                                setOnChange={setTitle}
                            />
                            {titleError && (
                                <span className="error">{titleError}</span>
                            )}
                            <Input
                                placeholder="Course Number"
                                type="text"
                                value={number}
                                setOnChange={setNumber}
                            />
                            {numberError && (
                                <span className="error">{numberError}</span>
                            )}
                            <Input
                                placeholder="Type Of Course"
                                type="text"
                                value={type}
                                setOnChange={setType}
                            />
                        </div>
                        <div className="column">
                            <Input
                                placeholder="Objectives"
                                type="text"
                                value={objectives}
                                setOnChange={setObjectives}
                            />
                            <Input
                                placeholder="Modality"
                                type="text"
                                value={modality}
                                setOnChange={setModality}
                            />
                            <Input
                                placeholder="Duration (In Hours)"
                                type="number"
                                value={duration}
                                setOnChange={setDuration}
                            />
                            {durationError && (
                                <span className="error">{durationError}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row secondRow">
                        <div>
                            <HeadText title="Status" />
                            <div className="column">
                                <select
                                    name="status"
                                    id="statusSelect"
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                    }}
                                    value={status}
                                >
                                    <option value="deadline exceeded">
                                        Deadline Exceeded
                                    </option>
                                    <option value="in progress">
                                        In Progress
                                    </option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <HeadText title="Dates" />
                            <div className="row datesForm">
                                <div>
                                    <Input
                                        placeholder="Start Date"
                                        type="date"
                                        value={startDate}
                                        setOnChange={setStartDate}
                                    />
                                    {startDateError && (
                                        <span className="error">
                                            {startDateError}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        placeholder="End Date"
                                        type="date"
                                        value={endDate}
                                        setOnChange={setEndDate}
                                    />
                                    {endDateError && (
                                        <span className="error">
                                            {endDateError}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="buttons">
                {props.mode === "add" && (
                    <Button
                        onClick={() => {
                            addCourse();
                        }}
                    >
                        Add Course
                    </Button>
                )}
                {props.mode === "edit" && (
                    <div>
                        <Button onClick={() => {
                            updateCourse(number)
                        }}>Save Changes</Button>
                        <Button onClick={() => { props.deleteCourse(number) }} background="#DF5656">Delete Course</Button>
                    </div>
                )}
            </div>
        </Box>
    );
};

CourseForm.defaultProps = {
    mode: "add",
    title: "",
    number: "",
    type: "",
    objectives: "",
    modality: "",
    duration: "",
    status: "in progress",
    startDate: "",
    endDate: "",
};

export default CourseForm;
