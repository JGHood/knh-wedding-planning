import React, { useState, useContext } from 'react';
import { app, googleProvider } from '../firebase';
import { AuthContext } from '../Authentication';
import { Paper, Button, TextField } from '@material-ui/core';


export default function SignUp(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitForm = () => {
        app.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                setEmail('');
                setPassword('');
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    return (
        <div style={{display: 'flex',  justifyContent:'center', marginTop:"15%", height: '100%'}}>
            <Paper style={{padding:"32px", paddingTop:"10px"}}>
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}></TextField>
                    </div>
                    <div>
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}></TextField>
                    </div>
                    <div>
                        <Button style={{marginTop:"16px"}} variant="contained" color="primary" disableElevation onClick={(e) => { e.preventDefault(); submitForm() }}>Create Account</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}