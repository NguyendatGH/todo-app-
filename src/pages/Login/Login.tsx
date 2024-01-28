import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "./style.module.scss";
import { AccountList } from "./ACCOUNTS/AccountList";

import * as Yup from "yup";
import { useState } from "react";
// import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const Validationschema = Yup.object().shape({
  username: Yup.string()
    .required("username is require!!!")
    .min(5, "your username must be at least 5 characters!!!"),

  password: Yup.string()
    .required("Your password is required!!!")
    .min(5, "Your password must be at least 8 character!!!")
    .max(32, "Your password must be lower than 32 character!!!"),
});

interface inputValue {
  username: string;
  password: string;
}
interface validation {
  username: boolean;
  password: boolean;
}

function Login() {
  const [inputValue, setInputValue] = useState<inputValue>({
    username: "",
    password: "",
  });

  const [validation, setValidatetion] = useState<validation>({
    username: false,
    password: false,
  });
  const navigation = useNavigate();
  const handleLogin = async () => {
    try {
      await Validationschema.validate(inputValue, { abortEarly: false });
      let isLoginSuccess: boolean = false;
      AccountList.map((Acc) => {
        if (inputValue.username === Acc.username) {
          if (inputValue.password === Acc.password) {
            setTimeout(handleToast, 0);
            isLoginSuccess = true;
            navigation("/home");
          } else {
            toast.error("please check again your password");
          }
        }
        if (isLoginSuccess === false) {
          toast.error("please check your username");
          isLoginSuccess = true;
        }
      });
    } catch (error) {
      toast.error("please enter your username and your password");
      const temp = {
        username: false,
        password: false,
      };
      setValidatetion(temp);
    }
  };
  const handleToast = () => {
    toast.success("login success!!");
  };
  return (
    <div className={styled.MainBox}>
      <ToastContainer />
      <Box className={styled.boxModal}>
        <Card sx={{ minWidth: 600 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" textAlign={"center"} marginBottom={2}>
              Login
            </Typography>
            <TextField
              error={validation.username}
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ flex: 3 }}
              onChange={(e) =>
                setInputValue({ ...inputValue, username: e.target.value })
              }
              autoFocus={true}
            />
            <TextField
              error={validation.password}
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ flex: 3, marginTop: 2 }}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ my: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography
              // variant="body"
              textAlign={"center"}
            >
              Don't have account?
            </Typography>
            <Link to={"/register"} style={{ width: "100%", height: "auto" }}>
              <Button variant="outlined" fullWidth>
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
