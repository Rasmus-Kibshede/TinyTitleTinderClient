import { AlertColor } from '@mui/material';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type SnackbarDisplay = {
  open: boolean;
  message: string;
  status: AlertColor;
  setSnackbar: (open: boolean, message: string, status: AlertColor) => void;
  setOpen: (open: boolean) => void;
  resetAuthUser: () => void;
};

export const useSnackbarDisplay = create<SnackbarDisplay>()(
  persist(
    (set) => ({
      open: false,
      message: '',
      status: 'success',
      setSnackbar: (open, message, status) => set({ open, message, status }),
      setOpen: (open) => set({ open }),
      resetAuthUser: () => set({ open: false, message: '', status: 'success' }),
    }),
    {
      name: 'snackbar-display-storage',
    }
  )
);
