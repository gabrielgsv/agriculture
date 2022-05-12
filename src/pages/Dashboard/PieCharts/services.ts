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

    console.log('ufDataArray', ufDataArray);

    return ufDataArray;
  }
}