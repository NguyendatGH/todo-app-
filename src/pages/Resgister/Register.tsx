import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "./style.module.scss";
import Github from "./img/Github.png";
import Google from "./img/Google.png";
import Facebook from "./img/Facebook.png";
import AppleID from "./img/AppleID.png";
import { useState } from "react";

function Register() {
  const [getName, setName] = useState<string>("");
  const [getUsername, setUserName] = useState<string>("");
  const [getPassword, setPassWord] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const navigation = useNavigate();
  const handleNewAccount = (): void => {
    console.log(getName);
    console.log(getUsername);
    console.log(getPassword);
    console.log(confirm);
    navigation("/login");
  };

  return (
    <div className={styled.MainBox}>
      <Box className={styled.boxModal}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "auto",
              gap: "20px",
            }}
          >
            <Typography variant="h4" textAlign={"center"}>
              Register
            </Typography>
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "44%",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Firstname"
                  variant="outlined"
                  size="small"
                  sx={{ fontSize: "12px" }}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Passwords"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onChange={(e) => setPassWord(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="confirm your passwords"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </Stack>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "44%",
                }}
              >
                <Typography sx={{ mt: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    To create an Account, you must:
                  </Typography>
                  <Typography sx={{ fontFamily: "", fontSize: "14px" }}>
                    *Username must use UpperCase at the first symbols
                  </Typography>
                  <Typography sx={{ fontFamily: "", fontSize: "14px" }}>
                    *Username must longer than 5 charater
                  </Typography>
                  <Typography sx={{ fontFamily: "", fontSize: "14px" }}>
                    *Passwords must use special symbols
                  </Typography>
                  <Typography sx={{ fontFamily: "", fontSize: "14px" }}>
                    *PassWords must longer than 6 letter
                  </Typography>
                </Typography>
                <Typography mt={0}>Create account with:</Typography>
                <Stack
                  direction="row"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Avatar
                    src={Github}
                    className="signUpWith"
                    sx={{ cursor: "pointer" }}
                  />
                  <Avatar
                    src={Google}
                    className="signUpWith"
                    sx={{ cursor: "pointer" }}
                  />
                  <Avatar
                    src={Facebook}
                    className="signUpWith"
                    sx={{ cursor: "pointer" }}
                  />
                  <Avatar
                    src={AppleID}
                    className="signUpWith"
                    sx={{ cursor: "pointer" }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <Button
                variant="contained"
                sx={{ width: "140px" }}
                onClick={handleNewAccount}
              >
                Register
              </Button>
              <Link to={"/login"}>
                <Button variant="outlined" sx={{ width: "140px" }}>
                  Login
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Register;
