import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { users } from '../resources/Users.ts';
import { Button, TextField } from '@mui/material';
import '../css/UsersForms.css'
import {ThemeProvider, createTheme} from '@mui/material/styles';

const primaryColor = createTheme({
  status: {
    danger: '#01C38D',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      darker: '#01C38D',
    },
    neutral: {
      main: '#01C38D',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}


function UsersDetailsScreen() {

  const { id } = useParams();
  const user = users.find(user => user.id.toString() == id ) 

  if(!user){
    return(
        <div className="container">
        <h1>User not found </h1>
        </div>
    )
  }

  const {name,role,address,salary} = user;

  return (
    <div className="userDetails">
      <h1>User Details</h1>
      <div className='userDetails_container'>
        <div className='userDetails_container_name'>
          <h5>Username: {name}</h5>
          <ThemeProvider theme={primaryColor} >
            <TextField className='userDetails_textfield' color='primary' variant="filled"  label="Change username"  focused />
           </ThemeProvider>
        </div>
        <div className='userDetails_container_role'>
          <h5>Role: {role}</h5>
          <ThemeProvider theme={primaryColor}>
            <TextField className='userDetails_textfield' color='primary' variant="filled" label="Change role" focused />
          </ThemeProvider>
        </div>
        <div className='userDetails_container_address'>
          <h5>Address: {address}</h5>
          <ThemeProvider theme={primaryColor}>
            <TextField className='userDetails_textfield' label="Change address" variant="filled" focused />
          </ThemeProvider>
        </div>
        <div className='userDetails_container_salary'>
          <h5>Salary: {salary}</h5>
          <ThemeProvider theme={primaryColor}>
            <TextField className='userDetails_textfield' label="Change salary" variant="filled" focused />
          </ThemeProvider>
        </div>

        <div className='userDetails_container_buttons'>
          <ThemeProvider  theme={primaryColor}>
            <Button variant="contained">Guardar</Button>
          </ThemeProvider>
          <NavLink className='cancel_button' to={'/users'} >Cancelar</NavLink>
        </div>
      </div>
    </div>
  );
}

export default UsersDetailsScreen;