import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "GALLARY", path: "/gallary"},
    { label: "SHOP", path: "/shop" },
    { label: "FLYPER", path: "/Flyper" },
    { label: "WORK WITH FLYPER", path: "/work" },
    { label: "CONTACT US", path: "/Contact" },
  ];

  const drawer = (
    <Box sx={{ width: 260 }}>
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "22px", marginRight: "12px"}}>
          Flyper
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Drawer Menu Items */}
      <List sx={{ mt: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                py: 1.6,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.05)",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "black",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            style={{ textDecoration: "none" }}
            sx={{
              color: "white",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: "bold",
              letterSpacing: "1px",
              transition: "0.3s",
              "&:hover": {
                color: "#ffcc00",
              },
            }}
          >
            Flyper
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "0.3s",
                  "&:hover": {
                    color: "#ffcc00",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
