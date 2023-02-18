import React, { useState } from 'react';
import { Navigation, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import InputBase from '@mui/material/InputBase';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Promi MUI</Typography>
        <Navigation sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder='search...' />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} sx={{ width: "30px", height: "30px" }} />
        </Icons>
        {/* For sizes less than small */}
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: "30px", height: "30px" }} />
          <Typography variant="h6">John</Typography>
        </UserBox>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={anchorEl}
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>

      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;