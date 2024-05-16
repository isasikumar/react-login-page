import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, Button, Avatar, Container, Box, TextField, CssBaseline } from '@mui/material';
import { AccountCircle, Lock }  from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import logoImg from "./logo.png";

const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === "language") {
        setLanguage(value);
        i18n.changeLanguage(value); 
    }
  };


  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
      setEmailError(t('emailError'));
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError(t('passwordError'));
    } else {
      setPasswordError(false);
    }
  };

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')
  
    if ('' === email) {
      setEmailError(t('emailError'))
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t('invalidEmail'))
      return
    }
    if ('' === password) {
      setPasswordError(t('passwordError'))
      return
    }
    if (password.length !== 6) {
      setPasswordError(t('invalidPassword'))
      return
    }
    navigate("/home");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ bgcolor: '#f5fafe', boxShadow: 3, height: '100vh' }}>
        
        <Select sx={{ mx:'auto', minWidth: 120, width: 0 }} size="small" name="language" labelId="language" id="language" value={language} onChange={handleInputChange} label="Language">
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ta">Tamil</MenuItem>
        </Select>

        <Box sx={{mx:'auto', width: 75}}>
          <Avatar alt="Logo" src={logoImg} sx={{ width: 60, height: 60 }}/>
        </Box>

          <div className={'titleContainer'}>
            <div>{t('login')}</div>
          </div>
          <br />          
          <Box sx={{ mx:'auto', width: 250, display: 'flex', alignItems: 'flex-end' }}>              
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField required label={t('email')} value={email} onChange={handleEmailChange} error={emailError} helperText={emailError} variant="standard" />
          </Box>
          <br />
          <Box sx={{ mx:'auto', width: 250, display: 'flex', alignItems: 'flex-end' }}>
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField required label={t('password')} type="password" value={password} onChange={handlePasswordChange} error={passwordError} helperText={passwordError} variant="standard" />
          </Box>
          <br/>
          <br/>
          <Box sx={{ mx:'auto', width: 100, display: 'flex', alignItems: 'flex-end' }}>
            <Button type="button" onClick={onButtonClick} variant="contained" size="large">{t('login')}</Button>
          </Box>
          <br/>
          <br/>
          <Box sx={{ ml: '200px' }}>
            <Button type="button" onClick={onButtonClick} variant="text" size="small">{t('forgotPassword')}</Button>
          </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;
