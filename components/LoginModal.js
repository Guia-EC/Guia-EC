// /components/LoginModal.js
"use client";
import { useRouter } from 'next/navigation';
import { Modal, Box, Typography, Button } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const style = { // Estilos para o Modal
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '10px',
  '&:focus': {
    outline: 'none',
  }
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
          <WarningRoundedIcon sx={{width: '70px', height: 'auto'}} />
        </Typography>
        <Typography sx={{ mt: 2, marginTop: 0 }}>
          Para acessar opções personalizadas, é necessário estar logado em sua conta
        </Typography>
        <Button onClick={handleLoginRedirect} variant="contained" sx={{ mt: 3, backgroundColor: 'white', border: 'solid 1px black', color: 'black'  }}>
          Fazer Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;