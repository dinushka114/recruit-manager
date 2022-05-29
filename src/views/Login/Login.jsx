import { React, useState } from "react";
import "./Login.css";
import View from "../View";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Center from "../../components/Center/Center";

const Login = () => {
  // Input Fields
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  return (
    <View title="Gestion des Formations" className="LoginView">
      <Center>
        <Box className="LoginBox">
          <h2>Login</h2>

          <form>
            <Input
              placeholder="ID"
              icon="fa-solid fa-id-badge"
              type="text"
              setOnChange={setId}
              value={id}
            />
            <Input
              placeholder="Password"
              icon="fa-solid fa-key"
              type="password"
              setOnChange={setPassword}
              value={password}
            />
            <span className="Error">{error}</span>
            <Button
              onClick={(e) => {
                setError("");
                const payload = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: id,
                    password: password,
                  }),
                };

                fetch("/login", payload)
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status === "error") {
                      setError(data.error);
                    } else {
                      fetch("/get_user_info")
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(data);
                          if (data.type === "recruit") {
                            window.location = "/recruit";
                          } else if (data.type === "manager") {
                            window.location = "/manager";
                          }
                        });
                    }
                    console.log(data);
                  });

                e.preventDefault();
              }}
            >
              Login
            </Button>
          </form>
          <a href="#" onClick={() => (window.location = "/signup")}>
            New Here? Signup Instead
          </a>
        </Box>
      </Center>
    </View>
  );
};

export default Login;
