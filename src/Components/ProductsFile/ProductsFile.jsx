import { Box, Grid, Typography } from "@mui/material";
import "./ProductFile.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Thumbs, A11y } from "swiper";
import { ProductFileData } from "../../Data/Data";

export default function ProductsFile() {
  return (
    <Box
      sx={{
        mt: { xs: 12, sm: 10, md: 8, lg: 5 },
        p: {
          xs: "60px 8px",
          sm: "60px 10px",
          md: "60px 30px",
          lg: "60px 100px",
        },
      }}
      className="productFile"
    >
      <Grid container gap={1}>
        <Grid
          item
          xl={6}
          lg={5.9}
          md={6}
          sm={6}
          xs={7}
          sx={{ position: "relative" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "23px", sm: "28px", md: "32px", lg: "36px" },
              fontFamily: "Inter",
            }}
          >
            Products life
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "26px", lg: "32px" },
              fontFamily: "Inter",
              position: "absolute",
              color: "white",
              bottom: "10%",
              textTransform: "uppercase",
              left: "3%",
            }}
          >
            protect the environment from waste
          </Typography>
          <img
            style={{ width: "100%", zIndex: "-9" }}
            src="https://www.linkpicture.com/q/productfile.jpg"
            alt=""
          />
        </Grid>

        <Grid
          item
          xl={5.8}
          lg={5.8}
          md={5}
          sm={5}
          xs={4}
          sx={{ position: "relative" }}
        >
          <Swiper
            centeredSlides={true}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            modules={[Pagination, Navigation, A11y, Thumbs]}
            navigation={true}
            className="mySwiper"
          >
            {ProductFileData.map((v, i) => (
              <SwiperSlide key={i}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "26px",
                      lg: "32px",
                    },
                    fontFamily: "Inter",
                    position: "absolute",
                    color: "white",
                    bottom: "10%",
                    textTransform: "uppercase",
                    left: "3%",
                  }}
                >
                  {v.title}
                </Typography>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                  src={v.img}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
