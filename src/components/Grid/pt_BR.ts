const pt_BR = {
  search: {
    placeholder: '🔍Pesquisa, digite algo ...',
  },
  sort: {
    sortAsc: 'Sort column ascending',
    sortDesc: 'Sort column descending',
  },
  pagination: {
    previous: 'Voltar',
    next: 'Próximo',
    navigate: (page: number, pages: number) => `Página ${page} de ${pages}`,
    page: (page: number) => `Página ${page}`,
    showing: ' ',
    of: 'do total de',
    to: 'de',
    results: 'resultados',
  },
  loading: 'Carregando...',
  noRecordsFound: 'Nenhum resultado encontrado',
  error: 'Um erro ocorreu ao buscar os dados',
};

export default pt_BR;