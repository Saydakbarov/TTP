import { Box, Grid, Typography } from "@mui/material";
import VegetableCard from "./Cards/VegetableCard";
import PalledCard from "./Cards/Palled";
import Bucket from "./Cards/Bucket";
import Water from "./Cards/Water";

export default function ProductsCategory() {
  return (
    <Box
      sx={{
        mt: 8,
        p: {
          xs: "60px 8px",
          sm: "60px 10px",
          md: "60px 30px",
          lg: "60px 100px",
        },
      }}
    >
      <Typography sx={{ fontFamily: "Inter", fontSize: "36px" }}>
        Products categoria
      </Typography>

      <Grid container gap={2} justifyContent={"center"}>
        <Grid item xl={5.9} lg={5.9} md={9} sm={10} xs={12}>
          <VegetableCard />
        </Grid>
        <Grid item xl={5.9} lg={5.9} md={9} sm={10} xs={12}>
          <PalledCard />
        </Grid>
        <Grid item xl={5.9} lg={5.9} md={9} sm={10} xs={12}>
          <Bucket />
        </Grid>
        <Grid item xl={5.9} lg={5.9} md={9} sm={10} xs={12}>
          <Water />
        </Grid>
      </Grid>
    </Box>
  );
}
