import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react'

function Post() {
  return (
    <Card sx={{margin: "5px"}}>
    <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red }} aria-label="recipe" src='https://cdn-icons-png.flaticon.com/512/147/147144.png'>
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
    />
    <CardMedia
        component="img"
        height="20%"
        image="https://www.foodandwine.com/thmb/bVcPTJTtq4HZz5tGS2d3C9m7kOg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-and-chorizo-paella-FT-RECIPE0221-3d6a72481b6a42d1ab64f440aae17b12.jpg"
        alt="Paella dish"
    />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />                    </IconButton>
        <IconButton aria-label="share">
            <Share />
        </IconButton>
    </CardActions>
</Card>
  )
}

export default Post