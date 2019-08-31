import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import swipe from './swipe'

import hotmovie from './hotmovie'

import hotTv from './hotTv'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules:{
        swipe,

        hotmovie,

        hotTv

    },
    plugins: [debug ? createLogger() : '']
})