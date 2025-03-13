export function getTotalArea(data: any[]) {
  if (data) {
    return data.reduce(function (previus: any, current: any) {
      return {
        total_hectares: parseInt(previus.total_hectares) + parseInt(current.total_hectares)
      }
    })
  }
}