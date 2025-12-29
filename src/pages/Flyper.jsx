import Layout from "../Components/Layout/Layout";
import areoplaneshop from "../assets/areoplaneshop.jpeg";
import sewing from "../Assets/sewing.jpg";
import spin from "../assets/spin.png";
import { useState } from "react";
import { Box, Typography, Grid, Stack, TextField, Button } from "@mui/material";

const Flyper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <Layout>

      {/* TOP BANNER */}
      <Box>
        <img
          src={areoplaneshop}
          alt="banner"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />
      </Box>

{/* SECTION 1 */}
<Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#ffe4e1ff", mt: -1 }}>
  <Grid 
    container 
    spacing={{ xs: 2, md: 4 }} 
    alignItems="center" 
    justifyContent="center"
  >

    {/* LEFT TEXT */}
    <Grid item xs={12} md={5}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "32px" },
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: { xs: "center", md: "left" },
          mx: { xs: 0, md: 2 }
        }}
      >
        Flyper: Let Your Star Fly
      </Typography>

      <Stack 
        spacing={1} 
        sx={{ mt: 2, textAlign: { xs: "center", md: "left" }, mx: { xs: 0, md: 2 } }}
      >
        <Typography sx={{ fontSize: "18px" }}>
          Exciting, engaging, and entertaining—that’s Flyper’s 8-point spinning star.
        </Typography>

        <Typography sx={{ fontSize: "18px" }}>
          Not only does it level up your coordination and skills, but it helps you build quality bonds.
        </Typography>
      </Stack>
    </Grid>

    {/* RIGHT VIDEO */}
    <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
      <iframe
        width="100%"
        height="350"
        style={{
          maxWidth: "500px",
          borderRadius: "10px",
          border: "none",
        }}
        src="https://www.youtube.com/embed/3V5wN0eKch4"
        title="Flyper Video"
        allowFullScreen
      ></iframe>
    </Grid>

  </Grid>
</Box>



{/* SECTION 2 */}
<Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#ffe4e1ff" }}>
  <Grid 
    container 
    spacing={{ xs: 2, md: 4 }} 
    alignItems="center" 
    justifyContent="center"
  >

    {/* LEFT VIDEO */}
    <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <iframe
        width="100%"
        height="350"
        style={{
          maxWidth: "500px",
          borderRadius: "10px",
          border: "none",
        }}
        src="https://www.youtube.com/embed/IgDkeaOl4Hc"
        title="Flyper Second Video"
        allowFullScreen
      ></iframe>
    </Grid>

    {/* RIGHT TEXT */}
    <Grid item xs={12} md={6}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "32px" },
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: { xs: "center", md: "left" },
          mb: 2,
          mx: { xs: 0, md: 2 }
        }}
      >
        Find Your Flow
      </Typography>

      <Stack spacing={1} sx={{ mx: { xs: 0, md: 2 } }}>
        <Typography sx={{ fontSize: "18px" }}>
          Exciting, engaging, and entertaining—that’s Flyper’s 8-point spinning star.
        </Typography>

        <Typography sx={{ fontSize: "18px" }}>
          Not only does it level up your coordination and skills
        </Typography>

        <Typography sx={{ fontSize: "18px" }}>
          but it helps you build long-lasting quality bonds.
        </Typography>
      </Stack>
    </Grid>

  </Grid>
</Box>



{/* SECTION 3 */}
<Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#ffe4e1ff" }}>
  <Grid 
    container 
    spacing={{ xs: 2, md: 15 }} 
    alignItems="center"
    justifyContent="center"
  >

    {/* LEFT TEXT */}
    <Grid item xs={12} md={6}>
      <Stack 
        spacing={2} 
        sx={{  maxWidth: "450px", mx: "auto" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "32px" },
            fontWeight: "bold",
            fontStyle: "italic",
            marginLeft: 12
          }}
        >
          Flyper-fect Patterns and Pigments
        </Typography>

        <Typography>You get the best seat in the house—down below!</Typography>
        <Typography>As you spin it, your Flyper shows off beautiful patterns.</Typography>
      </Stack>
    </Grid>

    {/* RIGHT IMAGE */}
    <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <img
        src={sewing}
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "10px",
          height: "350px",
          objectFit: "cover",
        }}
      />
    </Grid>

  </Grid>
</Box>



{/* SECTION 4 */}
<Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#ffe4e1ff" }}>
  <Grid 
    container 
    spacing={{ xs: 2, md: 15 }}
    alignItems="center"
    justifyContent="center"
  >

    {/* LEFT IMAGE */}
    <Grid item xs={12} md={6} >
      <img
        src={spin}
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "10px",
          height: "350px",
          objectFit: "cover",
        }}
      />
    </Grid>

    {/* RIGHT TEXT */}
    <Grid item xs={12} md={6}>
      <Stack 
        spacing={2} 
        sx={{ maxWidth: "450px", mx: "auto",  }}
      >
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "32px" },
            fontWeight: "bold",
            fontStyle: "italic",
            marginLeft: 10
          }}
        >
          Spin Away from the Screen
        </Typography>

        <Typography>You get the best seat in the house—down below!</Typography>
        <Typography>As you spin it, your Flyper shows amazing designs.</Typography>
      </Stack>
    </Grid>

  </Grid>
</Box>



     {/* FORM SECTION */}
<Box
  sx={{
    width: "100%",
    bgcolor: "#f5f5f5",
    py: 6,
    display: "flex",
    justifyContent: "center",
    mt: 0,
  }}
>
  <Box
    sx={{
      width: "100%",
      maxWidth: "900px",   
      px: { xs: 2, md: 4 },
      mx: "auto",
    }}
  >
    <Typography
      sx={{
        textAlign: "center",
        fontSize: { xs: "26px", md: "32px" },
        fontWeight: "bold",
      }}
    >
      Sign up for newsletter
    </Typography>

    <form onSubmit={handleSubmit}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ width: { xs: "100%", md: "150px" } }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  </Box>
</Box>
    </Layout>
  );
};

export default Flyper;

   
/***************************************************************************************************/

// import Layout from "../Components/Layout/Layout";
// import areoplaneshop from "../Assets/areoplaneshop.jpeg";
// import sewing from "../Assets/sewing.jpg";
// import spin from "../assets/spin.png";
// import { useState } from "react";
// import { Box, Typography, Grid, Stack, TextField, Button } from "@mui/material";

// const Flyper = () => {
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email) {
//       alert("Please fill all required fields!");
//       return;
//     }
//     alert("Form submitted successfully!");
//     setFormData({ name: "", email: "" });
//   };

//   return (
//     <Layout>

//       {/* ---------------- TOP BANNER ---------------- */}
//       <Box>
//         <img
//           src={areoplaneshop}
//           alt="banner"
//           style={{
//             width: "100%",
//             height: "350px",
//             objectFit: "cover",
//             borderRadius: "0 0 10px 10px",
//           }}
//         />
//       </Box>

//       {/* ---------------- SECTION 1 ---------------- */}
//       <Box sx={{ px: { xs: 2, md: 6 }, py: 5 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Text */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "26px", md: "36px" },
//                 fontWeight: "bold",
//                 fontStyle: "italic",
//                 mb: 3,
//                 textAlign: "center",
//                 background: "linear-gradient(to right, #111, #777)",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Flyper: Let Your Star Fly
//             </Typography>

//             <Stack spacing={2}>
//               <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
//                 Exciting, engaging, and entertaining—that’s Flyper’s 8-point
//                 spinning star.
//               </Typography>

//               <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
//                 Boost coordination + build long-lasting memorable moments.
//               </Typography>
//             </Stack>
//           </Grid>

//           {/* Video */}
//           <Grid item xs={12} md={6}>
//             <iframe
//               width="100%"
//               height="340"
//               style={{
//                 borderRadius: "12px",
//                 border: "none",
//                 boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//               }}
//               src="https://www.youtube.com/embed/3V5wN0eKch4"
//               title="Flyper Video"
//               allowFullScreen
//             ></iframe>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* ---------------- SECTION 2 ---------------- */}
//       <Box sx={{ px: { xs: 2, md: 6 }, py: 5, bgcolor: "#fafafa" }}>
//         <Grid container spacing={4} alignItems="center">

//           {/* Video */}
//           <Grid item xs={12} md={6}>
//             <iframe
//               width="100%"
//               height="340"
//               style={{
//                 borderRadius: "12px",
//                 border: "none",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//               }}
//               src="https://www.youtube.com/embed/IgDkeaOl4Hc"
//               title="Flyper Second Video"
//               allowFullScreen
//             ></iframe>
//           </Grid>

//           {/* Text */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "26px", md: "36px" },
//                 fontWeight: "bold",
//                 fontStyle: "italic",
//                 mb: 3,
//                 textAlign: "center",
//                 background: "linear-gradient(to right, #444, #000)",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Find Your Flow
//             </Typography>

//             <Stack spacing={2}>
//               <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
//                 Improve control, rhythm & timing.
//               </Typography>
//               <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
//                 Flyper turns skill-building into pure entertainment.
//               </Typography>
//             </Stack>
//           </Grid>

//         </Grid>
//       </Box>

//       {/* ---------------- SECTION 3 ---------------- */}
//       <Box sx={{ px: { xs: 2, md: 6 }, py: 5 }}>
//         <Grid container spacing={4} alignItems="center">

//           {/* Text */}
//           <Grid item xs={12} md={6}>
//             <Stack spacing={2} sx={{ textAlign: "center" }}>
//               <Typography
//                 sx={{
//                   fontSize: { xs: "26px", md: "36px" },
//                   fontWeight: "bold",
//                   fontStyle: "italic",
//                   background: "linear-gradient(to right, #000, #777)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Flyper-fect Patterns
//               </Typography>

//               <Typography sx={{ fontSize: "18px" }}>
//                 Enjoy mind-blowing visuals & amazing spinning illusions.
//               </Typography>
//               <Typography sx={{ fontSize: "18px" }}>
//                 Every rotation creates hypnotic patterns!
//               </Typography>
//             </Stack>
//           </Grid>

//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <img
//               src={sewing}
//               alt="sewing"
//               style={{
//                 width: "100%",
//                 height: "350px",
//                 maxWidth: "500px",
//                 borderRadius: "12px",
//                 objectFit: "cover",
//                 boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
//               }}
//             />
//           </Grid>

//         </Grid>
//       </Box>

//       {/* ---------------- SECTION 4 ---------------- */}
//       <Box sx={{ px: { xs: 2, md: 6 }, py: 5, bgcolor: "#fafafa" }}>
//         <Grid container spacing={4} alignItems="center">

//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <img
//               src={spin}
//               alt="spin"
//               style={{
//                 width: "100%",
//                 height: "350px",
//                 maxWidth: "500px",
//                 borderRadius: "12px",
//                 objectFit: "cover",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//               }}
//             />
//           </Grid>

//           {/* Text */}
//           <Grid item xs={12} md={6}>
//             <Stack spacing={2} sx={{ textAlign: "center" }}>
//               <Typography
//                 sx={{
//                   fontSize: { xs: "26px", md: "36px" },
//                   fontWeight: "bold",
//                   fontStyle: "italic",
//                   background: "linear-gradient(to right, #333, #000)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Spin Away from the Screen
//               </Typography>

//               <Typography sx={{ fontSize: "18px" }}>
//                 Take a break from devices and enjoy meaningful fun.
//               </Typography>
//               <Typography sx={{ fontSize: "18px" }}>
//                 Flyper brings physical joy + creative expression.
//               </Typography>
//             </Stack>
//           </Grid>

//         </Grid>
//       </Box>

//       {/* ---------------- NEWSLETTER FORM ---------------- */}
//       <Box
//         sx={{
//           px: { xs: 2, md: 6 },
//           py: 6,
//           bgcolor: "#111",
//           color: "white",
//           borderRadius: "10px 10px 0 0",
//           textAlign: "center",
//         }}
//       >
//         <Typography sx={{ fontSize: "30px", fontWeight: "bold", mb: 4 }}>
//           Sign Up For Newsletter
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Stack
//             direction={{ xs: "column", md: "row" }}
//             spacing={3}
//             sx={{ justifyContent: "center" }}
//           >
//             <TextField
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               sx={{ bgcolor: "white", borderRadius: "6px" }}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               sx={{ bgcolor: "white", borderRadius: "6px" }}
//             />
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{
//                 bgcolor: "#ff6f00",
//                 ":hover": { bgcolor: "#e65100" },
//                 px: 4,
//               }}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </form>
//       </Box>

//     </Layout>
//   );
// };

// export default Flyper;
