import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './Tmes.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Double T Team '}{new Date().getFullYear()}
      {'.'} <br/>
      {'(Nguyen Thanh Tai & Pham Anh Tai)'}
     
      
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{maxWidth: 300}} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Remy Sharp" src={logo} sx={{ m: 1, bgcolor: 'secondary.main',width: 200, height: 200, }}/>
           
         
          <Typography component="h1" variant="h5" textAlign={'center'} width={500}>
            Welcome to Tmes Chatting 
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            
            <Button
            endIcon={<FacebookIcon/>}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, mr: 30}}
            >
              Sign in by Facebook
            </Button>
            <Button
            endIcon={<GoogleIcon/>}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 1, mr: 30}}
            >
              Sign in by Google
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}