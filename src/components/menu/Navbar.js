import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faCog, faEnvelope, faSignOutAlt, faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons"; // Add faUsers import
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isOpen, sidebarWidth, onLogout }) => {
  const location = useLocation();
  const menuItems = [
    { text: "Home", icon: faHome, link: "/" },
    { text: "Usuários", icon: faUsers, link: "/users" }, 
    { text: "Sobre", icon: faInfoCircle, link: "/about" },
    { text: "Serviços", icon: faCog, link: "/services" },
    { text: "Contato", icon: faEnvelope, link: "/contact" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? sidebarWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          color: "#6d8b50",
          boxShadow: "0 0 10px rgba(44, 110, 73, 0.2)",
          transition: "width 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 0",
            color: "#6d8b50",
            gap: "8px",
          }}
        >
          <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: "1.8rem", color: "#6d8b50" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem", 
              color: "#6d8b50",
            }}
          >
            TáNaAgenda
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  margin: "5px 12px",
                  backgroundColor: location.pathname === item.link ? "#e0f7e4" : "transparent",
                  color: location.pathname === item.link ? "#6d8b50" : "inherit",
                  "&:hover": {
                    backgroundColor: "#e0f7e4",
                    color: "#6d8b50",
                    transform: "translateX(10px)",
                  },
                  "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-root": {
                    color: "#6d8b50",
                  },
                }}
              >
                <ListItemIcon sx={{ color: location.pathname === item.link ? "#6d8b50" : "inherit" }}>
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ color: location.pathname === item.link ? "#6d8b50" : "#4f6739", fontWeight: "bold", fontSize: "0.7rem" }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ pb: 2 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={onLogout}
            sx={{
              borderRadius: "8px",
              transition: "all 0.3s ease",
              margin: "5px 12px",
              "&:hover": {
                backgroundColor: "#e0f7e4",
                color: "#6d8b50",
                transform: "translateX(10px)",
              },
              "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-root": {
                color: "#6d8b50",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#6d8b50" }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </ListItemIcon>
            <ListItemText
              primary="Sair"
              sx={{ color: "#4f6739", fontWeight: "bold", fontSize: "0.7rem" }} 
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Navbar;
