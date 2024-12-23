import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, Typography, Link, Box } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/menu');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#eaf5ea',
      }}
    >
      <Card
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '90%',
          maxWidth: 400,
          textAlign: 'center',
          backgroundColor: '#f9fdf9',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, color: '#6d8b50', fontWeight: 'bold' }}>
          Bem-vindo!
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#6d8b50' },
                '&:hover fieldset': { borderColor: '#4f6739' },
                '&.Mui-focused fieldset': { borderColor: '#4f6739' },
              },
            }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#6d8b50' },
                '&:hover fieldset': { borderColor: '#4f6739' },
                '&.Mui-focused fieldset': { borderColor: '#4f6739' },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{
              backgroundColor: '#6d8b50',
              '&:hover': { backgroundColor: '#4f6739' },
            }}
          >
            Entrar
          </Button>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.9rem',
          }}
        >
          <Link href="#" underline="hover" sx={{ color: '#6d8b50' }}>
            Esqueceu sua senha?
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#6d8b50' }}>
            Criar conta
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
