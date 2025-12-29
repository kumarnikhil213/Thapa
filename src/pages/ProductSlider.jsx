import { Box, Typography, IconButton } from "@mui/material";
import Cani from "../assets/Cani.png";
import Caesar from "../assets/Caesar.png";
import Dominic from "../assets/Dominic.png";
import Foozy from "../assets/Foozy.png";
import Frost from "../assets/Frost.png";
import Remon from "../assets/Remon.png";
import Melsh from "../assets/Melsh.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

const products = [
  { name: "Cani", oldPrice: "$54.90", newPrice: "$49.90", img: Cani },
  { name: "Caesar", oldPrice: "$54.90", newPrice: "$49.90", img: Caesar },
  { name: "Dominic", oldPrice: "$54.90", newPrice: "$49.90", img: Dominic },
  { name: "Frost", oldPrice: "$39.90", newPrice: "$34.90", img: Frost },
  { name: "Foozy", oldPrice: "$39.90", newPrice: "$34.90", img: Foozy },
  { name: "Melsh", oldPrice: "$39.90", newPrice: "$34.90", img: Melsh },
  { name: "Remon", oldPrice: "$39.90", newPrice: "$34.90", img: Remon },
];

const ProductsSlider = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth < 600 ? 200 : 300; // Mobile scroll slower
    if (direction === "left") scrollRef.current.scrollLeft -= scrollAmount;
    else scrollRef.current.scrollLeft += scrollAmount;
  };

  return (
    <Box sx={{ position: "relative", p: { xs: 1, sm: 2, md: 4 } }}>
      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "22px", sm: "26px", md: "32px" },
          fontWeight: 700,
          mb: 3,
        }}
      >
        Flyper <span style={{ color: "#7AD0D6" }}>Limited Edition</span>
      </Typography>

      {/* Left Arrow */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "45%",
          left: { xs: 0, sm: 10 },
          zIndex: 10,
          background: "#000",
          color: "#fff",
          p: { xs: 0.5, sm: 1.2 },
          "&:hover": { background: "#333" },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: "16px", sm: "20px" } }} />
      </IconButton>

      {/* Product Slider */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          gap: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {products.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: "160px", sm: "200px", md: "250px" },
              textAlign: "center",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                position: "relative",
                "&:hover img": { transform: "rotate(360deg)" },
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  transition: "transform 0.8s ease",
                }}
              />

              {/* SALE Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: "5px",
                  left: "-5px",
                  background: "#C62828",
                  color: "#fff",
                  borderRadius: "50%",
                  width: { xs: "45px", sm: "55px" },
                  height: { xs: "45px", sm: "55px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: "bold",
                }}
              >
                SALE!
              </Box>
            </Box>

            {/* Name */}
            <Typography
              sx={{
                mt: 1,
                fontSize: { xs: "18px", sm: "22px", md: "26px" },
                fontWeight: 700,
              }}
            >
              {item.name}
            </Typography>

            {/* Prices */}
            <Typography sx={{ mt: 1 }}>
              <span
                style={{
                  textDecoration: "line-through",
                  marginRight: "8px",
                  color: "#777",
                }}
              >
                {item.oldPrice}
              </span>
              <span style={{ fontWeight: "bold" }}>{item.newPrice}</span>
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "45%",
          right: { xs: 0, sm: 10 },
          zIndex: 10,
          background: "#000",
          color: "#fff",
          p: { xs: 0.5, sm: 1.2 },
          "&:hover": { background: "#333" },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: "16px", sm: "20px" } }} />
      </IconButton>
    </Box>
  );
};

export default ProductsSlider;
