import Layout from "../Components/Layout/Layout";
import areoplaneshop from "../assets/areoplaneshop.jpeg";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { useState } from "react";

import scar from "../assets/scar.png";
import Frost from "../assets/Frost.png";
import Fusion from "../assets/Fusion.png";
import Caesar from "../assets/Caesar.png";
import Melsh from "../assets/Melsh.png";
import Stark from "../assets/Stark.png";
import { Link } from "react-router-dom";

const Shop = () => {
  const [value, setValue] = useState(0);

  const allProducts = [
    { img: scar, name: "Scar", price: 49.90, title: "Premium" },
    { img: Frost, name: "Frost", price: 49.90, title: "Limited Edition" },
    { img: Fusion, name: "Fusion", price: 49.90, title: "Limited Edition" },
    { img: Melsh, name: "Melsh", price: 49.90, title: "Limited Edition" },
    { img: Caesar, name: "Caesar", price: 49.90, title: "Limited Edition" },
    { img: Stark, name: "Stark", price: 49.90, title: "Limited Edition" },
  ];

  const filteredProducts =
    value === 0
      ? allProducts
      : allProducts.filter((item) =>
          value === 1
            ? item.title === "Premium"
            : item.title === "Limited Edition"
        );

  return (
    <Layout>

      {/* ---------- Banner ---------- */}
      <img
        src={areoplaneshop}
        alt="areoplaneshop"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      {/* ---------- Tabs ---------- */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          centered
          TabIndicatorProps={{ style: { backgroundColor: "#00a8d2" } }}
        >
          <Tab label="All" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} />
          <Tab label="Premium" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} />
          <Tab label="L.Edition" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} />
        </Tabs>
      </Box>

      {/* ---------- Subtitle ---------- */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 3,
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          color: "#333",
          px: 2
        }}
      >
        Here you'll find our newest products. We invite you to browse and enjoy
      </Typography>

      {/* ---------- Products Grid Responsive ---------- */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
          justifyItems: "center",
          mt: 5,
          mb: 6,
          px: { xs: 2, sm: 4 },
        }}
      >
        {filteredProducts.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center", position: "relative" }}>

            {/* SALE Badge */}
            <Box
              sx={{
                position: "absolute",
                top: "1px",
                left: "-1px",
                background: "#C62828",
                color: "#fff",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              SALE!
            </Box>

            {/* OUT OF STOCK */}
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "black",
                color: "white",
                px: 2,
                py: 0.5,
                fontSize: "12px",
              }}
            >
              OUT OF STOCK
            </Box>

            {/* Product Image */}
            <Box
              sx={{
                width: { xs: "260px", sm: "300px", md: "360px" },
                height: { xs: "260px", sm: "300px", md: "360px" },
                position: "relative",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  opacity: 0.3,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </Box>

            {/* Dots */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Box sx={{ width: "10px", height: "10px", bgcolor: "#ccc", borderRadius: "50%", mx: 0.5 }} />
              <Box sx={{ width: "10px", height: "10px", bgcolor: "#ccc", borderRadius: "50%", mx: 0.5 }} />
              <Box sx={{ width: "10px", height: "10px", bgcolor: "#ccc", borderRadius: "50%", mx: 0.5 }} />
            </Box>

            {/* Product Titles */}
            <Typography sx={{ mt: 0.5, fontSize: "18px", fontStyle: "italic" }}>
              {item.title}
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: "22px", fontStyle: "oblique" }}>
              {item.name}
            </Typography>

            {/* Price */}
            <Typography sx={{ mt: 0.5, fontSize: "20px", fontWeight: "bold" }}>
              $ {item.price}
            </Typography>

            {/* Read More Button */}
            <Button
              component={Link}
              to={`/product/${item.name}`}
              sx={{
                mt: 1,
                color: "white",
                bgcolor: "green",
                borderRadius: 0,
                "&:hover": { bgcolor: "darkgreen" }
              }}
            >
              Read More
            </Button>

          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default Shop;
