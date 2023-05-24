import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AboutUsData } from "../../Data/Data";

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: "#004CCA",
        mt: 8,
        p: {
          xs: "60px 8px",
          sm: "60px 10px",
          md: "60px 30px",
          lg: "60px 100px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <Box>
          <Typography
            variant="p"
            component={"p"}
            sx={{ fontSize: "24px", color: "#ffff", fontFamily: "Inter" }}
          >
            About Us
          </Typography>
        </Box>
        <Box sx={{ width: "683px" }}>
          <Typography
            variant="p"
            component={"p"}
            sx={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.8)",
              fontStyle: "normal",
              textTransform: "uppercase",
              fontFamily: "Inter",
            }}
          >
            Currently, our company manufactures a wide range of plastic boxes
            for storing and transporting various fruits and vegetables, plastic
            buckets for consumer and industrial needs, as well as children's
            toys. In addition, we produce bumpers for GM cars, garbage cans for
            the TOZA HUDOOD project.
          </Typography>
          <button
            style={{
              width: "200px",
              borderRadius: "20px",
              background: "white",
              outline: "none",
              border: "none",
              padding: "15px 20px",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            More Know
          </button>
        </Box>
      </Box>

      <Grid container gap={1.5} mt={8}>
        {AboutUsData.map((v, i) => (
          <Grid
            key={i}
            item
            xl={2.9}
            lg={2.9}
            md={5.9}
            sm={5.8}
            xs={5.7}
            sx={{
              background: "#20278C",
              padding: "20px 20px 50px 20px",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "124px",
                  sm: "224px",
                  md: "251px",
                  lg: "221px",
                  xl: "271px",
                },
                height: {
                  xs: "114px",
                  sm: "214px",
                  md: "241px",
                  lg: "251px",
                  xl: "261px",
                },
                margin: "0 auto",
              }}
            >
              <img style={{ width: "100%" }} src={v.img} alt="" />
            </Box>

            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "34px",
                  md: "45px",
                  lg: "45px",
                  xl: "56px",
                },
                color: "#fff",
                textTransform: "uppercase",
                fontFamily: "Inter",
              }}
            >
              {v.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "16px" },
                color: "rgba(255, 255, 255, 0.8)",
                textTransform: "uppercase",
                fontFamily: "Inter",
              }}
            >
              {v.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
