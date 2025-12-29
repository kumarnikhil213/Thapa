import Layout from "../Components/Layout/Layout";
import areoplane from "./Assets/areoplane.jpg";


import areoplane2 from "../Assets/areoplane2.jpg";
import areoplane3 from "../Assets/areoplane3.jpg";
import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import ProductsSlider from "../pages/ProductSlider";
import SS from "../Assets/SS.png";

const Home = () => {
  const images = [areoplane, areoplane2, areoplane3];
  const [currentImage, setCurrentImage] = useState(0);

  // Swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto Slider (5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle Swipe
  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return; // ignore small swipe

    if (distance > 50) {
      // Swipe Left → Next
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else if (distance < -50) {
      // Swipe Right → Prev
      setCurrentImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <Layout>

      {/* ------------------- SLIDER (AUTO + MANUAL SWIPE) ------------------- */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          height: { xs: "45vh", sm: "55vh", md: "80vh" },
          position: "relative",
          mt: 7,
        }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
        onTouchEnd={handleSwipe}
        onMouseDown={(e) => (touchStartX.current = e.clientX)}
        onMouseMove={(e) => (touchEndX.current = e.clientX)}
        onMouseUp={handleSwipe}
      >
        {/* Moving Slider */}
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentImage * (100 / images.length)}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              sx={{
                width: `${100 / images.length}%`,
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>

        {/* Dots Navigation */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImage(index)}
              sx={{
                fontSize: "20px",
                cursor: "pointer",
                opacity: currentImage === index ? 1 : 0.4,
              }}
            >
              ●
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------------------- HEADING SECTION ------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          py: 4,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>
            Flip, Fling, & <span style={{ color: "gray" }}>Fly into Fun</span>
          </Typography>

          <Typography sx={{ mt: 1, fontSize: { xs: "14px", md: "18px" } }}>
            Step away from the screen and into the scene with Flyper,
            your high-quality, hypnotic spinner that creates communities.
          </Typography>
        </Box>
      </Box>

      {/* ------------------- PRODUCT TITLE ------------------- */}
      <Box sx={{ backgroundColor: "whitesmoke", textAlign: "center", py: 4, width: "100%" }}>
        <Typography sx={{ fontSize: { xs: "20px", md: "28px" } }}>
          Flyper <span style={{ color: "gray" }}>Limited edition</span>
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            ml: { xs: 2, md: 6 },
            mt: 4,
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          Product not found
        </Typography>
      </Box>

      {/* ------------------- PRODUCTS SLIDER ------------------- */}
      <ProductsSlider />

      {/* ------------------- IMAGE SECTION ------------------- */}
      <Box>
        <img
          src={SS}
          alt="SS"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
          }}
        />
      </Box>

      {/* ------------------- YOUTUBE VIDEOS ------------------- */}
      
<Box sx={{ mt: -1, mb: -7 }}>
  <Grid 
    container 
    sx={{ 
      justifyContent: "center", 
      alignItems: "center",
      gap: 0 
    }}
  >

    {/* Video 1 */}
    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
      <Box sx={{ height: { xs: "250px", sm: "300px", md: "350px" } }}>
        <iframe
          src="https://www.youtube.com/embed/cMPrlGt58mI"
          title="Video 1"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>
    </Grid>

    {/* Video 2 */}
    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
      <Box sx={{ height: { xs: "250px", sm: "300px", md: "350px" } }}>
        <iframe
          src="https://www.youtube.com/embed/0Gl26SmoAsc"
          title="Video 2"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>
    </Grid>

    {/* Video 3 */}
    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
      <Box sx={{ height: { xs: "250px", sm: "300px", md: "350px" } }}>
        <iframe
          src="https://www.youtube.com/embed/IgDkeaOl4Hc"
          title="Video 3"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>
    </Grid>

  </Grid>
</Box>


    </Layout>
  );
};

export default Home;
