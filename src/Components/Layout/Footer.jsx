import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";
import aeroplanefooter from "../../assets/aeroplanefooter.jpg";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Background Section */}
      <Box
        sx={{
          backgroundImage: `url(${aeroplanefooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          py: { xs: 5, sm: 7, md: 10 },
          px: { xs: 3, sm: 5, md: 8 },
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Footer Content */}
        <Grid
          container
          spacing={5}
          sx={{
            position: "relative",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Follow Us
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {[Facebook, Instagram, YouTube, Twitter].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#ffcc00",
                      transform: "scale(1.2)",
                      transition: "0.3s",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
                
              ))}
              
            </Box>

            <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>
              Contact Us
            </Typography>

            <Typography sx={{ opacity: 0.85 }}>Brandes 4 Hadera, Israel</Typography>
            <Typography sx={{ opacity: 0.85 }}>+972-503055757</Typography>
          </Grid>

          {/* Shop */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Shop
            </Typography>

            {[
              "All Products",
              "Premium",
              "Limited Edition",
              "Design Your Flyper",
              "My Cart",
              "Checkout",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  opacity: 0.85,
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": { color: "#ffcc00" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Useful */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Useful
            </Typography>

            {[
              "Customer Support",
              "Privacy Policy",
              "Shipping & Returns",
              "Contact Us",
              "About Us",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  opacity: 0.85,
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": { color: "#ffcc00" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Secured Checkout */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Secured Checkout
            </Typography>

            <Typography sx={{ opacity: 0.85 }}>SSL Encrypted Payments</Typography>
            <Typography sx={{ opacity: 0.85 }}>VISA • MasterCard • PayPal</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Strip */}
      <Box
        sx={{
          background: "black",
          color: "white",
          
          py: 2,
          fontSize: "14px",
        }}
      >
        <Typography
        sx={{
          marginLeft: { xs: 3, sm: 5, md: 8}
        }}
        >All rights reserved to flyper.co</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
