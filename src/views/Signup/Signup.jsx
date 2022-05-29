import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import View from "../View";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Signup.css";
import HeadText from "../../components/HeadText/HeadText";
import Center from "../../components/Center/Center";
import { ViewContext } from "../../contexts/ViewContext";

const Signup = () => {
    const { changeView } = useContext(ViewContext);

    let history = useNavigate();

    // FIelds
    const [surname, setSurname] = useState("");
    const [firstName, setFirstName] = useState("");

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [dateOf1st, setDateOf1st] = useState("");
    const [experience, setExperience] = useState("");

    const [nextPossiblePositions, setNextPossiblePositions] = useState("");
    const [details, setDetails] = useState("");
    const [necConditions, setNecConditons] = useState("");

    const [dp1, setDp1] = useState("");
    const [dp2, setDp2] = useState("");
    const [dp3, setDp3] = useState("");

    const [strength1, setStrength1] = useState("");
    const [strength2, setStrength2] = useState("");
    const [strength3, setStrength3] = useState("");

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [accountType, setAccountType] = useState("recruit");

    // Error Messages
    const [idError, setIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    return (
        <View
            title="create an account"
            subtitle="If you\'re signing up for a manage account, you only have to fill up the authentication fields."
            className="SignupView"
        >
            <Center>
                <Box className="SignupBox">
                    <div className="form">
                        <div className="section">
                            <div>
                                <HeadText title="Personal Details" />
                                <form>
                                    <div className="row">
                                        <Input
                                            placeholder="Surname"
                                            type="text"
                                            setOnChange={setSurname}
                                            value={surname}
                                        />
                                        <Input
                                            placeholder="First Name"
                                            type="text"
                                            setOnChange={setFirstName}
                                            value={firstName}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <Input
                                        placeholder="Title"
                                        type="text"
                                        setOnChange={setTitle}
                                        value={title}
                                    />
                                    <Input
                                        placeholder="Department"
                                        type="text"
                                        setOnChange={setDepartment}
                                        value={department}
                                    />
                                    <div className="row">
                                        <Input
                                            placeholder="Date of 1st Exp."
                                            type="date"
                                            setOnChange={setDateOf1st}
                                            value={dateOf1st}
                                        />
                                        <Input
                                            placeholder="Experience"
                                            type="number"
                                            setOnChange={setExperience}
                                            value={experience}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <Input
                                        placeholder="Next Possible Positions"
                                        type="text"
                                        setOnChange={setNextPossiblePositions}
                                        value={nextPossiblePositions}
                                    />
                                    <Input
                                        placeholder="Details"
                                        type="text"
                                        setOnChange={setDetails}
                                        value={details}
                                    />
                                    <Input
                                        placeholder="Necessary Conditions"
                                        type="text"
                                        setOnChange={setNecConditons}
                                        value={necConditions}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <HeadText title="Development Points" />
                                <form>
                                    <Input
                                        placeholder="DP 1"
                                        setOnChange={setDp1}
                                        value={dp1}
                                    />
                                    <Input
                                        placeholder="DP 2"
                                        setOnChange={setDp2}
                                        value={dp2}
                                    />
                                    <Input
                                        placeholder="DP 3"
                                        setOnChange={setDp3}
                                        value={dp3}
                                    />
                                </form>
                            </div>
                            <div>
                                <HeadText title="Strengths" />
                                <form>
                                    <Input
                                        placeholder="Strength 1"
                                        setOnChange={setStrength1}
                                        value={strength1}
                                    />
                                    <Input
                                        placeholder="Strength 2"
                                        setOnChange={setStrength2}
                                        value={strength2}
                                    />
                                    <Input
                                        placeholder="Strength 3"
                                        setOnChange={setStrength3}
                                        value={strength3}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <HeadText title="Authentication" />
                                <form>
                                    <Input
                                        placeholder="ID / Username"
                                        icon="fa-solid fa-id-badge"
                                        value={id}
                                        setOnChange={setId}
                                    />
                                    {idError && (
                                        <span className="Error">{idError}</span>
                                    )}
                                    <Input
                                        placeholder="Password"
                                        icon="fa-solid fa-key"
                                        value={password}
                                        setOnChange={setPassword}
                                    />
                                    <Input
                                        placeholder="Repeat Password"
                                        icon="fa-solid fa-key"
                                        value={repeatPassword}
                                        setOnChange={setRepeatPassword}
                                        iconBackground="#ECD277"
                                    />

                                    {passwordError && (
                                        <span className="Error">
                                            {passwordError}
                                        </span>
                                    )}
                                </form>
                            </div>
                            <div>
                                <HeadText title="Account Type" />
                                <form>
                                    <Button
                                        icon="fa-solid fa-user"
                                        background={
                                            accountType === "recruit"
                                                ? "#51CCA3"
                                                : "#BBBBBB"
                                        }
                                        onClick={() => {
                                            setAccountType("recruit");
                                        }}
                                        type="button"
                                    >
                                        Recruit Account
                                    </Button>
                                    <Button
                                        icon="fa-solid fa-hammer"
                                        background={
                                            accountType === "manager"
                                                ? "#51CCA3"
                                                : "#BBBBBB"
                                        }
                                        onClick={() => {
                                            setAccountType("manager");
                                        }}
                                        type="button"
                                    >
                                        Manager Account
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="SubmitButton">
                        <Button
                            onClick={(e) => {
                                let passed = true;

                                setIdError("");
                                setPasswordError("");

                                if (!id) {
                                    setIdError("Required Field");
                                    passed = false;
                                }
                                if (!password || !repeatPassword) {
                                    setPasswordError(
                                        "Both password fields are required"
                                    );
                                    passed = false;
                                }

                                if (password !== repeatPassword) {
                                    setPasswordError(
                                        "Both password fields must match"
                                    );
                                    passed = false;
                                }

                                if (passed) {
                                    let devPoints = [dp1, dp2, dp3];
                                    let strengths = [
                                        strength1,
                                        strength2,
                                        strength3,
                                    ];
                                    devPoints.filter(Boolean)
                                    strengths.filter(Boolean)

                                    const payload = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            id: id,
                                            surname: surname,
                                            first_name: firstName,
                                            type: accountType,
                                            password: password,
                                            title: title,
                                            department: department,
                                            date_of_1st_exp: dateOf1st,
                                            experience: parseInt(experience),
                                            next_possible_positions:
                                                nextPossiblePositions,
                                            details: details,
                                            necessary_conditions: necConditions,
                                            development_points: devPoints,
                                            strengths: strengths,
                                        }),
                                    };

                                    fetch("/signup", payload)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            if (data.status === "error") {
                                                if (data.field === "id") {
                                                    setIdError(data.error);
                                                }
                                                return;
                                            }

                                            if (accountType === "recruit") {
                                                // changeView("RecruitView");
                                                // history.push("/")
                                                window.location="/recruit"
                                            } else if (
                                                accountType === "manager"
                                            ) {
                                                window.location="/manager"
                                            }
                                        });
                                }

                                e.preventDefault();
                            }}
                        >
                            Continue
                        </Button>
                    </div>
                </Box>
            </Center>
        </View>
    );
};

export default Signup;
