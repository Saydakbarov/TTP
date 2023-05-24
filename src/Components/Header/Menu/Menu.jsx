import {
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "../Drawer/DrawerComp";
import { useNavigate } from "react-router-dom";

export const PAGES = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Company US",
    path: "/companyUs",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  // Pages

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "40px 30px",
            lg: "40px 100px",
          },
        }}
      >
        <Toolbar
          sx={{
            padding: "0px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              pb: 1,
            }}
          >
            <img
              style={{ width: "40px" }}
              src="https://www.linkpicture.com/q/logo-removebg-preview-2.png"
              alt=""
            />
            <Typography sx={{ fontSize: "14px", color: "black" }}>
              TOSHKEN PLAST POLIMIR
            </Typography>
          </Box>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Box sx={{ ml: "auto" }}>
                {PAGES.map((v, i) => (
                  <Button
                    key={i}
                    sx={{ color: "black", ml: 4 }}
                    onClick={() => navigate(v.path)}
                  >
                    {v.title}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}
