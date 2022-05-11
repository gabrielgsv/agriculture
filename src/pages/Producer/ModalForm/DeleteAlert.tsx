import { useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteProducer } from './services';

interface IProps {
  id: any,
  toast: any,
  onClose: () => void,
}


const DeleteAlert = ({ id, toast, onClose }: IProps) => {
  const [load, setLoad] = useState(false);

  const { isOpen, onOpen, onClose: onCloseDelete } = useDisclosure()
  const cancelRef: any = useRef()
  const dispatch = useDispatch();

  return (
    <>
      <Box width='90%'>
        <Button id='deleteIconButton' colorScheme='red' onClick={onOpen} isLoading={load}>
          <FiTrash2 />
        </Button>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' id='deleteTitle'>
              Excluir
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza? Você não pode desfazer esta ação depois!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseDelete} id='cancelDeleteButton'>
                Cancelar
              </Button>
              <Button
                colorScheme='red'
                id='deleteButton'
                onClick={() => {
                  setLoad(true);
                  onCloseDelete()
                  deleteProducer(id, toast, onClose, dispatch)
                }}
                ml={3}
              >
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
};

export default DeleteAlert;
