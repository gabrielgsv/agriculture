import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

import { Container } from "../../components/Layout/Container";
import { Title } from "../../components/Layout/Title";
import { cleanEdit } from "../../store/actions/producer";
import Grid from "./Grid";
import ModalForm from "./ModalForm";

const Producer = () => {
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();
  const dispatch: Dispatch<any> = useDispatch();

  const editProducer: any = useSelector(
    (state: any) => {
      return state.Producer?.editProducer
    }
  )

  useEffect(() => {
    if (editProducer) {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editProducer])

  const onClose = () => {
    editProducer && dispatch(cleanEdit());
    onCloseModal();
  }

  return (
    <Container width="100%">
      <Title>Produtor Rural</Title>
      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Grid />
    </Container>
  );
};

export default Producer;
