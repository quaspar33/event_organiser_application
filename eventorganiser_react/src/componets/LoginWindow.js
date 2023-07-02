import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function LoginWindow() {
    const[name, setName] = useState('');
    const[surname, setSurname] = useState('');
    const[description, setDescription] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const user = { name, surname, description };
        console.log(user);
        const url = `http://localhost:8080/users`;
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(() => {
                console.log("Udało się dodać użytkownika");
            })
            .catch((error) => {
                console.log("Wystąpił błąd podczas dodawania użytkownika:", error);
            });
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6" gutterBottom sx={{fontSize: '32px', marginBottom: '16px', transform: 'translateY(-20px)' }}>
                Log In
            </Typography>
            <TextField id="standard-basic" label="Name" variant="standard" sx={{transform: 'translateY(-20px)'}}
                       value={name}
                       onChange={(e) => setName(e.target.value)}
            />
            <TextField id="standard-basic" label="Surname" variant="standard" sx={{transform: 'translateY(-20px)'}}
                       value={surname}
                       onChange={(e) => setSurname(e.target.value)}
            />
            <TextField id="standard-basic" label="Description" variant="standard" sx={{transform: 'translateY(-20px)'}}
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth className="login-button" sx={{transform: 'translateY(10px)'}} onClick = {handleClick}>
                Enter
            </Button>
        </Box>
    );
}
