import axios from 'axios'

export default {
    state:{},
    getters:{},
    mutations:{},
    actions:{
        async getSwipe({commit}){
            let res = await axios.get('/douban/v2/movie/in_theaters?city=南京&start=0&count=34&apikey=0b2bdeda43b5688921839c8ecb20399b')

            if(res){
                console.log(res)
            }
        }
    }
}