const columns = (editButton: any, isMobile: boolean) => [
  { id: 'id', name: 'Id', hidden: true },
  { id: 'name', name: 'Nome do Produtor', },
  { id: 'cpf', name: 'CPF', width: '200px', hidden: isMobile },
  { id: 'cnpj', name: 'CNPJ', width: '200px', hidden: isMobile },
  { id: 'farmName', name: 'Nome da Fazenda', hidden: isMobile },
  { id: 'totalHectares', name: 'Total de hectares', hidden: isMobile },
  { id: 'arableHectares', name: 'Hectares aráveis', hidden: isMobile },
  { id: 'vegetationArable', name: 'Hectares de Vegetação', hidden: isMobile },
  ...editButton
]

export default columns