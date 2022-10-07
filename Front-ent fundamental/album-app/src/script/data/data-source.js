const axios = require('axios').default;

class DataSource {
    static searchAlbum(keyword){
        axios.get('https://wendiapp-favalbum-default-rtdb.firebaseio.com/albums.json')
            .then(response => {
                return response.data
            }).then(responeData => {
                const filter = responeData.filter(data => data['title'].toUpperCase().includes(keyword.toUpperCase()))
                console.log(filter);
                if(filter.length > 0 ){
                    return Promise.resolve(filter)
                }else{
                    return Promise.reject(`${keyword} is not found`)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

}

export default DataSource;