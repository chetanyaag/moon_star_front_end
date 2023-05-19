import { Apiurl } from "@/constants";
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function UserTable() {

    const [users, setUsers]= useState([])

    useEffect(()=>{

        fetch(Apiurl+"get_users").then((response) => response.json())
        .then((json) => {
            if (json["status"]==200){
                setUsers(json["message"])
            }

        })



    })
    



    return (
        <>
            <Card>
                <CardContent>

                <Typography variant="h6" >All Users</Typography>

                    <TableContainer component={Paper}>
                        <Table aria-label="Active Users">
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell>Id</TableCell> */}
                                    <TableCell>Tag</TableCell>
                                    <TableCell>Password</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map((username)=>(
                                        <TableRow>
                                        {/* <TableCell>{}</TableCell> */}
                                        <TableCell>{username}</TableCell>
                                        <TableCell>pass@123</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>

                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </>
    );
}