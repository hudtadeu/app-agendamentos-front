import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faCog, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Home", icon: faHome, link: "/" },
    { text: "Sobre", icon: faInfoCircle, link: "/about" },
    { text: "Serviços", icon: faCog, link: "/services" },
    { text: "Contato", icon: faEnvelope, link: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#fff", 
            color: "#6d8b50", 
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
        }}
        >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ marginRight: 2 }}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Typography variant="h6" noWrap>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            color: "#6d8b50",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.icon} style={{ color: "#6d8b50" }} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
