import { Button } from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../../components/Modal";
import FormContainer from "./FormContainer";

interface typeProps {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
}

const ModalForm = ({ isOpen, onOpen, onClose, }: typeProps) => {

  return (
    <>
      <Button
        colorScheme="teal"
        leftIcon={<BsPlusLg />}
        onClick={onOpen}
        alignSelf="flex-end"
        marginRight={20}
      >
        Adicionar
      </Button>

      <Modal title="Adicionar Produtor Rural" isOpen={isOpen} onClose={onClose}>
        <FormContainer onClose={onClose} />
      </Modal>
    </>
  );
};

export default ModalForm;
