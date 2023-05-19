import { Apiurl } from "@/constants";
import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import router from "next/router";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function CreateUserForm(){


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')



    //check admin
    const cookies = new Cookies();
    useEffect(()=>{
        if (cookies.get('token') != null) {
            fetch(Apiurl+"check_admin", {
                method: "POST",
                body: JSON.stringify({
                    tkn: cookies.get('token')
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => response.json())
                .then((json) => {
                    if (json['status'] != 200) {
                        cookies.set('token', '', { path: '/', expires: (new Date(Date.now())) });
                        router.push("/dashboard");
                    }else{
                        setToken(cookies.get('token'))
                    }
    
                });
        }
        if (cookies.get('token') == null) {
            router.push("/login");
        }
    }, [])


    //handle create

    const handleUsername = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.currentTarget.value);
    }

    const handlePass = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.currentTarget.value);
    }


    const handleClick = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {

        if (username == '' || password == '') {
            alert("something is not filed")
        }
        fetch(Apiurl+"create_user", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
                tkn:token
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
        .then((json) => {
            // if(json['status']==200){
            
            alert(json["message"])
        // }
    }
        
        );
  


    }


        return(
            <>
                    <Card>
        <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                    Create User
                    </Typography>
                    <TextField style={{ margin: '3px 0' }} label="username" variant="outlined" value={username} onChange={handleUsername} fullWidth></TextField>
                    <TextField style={{ margin: '5px 0' }} label="password" type="password" variant="outlined" value={password} onChange={handlePass}  fullWidth></TextField>

                    <div style={{ display: 'flex', justifyContent: 'center',margin: '16px 0' }}>
                    <Stack spacing={2} direction='row'>
                    <Button variant="contained" color="secondary" onClick={handleClick}>Create User</Button>
                    </Stack>
                    </div>
                
                </CardContent>
        </Card>
            </>
        );
}