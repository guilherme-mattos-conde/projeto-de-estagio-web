import { useModalContext } from '../components/ModalProvider.tsx';

export const useModal = () => {
  return useModalContext();
};
