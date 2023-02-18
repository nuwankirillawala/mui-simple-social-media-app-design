import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react'



const Rightbar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
          <Avatar alt="Travis Howard" src="https://cdn-icons-png.flaticon.com/512/147/147133.png" />
          <Avatar alt="Cindy Baker" src="https://cdn-icons-png.flaticon.com/512/147/147142.png" />
          <Avatar alt="Agnes Walker" src="https://cdn-icons-png.flaticon.com/512/147/147133.png" />
          <Avatar alt="Trevor Henderson" src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" />
        </AvatarGroup>

        <Typography variant="h6">
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar;