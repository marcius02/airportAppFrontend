import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Box,
    Drawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
  import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Flight as FlightIcon,
    LocationOn as AirportIcon,
    AirplanemodeActive as PlaneIcon,
  } from '@mui/icons-material';


export default function Sidebar () {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    };
    
    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/' },
        { text: 'Airports', icon: <AirportIcon />, path: '/airports' },
        { text: 'Flights', icon: <FlightIcon />, path: '/flights' },
        { text: 'Planes', icon: <PlaneIcon />, path: '/planes' },
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
    );

      return (
        <div>
          {/* Hamburger Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
    
          {/* Drawer */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      );
      
}