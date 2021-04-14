

export const mapQueries = (queries) => {
    if(!queries || queries.length === 0){ return '' }
  
    return ''.concat(`?${queries.map((query, index) => `${query.key}${query.value !== '' ? '=':''}${query.value}${index+1 < queries.length ? `&`:''}`)}`).replace(/,/g, '')
  
  }