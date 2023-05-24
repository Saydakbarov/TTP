import {
  Close,
  Facebook,
  Instagram,
  Language,
  LinkedIn,
  Menu,
  Search,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { PAGES } from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

export default function DrawerComp() {
  // Pages

  //   Open Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <List sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
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
            <Close onClick={() => setOpenDrawer(false)} />
          </Box>

          {PAGES.map((page, i) => (
            <ListItemButton
              key={i}
              onClick={() => {
                setOpenDrawer(false);
                navigate(page.path);
              }}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "black !important" }} key={i}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ display: "flex", gap: "15px", padding: "0px 26px 20px " }}>
          <Instagram sx={{ color: "blue" }} />
          <Facebook sx={{ color: "blue" }} />
          <YouTube sx={{ color: "blue" }} />
          <Twitter sx={{ color: "blue" }} />
          <LinkedIn sx={{ color: "blue" }} />
        </Box>
      </Drawer>

      <Box sx={{ marginLeft: "auto" }}>
        <IconButton
          sx={{ color: "black" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
