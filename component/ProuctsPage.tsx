import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { Apiurl } from '@/constants'
import { useRouter } from 'next/router';
import { LinkOutlined } from '@mui/icons-material';


function ProductsPage(props: any) {
  const router = useRouter()

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(Apiurl + 'get_current_deals')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product_data)
      })
  }, [])
  const handleClick=(event)=>{

    var link = "http://localhost:3000/product?asin="+ event.target.id+"&tag=bestdeal0013-21"
    router.push(link)

  }


  return (
    <Grid container spacing={4}>
      {products.map((product: { product_id: React.Key | null | undefined; product_image: string | undefined; product_title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; product_price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index) => (
        <Grid item xs={12} sm={6} md={4} key={product.product_id} >
          <Card style={{ backgroundColor: grey[200] }}>
            <CardMedia
              component="img"
              width={400}
              height={400}
              image={product.product_image}
              title={product.product_title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {product.product_title.slice(0,40)}..
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* {product.description} */}
              </Typography>
              <Typography variant="h4">
              ₹ {product.product_price}
              </Typography>
            </CardContent>
            <CardActions>
            <Button id={product.product_id} variant="contained" style={{ backgroundColor: purple[500], color: '#fff' }} onClick={handleClick}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

    </Grid>

  );
}

export default ProductsPage;
