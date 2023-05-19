import { Grid, Typography, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Rating, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Apiurl } from '@/constants';

const ProductPage = () => {


  const [name, setName] = useState('')
  const [url, seUrl] = useState('')
  const [image, setImage] = useState('')

  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [feature, setFeature] = useState([])
  // const [name, setName] = useState('')

  const router = useRouter()
  const asin = router.query.asin
  const tag = router.query.tag

  useEffect(() => {

    fetch(Apiurl+"getProductData?asin="+ asin).then((response) => response.json())
      .then((json) => {
        if (json['status'] == 200) {
            if (json['data']['product_title'] != null){
              setName(json['data']['product_title'])
            }
            if (json['data']['product_image'] != null){
              setImage(json['data']['product_image'])
            }
            if (json['data']['product_price'] != null){
              setPrice(json['data']['product_price'])
            }
            if (json['data']['product_binding'] != null){
              setCategory(json['data']['product_group'])
            }
            if (json['data']['product_group'] != null){
              setCategory(json['data']['product_group'])
            }
            if (json['data']['product_features'] != null){
              setFeature(json['data']['product_features'])
            }
        }

      });
      // const interval = setInterval(() => {
      //   console.log('This will run every second!');
      // }, 10000);
      // return () => clearInterval(interval);

  },[])
  setTimeout(function() {
    window.location.replace("https://www.amazon.in/dp/"+ asin+ "?tag="+ tag);
  }, 5000);
  

const handleClick= (event)=>{
    var link = "https://www.amazon.in/dp/"+ asin + "?tag="+ tag;
    router.push(link)
}


  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardHeader
            // title="N-POLO Wall Mounted Double Layer soap Dish Holder with 2 Hook Stainless Steel Wall Hanging Soap Storage Rack for Kitchen Bathroom with Self Adhesive Magic Sticker(Silver)(2 Layer)"
            title={name}
         />
          <CardMedia
            component="img"
            height="350"
            // image="https://m.media-amazon.com/images/I/51WxhxxrEXL.jpg"
            image={image}
            alt="Product Image"
          />
          <CardContent>

          </CardContent>

        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={1}></Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader title="" />
          <CardContent>
          <Typography variant="body1" gutterBottom>
            {category==""? "": category}
            </Typography>
            <Typography variant="h3">
              ₹ {price}
            </Typography>

            <Rating name="product-rating" value={4} readOnly />
            </CardContent>
            <CardActions>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClick}>
              Buy Now
            </Button>
          </CardActions>
            <CardContent>
            
            <br/>
            <Typography variant="h6">
              Product Feature

            </Typography>
          <List dense>
          {feature.map((item) => (

        <ListItem key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
          </List>


          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={1}></Grid>
    </Grid>
  );
};

export default ProductPage;
