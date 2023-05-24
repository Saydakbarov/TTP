import React from "react";
import HeaderMenu from "../../Components/Header/Menu/Menu";
import { Typography } from "@mui/material";
export default function Servic() {
  return (
    <>
      <HeaderMenu />
      <Typography
        sx={{ textAlign: "center", fontSize: "40px", color: "blue", mt: 3 }}
      >
        Service Page
      </Typography>
    </>
  );
}
