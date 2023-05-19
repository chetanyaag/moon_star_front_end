

import CopyForm from "@/component/CopyForm";
import CreateForm from "@/component/CreateForm";
import NavBarDash from "@/component/NavBarDash";
import { Apiurl } from "@/constants";
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import  router  from 'next/router'
import { SetStateAction, useEffect, useState } from "react";
import Cookies from "universal-cookie";


export default function DashB() {

    // const router = useRouter()

    const [result, setResult] = useState(1)
    const [asin, setAsin] = useState('')

    const cookies = new Cookies();
    useEffect(()=>{
        if (cookies.get('token') != null) {
            fetch(Apiurl+"check_tkn", {
                method: "POST",
                body: JSON.stringify({
                    tkn: cookies.get('token')
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => response.json())
                .then((json) => {
                    if (json['status'] == 400) {
                        cookies.set('token', '', { path: '/', expires: (new Date(Date.now())) });
                        router.push("/login");
                    }
    
                });
        }
        if (cookies.get('token') == null) {
            router.push("/login");
        }
    })

    const handleChildData = (childData: SetStateAction<number>)=>{
        setResult(childData)
        console.log(result)
    }
    const handleAsin =(asindata: SetStateAction<string>)=>{
        setAsin(asindata)
    }


    return (
        <>
            <NavBarDash></NavBarDash>
            <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
                <Typography variant="h4" component="h1">
                    Create link here
                </Typography>
            </Container>
            <Grid container>
                <Grid item xs={0} sm={0} md={2}> </Grid>
                <Grid item xs={0} sm={0} md={8}>
                    {result==1? <CreateForm onChild={handleChildData} onAsin={handleAsin}></CreateForm>:<CopyForm data={result} asin={asin}></CopyForm>}
                    

                    



                </Grid>
                <Grid item xs={0} sm={0} md={2}> </Grid>
            </Grid>





        </>
    );
}