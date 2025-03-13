const columns = (editButton: any, isMobile: boolean) => [
  { id: 'id', name: 'Id', hidden: true },
  { id: 'name', name: 'Nome do Produtor', },
  { id: 'cpf', name: 'CPF', width: '200px', hidden: isMobile },
  { id: 'cnpj', name: 'CNPJ', width: '200px', hidden: isMobile },
  { id: 'farm_name', name: 'Nome da Fazenda', hidden: isMobile },
  { id: 'total_hectares', name: 'Total de hectares', hidden: isMobile },
  { id: 'arable_hectares', name: 'Hectares aráveis', hidden: isMobile },
  { id: 'vegetation_arable', name: 'Hectares de Vegetação', hidden: isMobile },
  ...editButton
]

export default columns