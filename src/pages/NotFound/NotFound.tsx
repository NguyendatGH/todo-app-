// import React from 'react'
import notfound from "./notfound.jpg";
import styed from "./style.module.scss";
import { styled } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: lightBlue[400],
  "&:hover": {
    color: "white",
    backgroundColor: lightBlue[600],
  },
}));

function NotFound() {
  return (
    <div className={styed.main}>
      <div className={styed.container}>
        <img src={notfound} alt="" className={styed.img} />
        <Link to={"/login"}>
          <ColorButton
            variant="contained"
            className={styed.returnBtn}
            // sx={{ marginBottom: "30px" }}
          >
            Go Back to Login
          </ColorButton>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
