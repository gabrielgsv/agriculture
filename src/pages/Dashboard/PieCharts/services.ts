import i18next from 'i18next';

export function getUfData(data: any) {
  if (data && data.length > 1) {
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
  if (data && data.length > 1) {
    const cropsDataCount = data.reduce((previus: any, current: any) => {
      let cropsPlantedGroup = current.plantation_crops;
      cropsPlantedGroup.forEach((plantation_crops: any) => {
        if (!previus.hasOwnProperty(plantation_crops)) {
          previus[plantation_crops] = 0;
        }
        previus[plantation_crops]++;
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
  if (data && data.length > 1) {
    const arable_hectares = data.reduce((previus: any, current: any) => {
      return previus + Number(current.arable_hectares);
    }, 0);

    const vegetation_arable = data.reduce((previus: any, current: any) => {
      return previus + Number(current.vegetation_arable);
    }, 0);

    return [
      { type: 'Área agricultável', value: arable_hectares },
      { type: 'Área de vegetação', value: vegetation_arable }
    ];
  }
}