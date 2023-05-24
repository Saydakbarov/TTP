import React, { useState } from "react";
import HeaderMenu from "./Menu/Menu";
import { Box, Grid, Typography } from "@mui/material";
import "./HeaderProducts.scss";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { HeaderProductSwiper } from "../../Data/Data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { East, West } from "@mui/icons-material";


export default function HeaderProducts() {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <>
      <HeaderMenu />
      <Box
        sx={{
          p: {
            xs: "0px 8px",
            sm: "0px 10px",
            md: "0px 30px",
            lg: "0px 100px",
          },
        }}
      >
        <Grid container>
          <Grid item xl={7} lg={7} md={6} sm={6} xs={12} className="grid2">
            <Typography
              sx={{
                fontSize: {
                  xs: "60px",
                  sm: "60px",
                  md: "70px",
                  lg: "100px",
                  xl: "110px",
                },
                fontWeight: "500",
                lineHeight: { xs: "70px", sm: "65px", md: "90px", lg: "120px" },
              }}
              className="headerTitle"
            >
              Toshkent plast polimir
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
              }}
              className="btn"
            >
              More Product
            </button>
          </Grid>
          <Grid
            item
            xl={5}
            lg={5}
            md={6}
            sm={6}
            xs={12}
            className="grid1"
            sx={{
              height: { xs: "300px", sm: "400px", md: "480px", lg: "500px" },
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              pagination={{
                type: "fraction",
              }}
              slidesPerView={1}
              className="mySwiper"
              onInit={(ev) => {
                set_my_swiper(ev);
              }}
            >
              {HeaderProductSwiper.map((v, i) => (
                <SwiperSlide
                  key={i}
                  style={{ textAlign: "center", width: { sm: "100px" } }}
                >
                  <img
                    className="HeaderProductImg"
                    style={{ width: "360px" }}
                    src={v}
                    alt=""
                  />
                </SwiperSlide>
              ))}
              <div className="block">
                <button className="btn" onClick={() => my_swiper.slidePrev()}>
                  <West />
                </button>
                <button className="btn" onClick={() => my_swiper.slideNext()}>
                  <East />
                </button>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "20px",
              lg: "24px",
              xl: "24px",
            },
            fontWeight: "500",
            mt: 15,
            color: " rgba(0, 0, 0, 0.6)",
            fontFamily: "Inter",
            mt: {
              xs: " 20px",
              sm: "-70px",
              md: "-100px",
              lg: "-100px",
              xl: "-100px",
            },
          }}
        >
          Our company has installed more than 20 types of <br />
          modern thermoplastic machines for molding plastic products,
        </Typography>
      </Box>
    </>
  );
}
