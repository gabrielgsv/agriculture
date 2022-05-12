import i18next from 'i18next';

export function getUfData(data: any) {
  if (data) {
    const ufDataCount = data.reduce((previus: any, current: any) => {
      let uf = current.uf;
      if (!previus.hasOwnProperty(uf)) {
        previus[uf] = 0;
      }
      previus[uf]++;
      return previus;
    }, {});

    const ufDataArray = Object.keys(ufDataCount).map((key: any) => {
      return {
        type: key,
        value: ufDataCount[key]
      };
    });

    return ufDataArray;
  }
}

export function getCropsData(data: any) {
  if (data) {
    const cropsDataCount = data.reduce((previus: any, current: any) => {
      let cropsPlantedGroup = current.cropsPlanted;
      cropsPlantedGroup.forEach((cropsPlanted: any) => {
        if (!previus.hasOwnProperty(cropsPlanted)) {
          previus[cropsPlanted] = 0;
        }
        previus[cropsPlanted]++;
      })
      return previus;
    }, {});


    const cropsPlantedArray = Object.keys(cropsDataCount).map((key: any) => {
      return {
        type: i18next.t(key),
        value: cropsDataCount[key]
      };
    });

    return cropsPlantedArray;
  }
}

export function getAreaData(data: any) {
  if (data) {
    const arableHectares = data.reduce((previus: any, current: any) => {
      return previus + Number(current.arableHectares);
    }, 0);

    const vegetationArable = data.reduce((previus: any, current: any) => {
      return previus + Number(current.vegetationArable);
    }, 0);

    return [
      { type: 'Área agricultável', value: arableHectares },
      { type: 'Área de vegetação', value: vegetationArable }
    ];
  }
}