import { createStore } from 'vuex'
import productList from '@/data/productList.json'

export default createStore({
    state: {
        productList,
    },
    getters: {
        getProductList: ({ productList }) => productList,
    },
    mutations: {},
    actions: {},
    modules: {},
})
