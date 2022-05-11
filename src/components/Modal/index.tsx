import { Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

interface typeProps {
  title: string,
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const Modal = ({ title, isOpen, onClose, children }: typeProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
