import { useParams } from "react-router-dom";
import ReletedProduct from "../pages/ReletedProduct";
import Layout from "../Components/Layout/Layout";
import { Box, Stack, Typography } from "@mui/material";

import Frost from "../assets/Frost.png";
import Cani from "../assets/Cani.png";
import Caesar from "../assets/Caesar.png";
import Melsh from "../assets/Melsh.png";
import Stark from "../assets/Stark.png";
import Foozy from "../assets/Foozy.png";
import Dominic from "../assets/Dominic.png";
import Remon from "../assets/Remon.png";

const allProducts = {
  Frost: { img: Frost, price: 55.90, title: "Limited Edition", desc: "High quality exclusive design." },
  Foozy: { img: Foozy, price: 105.00, title: "Limited Edition", desc: "Strong fabric and stunning design." },
  Melsh: { img: Melsh, price: 49.90, title: "Limited Edition", desc: "Soft, durable, and eye-catching." },
  Caesar: { img: Caesar, price: 49.90, title: "Limited Edition", desc: "Stylish and powerful Flyper." },
  Stark: { img: Stark, price: 49.90, title: "Limited Edition", desc: "Bold and modern design." },
  Cani: { img: Cani, price: 49.90, title: "Limited Edition", desc: "Bold and modern design." },
  Dominic: { img: Dominic, price: 49.90, title: "Limited Edition", desc: "Bold and modern design." },
  Remon: { img: Remon, price: 49.90, title: "Limited Edition", desc: "Bold and modern design." },
};

const ProductDetails = () => {
  const { name } = useParams();
  const product = allProducts[name];

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },  // Mobile = column, Desktop = row
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          p: { xs: 2, md: 5 },
          mt: 5,
        }}
      >

        {/* LEFT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={product.img}
            alt={name}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Box>

        {/* RIGHT INFO */}
        <Box
          sx={{
            borderColor: "red",
            borderWidth: 8,
            borderStyle: "solid",
            p: { xs: 2, sm: 3 },
            width: { xs: "100%", md: "45%" }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "35px", md: "40px" },
              fontWeight: "bold",
              mb: 2
            }}
          >
            {name}
          </Typography>

          <Typography sx={{ mt: 1, fontSize: { xs: "16px", md: "18px" } }}>
            {product.desc}
          </Typography>

          <Stack sx={{ mt: 2 }} spacing={0.5}>
            <Typography>The crime de la crime creation by Flyper!</Typography>
            <Typography>Perfect combination of high quality print,</Typography>
            <Typography>exclusive designs and our fabric mixture</Typography>
            <Typography>ensuring strong, durable & soft product.</Typography>
          </Stack>

          <Typography sx={{ mt: 3, fontSize: { xs: "16px", md: "20px" } }}>
            Designed by — <span style={{ fontSize: "25px" }}>New Dawn Art & Design</span>
          </Typography>

          <Typography sx={{ mt: 1, color: "red", fontSize: "25px", fontWeight: "bold" }}>
            ${product.price}
          </Typography>

          <Typography sx={{ mt: 1, color: "red", fontSize: "20px" }}>
            Out of stock
          </Typography>

          <Typography sx={{ mt: 2, fontSize: { xs: "18px", md: "22px" } }}>
            Weight: 250g
          </Typography>

          <Typography sx={{ mt: 1, fontSize: { xs: "18px", md: "22px" } }}>
            Dimensions: 67 × 67 cm
          </Typography>
        </Box>
      </Box>

      <ReletedProduct />
    </Layout>
  );
};

export default ProductDetails;
