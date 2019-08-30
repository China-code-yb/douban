import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import swipe from './swipe'
<<<<<<< HEAD
import hotmovie from './hotmovie'
=======
import hotTv from './hotTv'
>>>>>>> 50b90299dbfaa0a2773091825d3884c50936ee19

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules:{
        swipe,
<<<<<<< HEAD
        hotmovie
=======
        hotTv
>>>>>>> 50b90299dbfaa0a2773091825d3884c50936ee19
    },
    plugins: [debug ? createLogger() : '']
})