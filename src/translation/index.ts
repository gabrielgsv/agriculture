import i18next from "i18next";

const translation = () => i18next.init({
  lng: "pt-BR",
  resources: {
    "pt-BR": {
      translation: {
        'soybean': 'Soja',
        'corn': 'Milho',
        'cotton': 'Algodão',
        'coffee': 'Café',
        'sugarCane': 'Cana de açúcar',
      }
    }
  }
})

export default translation;