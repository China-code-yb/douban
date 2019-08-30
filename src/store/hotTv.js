import axios from 'axios'
export default{
    state:{
        tvList:''
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        async getTvList({commit}){
            let res=await axios.get('/douban/j/search_tags?type=tv&source=index&apikey=0b2bdeda43b5688921839c8ecb20399b')
            if(res){
                console.log(res.data);
                // commit('')
                
            }
        }

    }
}