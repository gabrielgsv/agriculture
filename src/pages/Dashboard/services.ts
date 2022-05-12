export function getTotalArea(data: any[]) {
  if (data) {
    return data.reduce(function (previus: any, current: any) {
      return {
        totalHectares: parseInt(previus.totalHectares) + parseInt(current.totalHectares)
      }
    })
  }
}