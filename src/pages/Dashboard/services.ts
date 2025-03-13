export function getTotalArea(data: any[]) {
  if (data && data.length > 1) {
    return data.reduce(function (previus: any, current: any) {
      return {
        total_hectares: parseInt(previus.total_hectares) + parseInt(current.total_hectares)
      }
    })
  }
}