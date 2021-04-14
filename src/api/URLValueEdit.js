export const editUrl = (value, cb) => {
    let url
    let queriesArray   
    if(value.split('?').length === 2){
        url = value.split('?')[0]
        let queries = value.split('?')[1]
        queriesArray = [].concat(queries.split('&').map((query) => {
            let key = query.split('=')[0]
            let value = query.split('=')[1]
            if (key === undefined){
                key = ''
            }
            if (value === undefined){
                value = ''
            }
            return {
                key:key,
                value:value
            }
        })) 
    }else{
        url = value
        queriesArray = []
    }
    cb({
        url:url,
        queries:queriesArray
    })
}