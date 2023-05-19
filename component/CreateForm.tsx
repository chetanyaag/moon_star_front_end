import { Apiurl } from "@/constants";
import { Card, CardContent, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import Spinners from "./Spinners";



export default function CreateForm(props: {
    onAsin: any; onChild: (arg0: number) => void; 
}) {

    const [asin, setAsin] = useState('')
    const [spiner, setSpinner] = useState(false)



    const hadleAsin = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setAsin(event.currentTarget.value)
    }

    const handleClick = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        fetch(Apiurl+"addAProduct", {
            method: "POST",
            body: JSON.stringify({
                asin: asin
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
            .then((json) => {
                setSpinner(true)
                if (json['message'] == 200) {
                    setAsin(json['asin'])
                    props.onAsin(asin)
                    props.onChild(2)
                } else {
                    setAsin('')
                    props.onChild(0)
                }
            }

            );
    }


    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        Paste your link/asin for creating link
                    </Typography>
                    <TextField style={{ margin: '16px 0' }} label="Asin/Link" value={asin} variant="outlined" helperText="Enter the amazon product link or product asin for genrating the link" onChange={hadleAsin} fullWidth></TextField>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                     {/* <Button variant="contained" color="secondary" onClick={handleClick} style={{ margin: '16px 0' }}>create link</Button> */}
                     {spiner? <Spinners />:<Button variant="contained" color="secondary" onClick={handleClick} style={{ margin: '16px 0' }}>create link</Button>
}

                    
                    </div>
                </CardContent>
            </Card>
        </>
    );
}