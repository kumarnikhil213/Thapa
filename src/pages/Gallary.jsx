import { Grid, Box } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import Frost from "../assets/Frost.png";
import Caesar from "../assets/Caesar.png";
import Melsh from "../assets/Melsh.png";
import scar from "../assets/scar.png";
import TodoBom from "../assets/TodoBom.png";
import Stark from "../assets/Stark.png";
import Fusion from "../assets/Fusion.png";
import Dominic from "../assets/Dominic.png";

const Gallary = () => {
  const images = [
    
    Frost, Caesar, Melsh, scar,
    TodoBom, Stark, Fusion, Dominic
  ];
  
  return (
    <Layout>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 6,
          p: { xs: 2, sm: 3, md: 5 },
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{

                width: "100%",
                maxWidth: "340px",
                height: { xs: 220, sm: 260, md: 300, lg: 330 },
                overflow: "hidden",
                borderRadius: "14px",
                position: "relative",
                cursor: "pointer",
                transition: "0.4s ease-in-out",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.30)",
                },
              }}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Gallary;
