import { Button, useDisclosure } from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../../components/Modal";
import FormProducer from "./FormProducer";

const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        leftIcon={<BsPlusLg />}
        onClick={onOpen}
      >
        Adicionar
      </Button>

      <Modal title="Adicionar Produtor Rural" isOpen={isOpen} onClose={onClose}>
        <FormProducer />
      </Modal>
    </>
  );
};

export default ModalForm;
