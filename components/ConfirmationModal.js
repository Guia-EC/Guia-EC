// /components/ConfirmationModal.js

"use client";
import { Modal, Box, Typography, Button } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 370 }, // Responsivo para telas menores
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '16px',
  '&:focus': {
    outline: 'none',
  }
};

const ConfirmationModal = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <WarningRoundedIcon sx={{width: '60px', height: 'auto', color: 'black'}} />
        
        <Typography variant="h6" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
          {title || "Você tem certeza?"}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {message}
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button onClick={onClose} variant="outlined" color="inherit">
            Cancelar
          </Button>
          <Button 
            onClick={() => {
              onConfirm(); // Executa a ação de confirmação
              onClose();   // Fecha o modal
            }} 
            variant="contained" 
            color="error" // Cor vermelha para indicar uma ação destrutiva
            autoFocus
          >
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;