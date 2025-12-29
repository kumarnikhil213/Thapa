import { useState } from 'react';
import areoplaneshop from '../assets/areoplaneshop.jpeg';
import Layout from '../Components/Layout/Layout';
import { Box, TextField, Paper, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert("Form Submitted Successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Layout>

      {/* Banner Image */}
      <img
        src={areoplaneshop}
        alt="areoplaneshop"
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
        }}
      />

      {/* === FORM SECTION (Banner ke niche) === */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "50vh",
          marginBottom: "50px",
          mt: { xs: 4, sm: 6, md: 8 }
        }}
      >
        <Paper
          elevation={4}
          sx={{
            
            width: { xs: "90%", sm: "70%", md: "50%" },
            p: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, textAlign: "left" }}>
            Get in Touch
          </Typography>

          {/* Name + Email */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2
            }}
          >
            <TextField
              label="Name*"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email*"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Box>

          {/* Message */}
          <TextField
            label="Message*"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <Box sx={{ textAlign: "left" }}>
            <Button
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                px: 4,
                py: 1,
                "&:hover": { backgroundColor: "#1257a3" }
              }}
            >
              Submit
            </Button>
          </Box>

        </Paper>
      </Box>

      
      {/* === CONTACT ICONS === */}
<Box
  sx={{
    width: "100%",
    mt: 0,        
    mb: 5,        
    p: 0,         
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 3, sm: 6, md: 10 }
  }}
>


        {/* WhatsApp */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer"
          }}
          onClick={() => window.open("https://wa.me/919999999999", "_blank")}
        >
          <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            WhatsApp Support
          </Typography>
        </Box>

        {/* Email */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer"
          }}
          onClick={() => window.location.href = "mailto:info@flyper.co"}
        >
          <EmailIcon sx={{ fontSize: 40, color: "blue" }} />
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Email Support
          </Typography>
        </Box>
      </Box>

    </Layout>
  );
};

export default Contact;
