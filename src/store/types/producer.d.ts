export interface IProducer {
  cpf?: string;
  cnpj?: string
  name?: string;
  farmName?: string;
  uf?: string;
  city?: string;
  totalHectares?: string;
  arableHectares?: string;
  vegetationArable?: string;
  cropsPlanted?: any[];
}

export type ProducerState = {
  producers?: IProducer[];
  editProducer?: IProducer;
}

type ProducerAction = {
  type: string;
  producers?: IProducer[];
  editProducer?: IProducer;
}

export type DispatchType = (args: ProducerAction) => ProducerAction

type GetEditAction = {
  type: 'GET_EDIT';
  editProducer: IProducer;
}

export type DispatchGetEditType = (args: GetEditAction) => GetEditAction