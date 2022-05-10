import { Grid as GridJs } from "gridjs-react";
import { h } from "gridjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import pt_BR from "../../../components/Grid/pt_BR";
import { getProducers, getEdit } from "../../../store/actions/producer";
import columns from "./coloumns";

const Grid = () => {
  // Check if is mobile
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  // End check if is mobile

  const dispatch: Dispatch<any> = useDispatch()

  const producers: any = useSelector(
    (state: any) => {
      return state.Producer.producers ? state.Producer.producers : []
    }
  )

  useEffect(() => {
    dispatch(getProducers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const editButton = [
    {
      name: 'Ações', formatter: (cell: any, row: any, data: any) => {
        return h('button', {
          style: 'background-color: #2c7a7b; color: #fff; border: none; padding: 5px 10px; border-radius: 7px;',
          onClick: () => dispatch(getEdit(row._cells[0].data))
        }, 'Visualizar/Editar');
      }
    }
  ]

  return (
    <>
      <GridJs
        data={producers}
        language={pt_BR}
        width='100%'
        autoWidth={true}
        columns={columns(editButton, isMobile)}
        search={true}
        pagination={{
          enabled: true,
          limit: 10,
        }}
      />
    </>
  );
};

export default Grid;
