import {
  ArrowForwardIos,
  East,
  Facebook,
  Instagram,
  Telegram,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
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
    >
      <Typography sx={{ fontSize: "36px", fontFamily: "Inter" }}>
        Our Contact
      </Typography>
      <Grid container gap={2} justifyContent={"center"} mt={3}>
        <Grid
          item
          lg={5.9}
          md={5.8}
          sm={10}
          xs={12}
          sx={{ p: { xs: 2, sm: 4, md: 7, lg: 8 }, background: "white" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22", lg: "24px" },
              fontFamily: "Inter",
            }}
          >
            LLC "TOSHKENT PLAST POLIMER"
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#004CCA" }}
            >
              Addres;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                fontFamily: "Inter",
                textTransform: "uppercase",
                mt: 1,
              }}
            >
              republika of uzbekistan, tashkent city, oltin topgan street,
              home-22
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#004CCA" }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                fontFamily: "Inter",
                textTransform: "uppercase",
                mt: 1,
              }}
            >
              toshkentplastpolimer@gmail.com
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#004CCA" }}
            >
              Telefon
            </Typography>
            <Box sx={{ display: "flex", gap: "40px", mt: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                  fontFamily: "Inter",
                  textTransform: "uppercase",
                }}
              >
                +998 (71) 770 70 70
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                  fontFamily: "Inter",
                  textTransform: "uppercase",
                }}
              >
                +998 (71) 770 70 70
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", mt: 3 }}>
            <Telegram sx={{ color: "blue" }} />
            <Facebook sx={{ color: "blue" }} />
            <Instagram sx={{ color: "red" }} />
          </Box>
        </Grid>
        <Grid
          item
          lg={5.9}
          md={5.8}
          sm={10}
          xs={12}
          sx={{ p: { xs: 2, sm: 4, md: 7, lg: 8 }, background: "white" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "15px", lg: "16px" },
              textTransform: "uppercase",
              lineHeight: "28px",
            }}
          >
            Leave us your suggestions and questions and we will get back to you
          </Typography>

          <textarea
            rows={6}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "#F4F3F3",
              padding: "20px 30px",
              fontSize: "16px",
              marginTop: "30px",
            }}
            placeholder="Write your opinion here"
          ></textarea>
          <Box sx={{ display: "flex", mt: 3 }}>
            <input
              type="text"
              style={{
                width: "90%",
                height: "60px",
                outline: "none",
                border: "none",
                background: "#F4F3F3",
                padding: "15px 20px",
              }}
              placeholder="Email / Phone Number"
            />
            <button
              style={{
                outline: "none",
                border: "none",
                background: "#004CCA",
                color: "#fff",
                padding: "7px 15px",
              }}
            >
              <ArrowForwardIos />
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
