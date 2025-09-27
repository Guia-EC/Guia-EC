// /components/FavoriteButton.js
"use client";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import LoginModal from './LoginModal';

const FavoriteButton = ({ roteiroId, variant = 'star' }) => {
  const { user, favoriteIds, addFavorite, removeFavorite } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const isFavorited = favoriteIds.has(roteiroId);

  const handleClick = async () => {
    if (!user) {
      setModalOpen(true);
      return;
    }

    try {
      if (isFavorited) {
        await removeFavorite(roteiroId);
        toast.success('Roteiro desfavoritado!');
      } else {
        await addFavorite(roteiroId);
        toast.success('Roteiro favoritado com sucesso!');
      }
    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-label="favoritar">
        {variant === 'trash' ? (
          <DeleteIcon sx={{ color: 'red' }} />
        ) : (
          isFavorited ? <StarIcon sx={{ color: 'orange' }} /> : <StarBorderIcon />
        )}
      </IconButton>
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default FavoriteButton;