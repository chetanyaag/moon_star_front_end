import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/component/ResponsiveAppBar'
import NavBar from '@/component/NavBar'
import ProductsPage from '@/component/ProuctsPage'
import { Box, Container, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react'
import { Apiurl } from '@/constants'



const inter = Inter({ subsets: ['latin'] })
const theme = createMuiTheme({
  palette: {
    background: {
      default: '0000ff',
    },
  },
});




export default function Home() {



  const [apiFlag, setApiFlag] = useState(false)


  // if (data.message == 200){
  //   setApiFlag(true)
  // }





  return (<>
    {/* <ThemeProvider theme={theme}> */}

    <ResponsiveAppBar></ResponsiveAppBar>
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '8rem', marginBottom: '4rem' }}>
      <Typography variant="h3" component="h1">
        Our Products
      </Typography>
    </Container>
    <Grid container >
      <Grid item xs={0} sm={0} md={1}></Grid>
      <Grid item xs={12} sm={12} md={10}>
        <Box m={2}>
          <ProductsPage ></ProductsPage>
          </Box>
          {/* <Box m={2}>
          <ProductsPage prod={data.slice(3, 6)}></ProductsPage>
          </Box>
          <Box m={2}>
          <ProductsPage prod={data.slice(6, 9)}></ProductsPage>
          </Box> */}
          </Grid>
      <Grid item xs={0} sm={0} md={1}></Grid>
    </Grid>


    {/* </ThemeProvider> */}
  </>
  );
}


