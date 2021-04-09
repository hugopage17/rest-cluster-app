export const setColor = (color) => {
  switch(color){
    case 200:
    case 'GET':
      return '#37f056'
    case 201:
    case 'POST':
      return '#14d4ff'
    case 400:
    case 403:
    case 404:
    case 'DELETE':
      return '#fa255e'
    default:
      return
  }
}
