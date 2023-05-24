import React from "react";
import HeaderProducts from "../../Components/Header/HeaderProducts";
import { GlobalContainer } from "../../Components/GlobalContainer";
import { Box } from "@mui/material";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ProductsCategory from "../../Components/ProductsCategory/ProductsCategory";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import ProductsFile from "../../Components/ProductsFile/ProductsFile";
import Partners from "../../Components/Partners/Partners";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function Products() {
  return (
    <GlobalContainer>
      <Box>
        <HeaderProducts />
        <AboutUs />
        <ProductsCategory />
        <PopularProducts />
        <ProductsFile />
        <Partners />
        <Contact />
        <Footer />
      </Box>
    </GlobalContainer>
  );
}
