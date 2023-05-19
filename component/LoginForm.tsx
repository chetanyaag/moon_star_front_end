import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { Apiurl } from '@/constants';

const LoginForm = () => {

    const router = useRouter()

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#a020f0' }
    const btnstyle = { margin: '8px 0' }

    const [formData, setFormData] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const cookies = new Cookies();

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
        fetch(Apiurl+"check_user", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
        .then((json) => {if(json['status']==200){
            cookies.set('token', json['message'], { path: '/' });
            router.push('/dashboard')
        }}
        
        );
  


    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid >
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Box m={1}>
                    <TextField label='Username' placeholder='Enter username' onChange={handleUsername}
                        value={username} fullWidth required />
                </Box>
                <Box m={1}>
                    <TextField label='Password' placeholder='Enter password' type='password' onChange={handlePass}
                        value={password} fullWidth required />
                </Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='secondary' variant="contained" onClick={handleClick} style={btnstyle} fullWidth>Sign in</Button>

            </Paper>
        </Grid>
    )
}

export default LoginForm