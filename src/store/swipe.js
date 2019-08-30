import axios from 'axios'

export default {
    state:{
        hot_movie_lists:[]
    },
    getters:{
        hot_movie_lists:state=>state.hot_movie_lists
    },
    mutations:{
        GET_HOT_MOIVE(state,v){
            state.hot_movie_lists = v
        }
    },
    actions:{
        async getSwipe({commit}){
            let res = await axios.get('/douban/v2/movie/in_theaters?city=南京&start=0&count=34&apikey=0b2bdeda43b5688921839c8ecb20399b')

            if(res){
                console.log(res)
                commit('GET_HOT_MOIVE',res.data.subjects)
            }
        }
    }
}