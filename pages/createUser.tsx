import CreateUserForm from "@/component/CreateUserForm";
import NavBarDash from "@/component/NavBarDash";
import UserTable from "@/component/UserTable";
import { Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from "@mui/material";


export default function createUser(){
    return (<>
    <NavBarDash></NavBarDash>
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
        <Typography variant="h4" component="h1">
        Create link here
        </Typography>
      </Container>

        <Grid container>
        <Grid item xs={12} sm={12} md={1}> </Grid>
        <Grid item xs={12} sm={12} md={4}>

        <CreateUserForm></CreateUserForm>


        </Grid>
        <Grid item xs={12} sm={12} md={1}> </Grid>
        <Grid item xs={12} sm={12} md={6}><UserTable></UserTable></Grid>  
        </Grid>




    </>);
}