// /components/LoginModal.js
"use client";
import { useRouter } from 'next/navigation';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = { // Estilos para o Modal
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '10px'
};

const LoginModal = ({ open, onClose }) => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Função para Usuários
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Para favoritar roteiros e acessar outras funcionalidades, é necessário fazer o login.
        </Typography>
        <Button onClick={handleLoginRedirect} variant="contained" sx={{ mt: 3 }}>
          Fazer Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;