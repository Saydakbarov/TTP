import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { PAGES } from "../Header/Menu/Menu";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: {
          xs: "20px 8px",
          sm: "20px 10px",
          md: "40px 30px",
          lg: "40px 100px",
        },
        background: "#004CCA",
      }}
      className="footer"
    >
      <Grid
        container
        gap={1}
        sx={{ color: "#ffff", pb: 4, justifyContent: "center" }}
      >
        <Grid item xl={4.7} lg={4.6} md={7} sm={10} xs={11}>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              pb: 1,
            }}
          >
            <img
              style={{ width: "140px" }}
              src="https://www.linkpicture.com/q/logo-removebg-preview-2.png"
              alt=""
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "28px",
                  md: "36px",
                  lg: "32px",
                  xl: "42px",
                },
                color: "#ffff",
                fontFamily: "Inter",
              }}
              className="companyName"
            >
              TOSHKEN PLAST <br /> POLIMIR
            </Typography>
          </Box>
        </Grid>

        <Grid item xl={4.8} lg={4.7} md={8} sm={8} xs={11}>
          <Box sx={{}}>
            {PAGES.map((v, i) => (
              <Button
                key={i}
                sx={{ color: "rgba(255, 255, 255, 0.7)", ml: 2 }}
                onClick={() => navigate(v.path)}
              >
                {v.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ mt: 1, ml: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#fff" }}
            >
              Addres;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "12px" },
                fontFamily: "Inter",
                textTransform: "uppercase",
                mt: 1,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              republika of uzbekistan, tashkent city, oltin topgan street,
              home-22
            </Typography>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#ffff" }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "12px" },
                fontFamily: "Inter",
                textTransform: "uppercase",
                mt: 1,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              toshkentplastpolimer@gmail.com
            </Typography>
          </Box>
          <Box sx={{ mt: 1, ml: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontFamily: "Inter", color: "#ffff" }}
            >
              Telefon
            </Typography>
            <Box sx={{ display: "flex", gap: "40px", mt: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "12px" },
                  fontFamily: "Inter",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                +998 (71) 770 70 70
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "12px" },
                  fontFamily: "Inter",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                +998 (71) 770 70 70
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xl={2.3}
          lg={2.4}
          md={8}
          sm={8}
          xs={11}
          sx={{
            mt: { xs: 5, sm: 3, md: 4, lg: 0 },
            position: "relative",
            ml: { xs: 5, sm: 5, md: 5, lg: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              position: "absolute",
              bottom: { xs: "0%", sm: "0%", md: "0%", lg: "0%" },
            }}
          >
            <Instagram sx={{ color: "white", cursor: "pointer" }} />
            <Facebook sx={{ color: "white", cursor: "pointer" }} />
            <YouTube sx={{ color: "white", cursor: "pointer" }} />
            <Twitter sx={{ color: "white", cursor: "pointer" }} />
            <LinkedIn sx={{ color: "white", cursor: "pointer" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
