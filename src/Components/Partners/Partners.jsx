import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Partners.scss";

export default function Partners() {
  return (
    <Box
      sx={{
        mt: 5,
        p: {
          xs: "60px 8px",
          sm: "60px 10px",
          md: "60px 30px",
          lg: "60px 100px",
        },
      }}
      className="partners"
    >
      <Grid container className="Container" gap={2} justifyContent={"center"}>
        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{ background: "blue" }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "32px",
              fontFamily: "Inter",
              color: "#fff",
              textAlign: "center",
              lineHeight: "300px",
            }}
          >
            our partners
          </Typography>
        </Grid>
        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "white",
            borderRadius: "50%",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "70px" }}
            width={"211px"}
            src="https://www.linkpicture.com/q/partners1-removebg-preview.png"
            alt=""
          />
        </Grid>
        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "blue",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "0px" }}
            width={"311px"}
            src="https://www.linkpicture.com/q/partners6-removebg-preview.png"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "white",
            borderRadius: "50%",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "70px" }}
            width={"211px"}
            src="https://www.linkpicture.com/q/partners2-removebg-preview.png"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "white",
            borderRadius: "50%",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "70px" }}
            width={"211px"}
            src="https://www.linkpicture.com/q/partners1-removebg-preview.png"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "blue",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "0px" }}
            width={"311px"}
            src="https://www.linkpicture.com/q/partners4-removebg-preview.png"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{
            background: "white",
            borderRadius: "50%",
            height: "260px",
            textAlign: "center",
          }}
        >
          <img
            style={{ marginTop: "70px" }}
            width={"211px"}
            src="https://www.linkpicture.com/q/partners1-removebg-preview.png"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={2.8}
          lg={3.3}
          md={3.6}
          sm={5.6}
          xs={10}
          sx={{ background: "blue" }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "32px",
              fontFamily: "Inter",
              color: "#fff",
              textAlign: "center",
              lineHeight: "300px",
              width: "100%",
            }}
          >
            More
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
