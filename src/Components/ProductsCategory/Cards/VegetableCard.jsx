import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "../ProductCategory.scss";
import { VegetableData } from "../../../Data/Data";

export default function VegetableCard() {
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [img, setImg] = useState(
    "https://www.linkpicture.com/q/vegetablebox1-removebg-preview_1.png"
  );
  const [price, setPrice] = useState("");
  return (
    <Box
      sx={{ mt: 4, p: 3, background: "white", height: "93%" }}
      className="productCategory"
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        Vegetable drawer box
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: "10px",
          width: { lg: "450px", md: "none", sm: "none", xs: "none" },
          flexWrap: "wrap",
        }}
        className="titleBox"
      >
        {VegetableData.map((v, i) => (
          <button
            key={i}
            className="btnVegetable"
            onClick={() => {
              setImg(v.color[0].img);
              setPrice(v.sizes[0].price);
              setColor(v.color);
              setSize(v.sizes);
            }}
          >
            {v.title}
          </button>
        ))}
      </Box>

      <Box>
        <Typography sx={{ mt: 2, color: "black", mt: 1 }}>Size</Typography>

        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          className="block"
        >
          <Box>
            <Box
              sx={{ display: "flex", gap: "10px", mt: 1 }}
              className="sizeBox"
            >
              {size.length !== 0 ? (
                size.map((v, i) => (
                  <button
                    key={i}
                    style={{
                      width: "100px",
                      outline: "none",
                      border: "none",
                      background: "#F4F3F3",
                      color: "blue",
                      padding: "5px 15px",
                      cursor: "pointer",
                    }}
                    onClick={() => setPrice(v.price)}
                  >
                    {v.size}
                  </button>
                ))
              ) : (
                <button
                  style={{
                    width: "100px",
                    outline: "none",
                    border: "none",
                    background: "#F4F3F3",
                    color: "blue",
                    padding: "5px 15px",
                    cursor: "pointer",
                  }}
                >
                  400x300
                </button>
              )}
            </Box>
            <Box
              sx={{ display: "flex", gap: "5px", mt: 2 }}
              className="colorBox"
            >
              {color.map((v, i) => (
                <Typography
                  component={"button"}
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: v.css,
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setImg(v.img)}
                ></Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ marginTop: "-40px" }} className="imgBox">
            <img width={"100%"} src={img} alt="" />
          </Box>
        </Box>

        <Box  className="priceBox">
          <Typography sx={{ fontSize: "18px", fontFamily: "Inter" }}>
            Price
          </Typography>

          <Typography sx={{ fontSize: "36px", fontFamily: "Inter" }}>
            {price === "" ? 8 : price} 000 so'm
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
