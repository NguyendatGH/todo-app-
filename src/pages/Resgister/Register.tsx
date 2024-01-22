import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "./style.module.scss";
function Register() {
  return (
    <div className={styled.MainBox}>
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
              Register
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ flex: 3 }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ flex: 3, marginTop: 2 }}
            />
            <Button variant="contained" fullWidth sx={{ my: 2 }}>
              Register
            </Button>
            <Typography
              // variant="body"
              textAlign={"center"}
            >
              Have account?
            </Typography>
            <Link to={"/login"} style={{ width: "100%" }}>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Register;
