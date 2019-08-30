<template>
    <div>
        <ul>
            <li>最近热门电视剧</li>
            <li></li>
        </ul>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import to from  'await-to-js'
export default {
    methods: {
        ...mapActions(['getTvList']),
        async getTvLists(){
            let [err]=await to(this.getTvList())
            if(err){
                console.log(err);
                
            }else{
                console.log('最近热门电视剧列表获取成功');
                
            }
        }
        
    },
    created() {
        this.getTvLists()
    },
    
    
}
</script>
<style>
    
</style>