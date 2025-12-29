import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import Layout from '../Components/Layout/Layout'
import {
  Box,
  Grid,
  Typography,
  Stack,
  TextField,
  Button
} from '@mui/material';

const Work = () => {
  return (
    <Layout>
      <Grid container>

        {/* 1st Column */}
        <Grid size={{ xs: 12, md: 4, py: 2 }}>
          <Box sx={{ position: "relative", height: "345px", overflow: "hidden" }}>
            <img
              src={img1}
              alt="Sell"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Text Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                }}
              >
                Sell in Stores
              </Typography>

              <Typography sx={{ fontSize: "18px", mt: 1 }}>
                Catch a piece of the profit when you sell Flyper in your store.
                Email us to find out how you can get in!
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* 2nd Column */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: "relative", height: "345px", overflow: "hidden" }}>
            <img
              src={img2}
              alt="Influence"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                }}
              >
                Spread Your Influence
              </Typography>

              <Typography sx={{ fontSize: "18px", mt: 1 }}>
                Influence your followers simply by spinning and posting!
                DM us if you're the influencer we need.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* 3rd Column */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: "relative", height: "345px", overflow: "hidden" }}>
            <img
              src={img3}
              alt="Dropship"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                }}
              >
                Distribute and Dropship
              </Typography>

              <Typography sx={{ fontSize: "18px", mt: 1 }}>
                Provide people around the world with connection and
                community. Take us on the road by filling out the form below!
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>

      {/* Form Section */}
      <Box
        sx={{
          bgcolor: "wheat",
          py: 6,
          px: { xs: 2, md: 6 },
          mt: -6,
          position: "relative",
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            fontWeight: "bold",
            mb: 2
          }}
        >
          WORK WITH US
        </Typography>

        <Typography sx={{ textAlign: "center", mb: 4, fontSize: { xs: "14px", md: "16px" } }}>
          Fill your details and we’ll be in touch:
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 0 }
          }}
        >
          <TextField label="Name*" variant="outlined" size="small" Width sx={{ Width: 400 }} />

          <TextField label="Email*" variant="outlined" size="small" Width sx={{ Width: 400 }} />

          <TextField label="Phone Number*" variant="outlined" size="small" Width sx={{ Width: 400 }} />

          <Button variant="contained" size="medium" sx={{ width: { xs: "60%", sm: "30%", md: "10%" } }}>
            Submit
          </Button>
        </Stack>

      </Box>
    </Layout>
  )
}
export default Work;