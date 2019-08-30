import Axios from "axios";

export default {
    state:{
        hot_mv:[]
    },
    getters:{
        hot_mv:state=>state.hot_mv
    },
    mutations:{
        GET_HOT_MV(state,v){
            state.hot_mv = v
        }
    },
    actions:{
        async getHotMovie({commit}){
            let res =await Axios.get('/mv/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0')

            if(res){
                console.log(res)
                commit('GET_HOT_MV',res.data.subjects)
            }
        }
    }
}