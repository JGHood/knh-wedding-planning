import React, { useState, useEffect, useContext } from 'react';
import { app, googleProvider, signOut } from '../firebase';
import { AuthContext } from '../Authentication';
import { Paper, Button, TextField, SvgIcon } from '@material-ui/core';
import { useHistory } from "react-router-dom";


export default function SignUp(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated} = useContext(AuthContext);
    const history = useHistory();

    useEffect(()=> {
        if(isAuthenticated)
        {
            history.push("/");
        }
    },[])
    const submitForm = () => {
        app.auth().signInWithEmailAndPassword(email, password)
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

    const googleIcon = () => {
        return (
            <SvgIcon color="secondary">
                <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
            </SvgIcon>
        )
    }

    const googleSignIn = () => {
        app.auth()
            .signInWithRedirect(googleProvider)
            .then((result) => {
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "160px", height: '100%' }}>
                <Paper style={{ padding: "32px", paddingTop: "10px" }}>
                    <h1>Sign In</h1>
                    <form>
                        <div>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)} />
                        </div>
                        <div style={{ marginTop: "8px" }}>
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)} />
                        </div>
                        <div>
                            <Button
                                style={{ width:"100%",marginTop: "16px" }}
                                variant="contained"
                                color="primary"
                                disableElevation
                                onClick={(e) => { e.preventDefault(); submitForm() }}>
                                Sign In With Email
                            </Button>
                        </div>
                        <div>
                        </div>
                    </form>
                    <p style={{width:"100%", textAlign:'center'}}>or</p>
                    <Button
                        startIcon={googleIcon()}
                        variant="outlined"
                        color="primary"
                        disableElevation
                        onClick={() => { googleSignIn() }}>
                        Sign In With Google
                    </Button>
                </Paper>
            </div>
        </>
    )
}