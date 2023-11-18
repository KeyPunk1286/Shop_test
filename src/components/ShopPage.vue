<template>
    <h2 class="shop__title"></h2>
    <ul class="shop__list">
        <li v-for="category in getCategoriesProduct" :key="category">{{ category }}</li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShopPage',
    computed: {
        ...mapGetters(['getProductList']),
        getCategoriesProduct() {
            const productCategories = new Set(this.getProductList.map((categories) => categories.categories))
            const uniqueCategoriesArray = Array.from(productCategories)
            return uniqueCategoriesArray
        },
    },
}
</script>

<style lang="scss" scoped></style>
