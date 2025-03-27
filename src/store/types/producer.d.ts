export interface IProducer {
  cpf?: string;
  cnpj?: string
  name?: string;
  farm_name?: string;
  uf?: string;
  city?: string;
  total_hectares?: string;
  arable_hectares?: string;
  vegetation_arable?: string;
  plantation_crops?: any[];
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