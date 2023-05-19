import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { Box, CardMedia, Grid, Typography } from "@mui/material";


export default function aboutus(){
    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>      


            <Box display="flex" alignItems="center" >
            <Grid container >
                <Grid item xs={12} sm={12} md={12}>
            

              <CardMedia
                component="img"
                src="https://m.media-amazon.com/images/I/51WxhxxrEXL.jpg"
                alt="About Us Image"
                height="300"
                
              /></Grid>
              <Box m={4}>
                <Typography variant="h4" gutterBottom>  About Us   </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at enim vel ipsum fringilla fringilla. Suspendisse vulputate neque sit amet tellus ullamcorper, ut bibendum metus semper. Aliquam volutpat sapien vel urna finibus efficitur.
                </Typography>
              </Box></Grid>
            </Box>
            </>
    );
}