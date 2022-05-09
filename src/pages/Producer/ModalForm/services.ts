import axios from "axios";

interface IBGECityResponse {
  id: string,
  nome: string;
}

export function getCities(uf: string, setCities: (cities: any) => void) {
  axios
    .get<IBGECityResponse[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    .then((res) => {
      const cities = res.data;

      setCities(cities);
    });
}