import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularProduct.scss";
// Import Swiper React components

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, A11y, Thumbs } from "swiper";
import { PopularProductsData } from "../../Data/Data";

export default function PopularProducts() {
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
      className="popularProduct"
    >
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Inter",
          textTransform: "uppercase",
        }}
      >
        our most popular products
      </Typography>

      <Grid container gap={1}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            modules={[Pagination, Navigation, A11y, Thumbs]}
            navigation={true}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {PopularProductsData.map((v, i) => (
              <SwiperSlide style={{ position: "relative" }}>
                <Box
                  sx={{
                    p: 4,
                    background: "white",
                    height: "430px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      textTransform: "uppercase",
                    }}
                  >
                    {v.title}
                  </Typography>
                  <Box className="swiperImgBox">
                    <img src={v.img} alt="" className={v.class} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: "20px", sm: "20px", md: "30px", lg: "40px" },
                      position: "absolute",
                      bottom: "10%",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: "16px", fontFamily: "Inter" }}
                      >
                        Size
                      </Typography>
                      <button
                        key={i}
                        style={{
                          outline: "none",
                          border: "none",
                          background: "#F4F3F3",
                          color: "blue",
                          padding: "5px 15px",
                          cursor: "pointer",
                          marginTop: "10px",
                        }}
                      >
                        {v.size}
                      </button>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: "16px", fontFamily: "Inter" }}
                      >
                        Price
                      </Typography>
                      <Typography
                        sx={{ fontSize: "32px", fontFamily: "Inter" }}
                      >
                        {v.price} 000 so'm
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
