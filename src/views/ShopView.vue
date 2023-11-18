<template>
    <!-- <shop-page /> -->
    <filters-list :categoriesList="getUniqueCategories" @categoryClick="handleCategoryClick" />
    <pre>{{ getFilteredProducts }}</pre>
    <!-- <products-list :data="productList" /> -->
</template>

<script>
// import ShopPage from '@/components/ShopPage.vue'
import FiltersList from '@/components/FiltersList.vue'
// import ProductsList from '@/components/ProductsList.vue'
import productList from '@/data/productList.json'
export default {
    name: 'ShopView',
    components: {
        // ShopPage,
        FiltersList,
        // ProductsList,
    },
    data() {
        return {
            productList,
            filters: {
                category: null,
            },
        }
    },
    computed: {
        getUniqueCategories() {
            // const uniqueCategoriesArray = Array.from(
            //     new Set(this.productList.reduce((acc, product) => acc.concat(product.categories), []))
            // )
            // console.log(
            //     new Set(this.productList.reduce((acc, product) => acc.concat(product.categories), [])),
            //     ',kf ,kf '
            // )
            // Преобразуем Set обратно в массив
            // const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
            return Array.from(new Set(this.productList.reduce((acc, product) => acc.concat(product.categories), [])))
        },
        getFilteredProducts() {
            if (!this.filters.category) return this.productList
            return this.productList.filter((x) => x.category === this.filters.category)
        },
    },
    methods: {
        handleCategoryClick(val) {
            this.filters.category = val
        },
    },
    mounted() {
        console.log(productList, 'hjkhkjhdkifs')
    },
}
</script>

<style lang="scss" scoped></style>
